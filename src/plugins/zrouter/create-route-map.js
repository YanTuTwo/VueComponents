import { clearPath } from './util/path'
import Regexp from 'path-to-regexp'

export function createRuteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {

    const pathList = oldPathList || [];

    const pathMap = oldPathMap || Object.create(null)

    const nameMap = oldNameMap || Object.create(null)

    routes.forEach(route => {
        addRouteRecord(pathList, pathMap, nameMap, route, parentRoute)
    });

    return {
        pathList,
        pathMap,
        nameMap
    }

}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
    const { path, name } = route;

    // 编译正则的选项
    const pathToRegexpOptions = route.pathToRegexpOptions || {};

    const normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict)

    // 大小写敏感匹配
    if (typeof route.caseSensitive === 'boolean') {
        pathToRegexpOptions.sensitive = route.caseSensitive
    }

    const record = {
        path: normalizedPath,
        regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
        components: route.components || { default: route.component },
        alias: route.alias ? typeof route.alias === 'string' ? [route.alias] : route.alias : [], // 别名
        instances: {},
        enteredCbs: {},
        name, // 命名路由
        parent,
        matchAs,
        redirect: route.redirect, // 重定向
        beforeEnter: route.beforeEnter,
        meta: route.meta || {},
        props: route.props == null ? {} : route.components ? route.props : { default: route.props }
    }

    // 记录所有路由
    if (!pathMap[record.path]) {
        pathList.push(record.path);
        pathMap[record.path] = record
    }

    if (route.alias !== undefined) {
        const aliases = Array.isArray(route.alias) ? route.alias : [route.alias];
        for (let index = 0; index < aliases.length; index++) {
            const alias = aliases[index];
            const aliasRoute = {
                path: alias,
                children: route.children
            }
            addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/')
        }
    }

    if (name) {
        if (!nameMap[name]) {
            nameMap[name] = record
        }
    }

}

function compileRouteRegex(path, pathToRegexpOptions) {
    const regex = Regexp(path, [], pathToRegexpOptions)
    return regex;
}

function normalizePath(path, parent, strict) {
    console.log(path);
    // 严格匹配末尾/
    if (!strict) path = path.replace(/\/$/, '');
    if (path[0] === '/') return path;
    if (parent == null) return path;
    return clearPath(`${parent.path}/${path}`)
}
