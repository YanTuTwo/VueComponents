export default {
    methods: {
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
        }
    }
}
