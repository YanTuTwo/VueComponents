<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ZForm',
    componentName: 'ZForm',
    provide() {
        return {
            zForm: this // 传递form实例给后代
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate(cb) {
            // 每个带prop属性的都进行一次检查
            const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
            // 所有校验成功才通过
            Promise.all(tasks).then(() => cb(true)).catch(() => cb(false))
        }
    },
    mounted() {
    }

}
</script>

<style lang="less" scoped>
</style>
