import Vue from 'vue';
import Notice from '../components/Notice'

export default function createModel (props, component = null) {
    const vm = new Vue({
        render(h) {
            return h(!!component ? component : Notice, { props })
        }
    }).$mount()

    document.body.appendChild(vm.$el)

    const comp = vm.$children[0];

    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }

    return comp;
}
