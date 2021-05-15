import { createRuteMap } from './create-route-map'

export function createMatcher(routes, router) {
    const { pathList, pathMap, nameMap } = createRuteMap(routes)
    console.log(pathList);
    console.log(pathMap);
    console.log(nameMap);
}
