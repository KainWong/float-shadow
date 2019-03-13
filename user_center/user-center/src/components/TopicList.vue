<template>
<div>
    <img :src="mainImg.background" style="width:945px;margin-bottom:10px"/>
    <div v-for="(item,index) in parseInt(list/4)" :key="index">
        <div class="topic-line">
            <div v-for="i in 4" :key="i" class="topic-item">
                <img :src="topicImg['topic'+(index*4+i)]" style="width:192px;height:136px"/>
                <div class="topic">{{topicList[index*4+i]["title"]}}</div>
                <div class="text">{{topicList[index*4+i]["text"]}}</div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.topic-line {
    display: flex;

}
.topic-item {
    margin-right: 59px;
}
.topic-item .topic {
    font-size: 16px;
    color: #666;
    margin: 8px 0;
}
.topic-item .text {
    line-height: 14px;
    color: #888;
    font-size: 12px;
    margin-bottom: 20px
}
</style>
<script>
    import * as topicImg from '../../img/topicImage.js';
    import * as mainImg from '../../img/mainImage.js';
    export default {
        name: 'TopicList',
        components: {
        },
        props: {},
        data() {
            return {
                topicImg,
                mainImg,
                list: 26,
                topicList: [
                    {
                        title: '回家过年',
                        text: '思念，是一桌子熟悉的味道。'
                    },
                    {
                        title: '深夜食堂',
                        text: '深夜，一起饱尝人生百态'
                    },
                    {
                        title: '童年 ',
                        text: '回不去的天真岁月'
                    },
                    {
                        title: '重口味与小清新',
                        text: '为自己定位'
                    },
                    {
                        title: '爱部落，有爱的部落 ',
                        text: '我们在此等候 '
                    },
                    {
                        title: '改变自己',
                        text: '变则通 通则炯'
                    },
                    {
                        title: '你就是光',
                        text: '让黑夜的旅途有了温暖的方向'
                    },
                    {
                        title: '我是学霸',
                        text: '学习是一种很懒的好习惯'
                    },
                    {
                        title: '我们都是女汉子',
                        text: '记录女汉子们的幸福生活'
                    },
                    {
                        title: '班级日记',
                        text: '记录 那些欢声笑语'
                    },
                    {
                        title: '回家过年',
                        text: '思念，是一桌子熟悉的味道。'
                    },
                    {
                        title: '深夜食堂',
                        text: '深夜，一起饱尝人生百态'
                    },
                    {
                        title: '童年 ',
                        text: '回不去的天真岁月'
                    },
                    {
                        title: '重口味与小清新',
                        text: '为自己定位'
                    },
                    {
                        title: '爱部落，有爱的部落 ',
                        text: '我们在此等候 '
                    },
                    {
                        title: '改变自己',
                        text: '变则通 通则炯'
                    },
                    {
                        title: '你就是光',
                        text: '让黑夜的旅途有了温暖的方向'
                    },
                    {
                        title: '我是学霸',
                        text: '学习是一种很懒的好习惯'
                    },
                    {
                        title: '我们都是女汉子',
                        text: '记录女汉子们的幸福生活'
                    },
                    {
                        title: '班级日记',
                        text: '记录 那些欢声笑语'
                    },
                    {
                        title: '回家过年',
                        text: '思念，是一桌子熟悉的味道。'
                    },
                    {
                        title: '深夜食堂',
                        text: '深夜，一起饱尝人生百态'
                    },
                    {
                        title: '童年 ',
                        text: '回不去的天真岁月'
                    },
                    {
                        title: '重口味与小清新',
                        text: '为自己定位'
                    },
                    {
                        title: '爱部落，有爱的部落 ',
                        text: '我们在此等候 '
                    },
                    {
                        title: '改变自己',
                        text: '变则通 通则炯'
                    },
                    {
                        title: '你就是光',
                        text: '让黑夜的旅途有了温暖的方向'
                    },
                ]
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