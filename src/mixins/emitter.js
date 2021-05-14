// 祖孙组件通信
function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
        const name = child.$options.componentName;
        if (name === componentName) {
            child.$emit.apply(child, [eventName, params])
        } else {
            broadcast.apply(child, [componentName, eventName, params])
        }
    });
}
export default {
    methods: {
        // 通过自定义的组件名判断
        dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.componentName;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.componentName
                }
            }

            if (parent) {
                // 使用apply只是为了数组的参数解析？
                parent.$emit.apply(parent, [eventName, params])
                // parent.$emit(eventName, params)
            }
        },

        broadcast(componentName, eventName, params) {
            broadcast.apply(this, [componentName, eventName, params])
        }
    }
}
