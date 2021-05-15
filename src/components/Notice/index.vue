<template>
    <div class="notice-box" v-if="isShow">
        <h3>{{title}}</h3>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            isShow: false
        }
    },

    methods: {
        show() {
            this.isShow = true;
            setTimeout(() => {
                // this.hide()
            }, this.duration)
        },
        hide() {
            this.isShow = false;
            this.remove()
        }
    }

}
</script>

<style lang="less" scoped>
.notice-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    box-shadow: 1px 0px 10px #888888;
    border-radius: 5px;
    width: 300px;
    text-align: center;
}
</style>
