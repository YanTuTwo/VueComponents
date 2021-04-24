<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>

<script>
import Schema from 'async-validator';
export default {
    name: 'ZFormItem',
    componentName: 'ZFormItem',
    inject: ['zForm'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: String
    },
    data() {
        return {
            errorMessage: ''
        }
    },
    methods: {
        validate() {
            // 执行组件检测
            // 获取校验规则
            const rules = this.zForm.rules[this.prop];

            // 获取数据
            const value = this.zForm.model[this.prop];

            const desc = {
                [this.prop]: rules
            };
            console.log(desc);

            const schema = new Schema(desc)
            // 参数1是值，参数2是校验错误对象数组
            // 返回值Promise<boolean>
            return schema.validate({ [this.prop]: value }, errors => {
                if (errors) {
                    this.errorMessage = errors[0].message;
                } else {
                    this.errorMessage = ''
                }
            })
        }
    },
    mounted() {
        this.$on('z.form.change', (val) => {
            console.log(val);
            this.validate()
        })
    }
}
</script>

<style>

</style>
