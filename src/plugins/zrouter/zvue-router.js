/**
 * 实现思路
 *
 *  1、绑定浏览器hashchange事件获取到hash
 *  2、解析路由参数配置生成map
 *  3、创建router-link 和 router-view
 */

import { createMatcher } from './create-matcher';

let Vue

class VueRoute {
    constructor(options) {
        this.$options = options;

        // path和route的映射
        this.routeMap = {}

        this.matcher = createMatcher(options.routes || [], this)

        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init() {
        // 绑定浏览器事件
        this.bingEvent()

        // 解析路由的配置信息
        this.createRouteMap(this.$options)

        // 创建route-link 和 route-view
        this.initComponent()
    }

    bingEvent() {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/';
    }

    createRouteMap(options) {
        console.log(options);
        options.routes.forEach(item => {
            this.routeMap[item.path] = item;
        });
    }

    initComponent() {
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
                // return <a href={this.to}>{this.$slots.default}</a>
            }
        })

        Vue.component('router-view', {
            // =>函数保持this指向
            render: (h) => {
                if (!this.routeMap[this.app.current]) {
                    return h()
                }
                const Comp = this.routeMap[this.app.current].component;
                return h(Comp)
            }
        })
    }
}

VueRoute.install = function(_Vue) {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            // 只在根组件初始化一次
            if (this.$options.router) {
                this.$options.router.init()
            }
        }
    })
}

export default VueRoute;
