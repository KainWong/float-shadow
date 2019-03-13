<template>
<div id="topic-street">
    <div style="width:946px">
        <div class="head-style">
            <div class="head-line">
                <router-link to="/topicstreet" style="margin-right:2px"><span @click="active = 1" :class="active === 1 ? 'active-head' : 'head-topic'">话题列表</span></router-link>
                <router-link to="/newtopic"><span @click="active = 2" :class="active === 2 ? 'active-head' : 'head-topic'">最新话题</span></router-link>
            </div>
            <div class="new-topic">申请创建新话题</div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<style scoped>
#topic-street {
    width:100%;
    background:#FFF;
    display: flex;
    justify-content: center;
}
.head-style {
    margin-top: 20px;
    display: flex;
    margin-bottom: 20px;
    font-size: 12px;
    justify-content: space-between;
}
.head-line {
    display: flex;
}
.active-head {
    background: #f39a67;
    color: #FFF;
    padding: 7px 40px;
    cursor: pointer;
}
.head-topic {
    padding: 7px 40px;
    color: #666;
    background: #efefea;
    cursor: pointer;
}
.new-topic {
    background: #f58080;
    color: #FFF;
    padding: 7px 40px;
}
a { 
    text-decoration:none; 
} 
</style>
<script>
    export default {
        name: 'TopicStreet',
        components: {
        },
        props: {},
        data() {
            return {
                active: 1,
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