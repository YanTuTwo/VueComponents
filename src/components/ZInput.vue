<template>
  <div>
    <!-- 自定义组件要实现v-model，必须由：value，@input -->
    <!-- $attrs包含了父作用域中不作为prop被识别的attribute绑定 -->
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
    inheritAttrs: false, // 避免顶层容器继承属性
    mixins: [emitter],
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    watch: {
        value(val) {
            // if (this.)
            console.log(val);
            this.dispatch('ZFormItem', 'z.form.change', [val])
        }
    },
    methods: {
        onInput(e) {
            // 通知父组件数值变化
            this.$emit('input', e.target.value);

            console.log(this.$parent);
        }
    }
};
</script>

<style>
</style>
