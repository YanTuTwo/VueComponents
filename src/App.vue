<template>
    <div id="app">
        <!-- 表单组件测试 -->
        <FormIndex></FormIndex>
        <!-- 路由测试 -->
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-view />
    </div>
</template>

<script>
import FormIndex from '@/components/ZForm/FormIndex.vue';

export default {
    name: 'App',
    components: {
        FormIndex
    },
    data() {
        return {
            inputValue: 'dsadasd'
        };
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
