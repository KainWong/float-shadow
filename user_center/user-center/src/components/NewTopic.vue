<template>
<div style="display:flex;justify-content:center">
    <div style="width:945px">
        <div v-for="(item,index) in topicList" :key="index" style="height:240px;display:flex">
            <div class="tag">
                <p>{{item.tag}}</p>
            </div>
            <div class="article">
                <div>
                    <div class="title">
                        <p>{{item.title}}</p>
                        <img :src="recentImg['recent'+(index+1)]"/>
                    </div>
                    <p class="date">{{item.date}}</p>
                    <p class="text">{{item.text}}</p>
                </div>
                <hr>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.tag {
    background-color: rgb(250, 250, 245);
    width: 240px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 80px;
}
.tag p {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 20px;
    vertical-align: baseline;
    background: transparent;
    color: #444;
}
.article {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.article .title{
    color: #444;
    font-size: 17px;
    margin: 0 0;
    display: flex;
    justify-content: space-between;
}
.article .date{
    color:  #aaa;
    font-size: 12px;
}
.article .text {
    color: #666;
    font-size: 15px;
    line-height: 24px;
}
.article img {
    border-radius: 50%;
    height: 50px;
    width: 50px
}
</style>
<script>
    import * as recentImg from '../../img/recentImage.js'
    export default {
        name: 'NewTopic',
        components: {
        },
        props: {},
        data() {
            return {
                recentImg,
                topicList: [
                    {
                        tag: '暗恋',
                        title: '最熟悉的默申人',
                        date: '嘿~真小姐 发表于 2019.03.11 22:28:14',
                        text: '暗戀 我這樣性格的人，大體上是不會長久暗戀。 所有的喜歡都能從聊天對話里、從眼睛里流出來。 初中時暗戀班上長得帥，唱歌棒，打球好的男孩子，不久便送去一封情書。 高中時暗戀隔壁班從窗前走過的側臉，不久便加上QQ說“我喜歡你”。 終究都是無結果，無非是多了些姐妹聚會時的談資。 可長到這個年紀，倒要開始一段長長的暗戀。 怎麼也說不出來祝福的話，不打擾已是用盡...'
                    },
                    {
                        tag: '许愿墙',
                        title: '躲猫猫吧',
                        date: '紫凝儿的晴天 发表于 2019.02.23 23:17:56',
                        text: '未来的自己，你好。 未来有多远呢？那会是哪一年？ 又是一个不眠的夜， 这世上到最后我最爱的人， 任由我的寂寞飘成了雪。 无力，撕扯， 我不知道还有没有未来， 也许真的没有， 正如最近的感觉一样'
                    },
                    {
                        tag: '旅行',
                        title: '随心所芋',
                        date: '沙漠里的海芋 发表于 2019.02.10 12:40:38',
                        text: '在不断成长的岁月里，旅行中开始愿意或者不由自主去思考一些人生哲理。只有当时可以领悟，为什么会有那样的体会。'
                    },
                    {
                        tag: '孤独的期待',
                        title: '碎碎念',
                        date: '四月天山 发表于 2019.01.23 00:12:05',
                        text: '思索半天 发一条隐晦的朋友圈 隔几分钟刷新一遍 期待有一条能看懂真实自己的留言 然而并没有任何一条留言 也许每个人都忙着自己的生活 顾不上看朋友圈 抑或顾不上留一个言 只剩你在这样的孤独中满心的期待'
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
            console.log(this.recentImg)
        }
    }
</script>