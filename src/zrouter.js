import Vue from 'vue';
import VueRoute from './plugins/zrouter/zvue-router';

Vue.use(VueRoute)

export default new VueRoute({
    routes: [
        {
            path: '/',
            component: () => import('./components/ZRouter/Home')
        },
        {
            path: '/about',
            component: () => import('./components/ZRouter/About')
        }
    ]
})
