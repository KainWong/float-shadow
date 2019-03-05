<template>
<div id="circleer">
    <div class="circle-head">
        <div class="line">
            <div class="main-title">我的圈儿</div>
            <router-link to="/circleer">
                <div :class="chooseTag === 1 ? 'one-title-active' : 'one-title'" @click="chooseTag = 1">圈儿首页</div>
            </router-link>
            <router-link to="/findcircle">
                <div :class="chooseTag === 2 ? 'one-title-active' : 'one-title'" @click="chooseTag = 2">发现圈儿</div>
            </router-link>
            <router-link to="/findtopic">
                <div :class="chooseTag === 3 ? 'one-title-active' : 'one-title'" @click="chooseTag = 3">发现话题</div>
            </router-link>
            <router-link to="/circleinfo">
                <div :class="chooseTag === 4 ? 'one-title-active' : 'one-title'" @click="chooseTag = 4">圈儿消息</div>
            </router-link>
        </div>
    </div>
    <div class="circle-body">
        <router-view style="width:946px"></router-view>
    </div>
</div>
</template>
<style scoped>
#circleer {
    width: 100%;
}
.circle-head {
    display:flex;
    justify-content:center;
    width: 100%;
}
.circle-head .line{
    width: 946px;
    display:flex;
    align-items:center;
    margin-bottom: 20px;
}
#circleer .main-title {
    font-size: 20px;
}
#circleer .one-title {
    font-size: 14px;
    padding-left: 20px;
    font-weight: 400;
    cursor: pointer;
    color: rgb(66, 116, 41)
}
#circleer .one-title-active {
    font-size: 14px;
    padding-left: 20px;
    font-weight: 400;
    cursor: pointer;
}
a { 
    text-decoration:none; 
    color:#333; 
} 
.circle-body {
    background:#FFF;
    display: flex;
    justify-content: center;
}
</style>
<script>
    export default {
        name: 'CircleEr',
        components: {
        },
        props: {},
        data() {
            return {
                chooseTag: 1,
            }
        },
        computed: {
        },
        watch: {
        },
        methods: {
        },
        created() {
        },
        destroyed() {
        },
        mounted() {
        }
    }
</script>