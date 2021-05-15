<template>
    <div>
        <ZForm :model="model" :rules="rules" ref="z-form">
            <ZFormItem :label="'用户名'" :prop="'username'">
                <ZInput v-model="model.username"></ZInput>
            </ZFormItem>
            <ZFormItem :label="'密码'" :prop="'password'">
                <ZInput v-model="model.password" type="password"></ZInput>
            </ZFormItem>
            <ZFormItem>
                <ZButton @click.stop="onLogin">登录</ZButton>
            </ZFormItem>
        </ZForm>
    </div>
</template>

<script>
import ZForm from './ZForm'
import ZFormItem from './ZFormItem'
import ZInput from '../ZInput'
import ZButton from '../ZButton'
import createModel from '../../utils/createModel'
export default {
    components: {
        ZForm,
        ZFormItem,
        ZInput,
        ZButton
    },
    data() {
        return {
            model: {
                username: 'tom',
                password: '123',
                remmber: false
            },
            rules: {
                username: [ { required: true, message: '用户名必填' } ],
                password: [ { required: true, message: '密码必填' } ]
            }
        }
    },
    methods: {
        onLogin() {
            // 检查规则
            this.$refs['z-form'].validate((isValid) => {
                // console.log(isValid ? '成功' : '失败');
                console.log(isValid);
                const comp = createModel({
                    title: '登录',
                    message: isValid ? '成功' : '失败',
                    duration: 5000
                })
                comp.show();
            })
        }
    }
}
</script>

<style>

</style>
