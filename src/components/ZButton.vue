<template>
    <button @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
}
</script>

<style>

</style>
