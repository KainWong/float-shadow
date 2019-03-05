<template>
<div>
    <div class="head-line">
        <div :class="activeTopic === 1 ? 'one-head-active' : 'one-head'" @click="activeTopic = 1">最新话题</div>
        <div :class="activeTopic === 2 ? 'one-head-active' : 'one-head'" @click="activeTopic = 2">我发布的</div>
        <div :class="activeTopic === 3 ? 'one-head-active' : 'one-head'" @click="activeTopic = 3">我回复的</div>
        <div :class="activeTopic === 4 ? 'one-head-active' : 'one-head'" @click="activeTopic = 4">我加入的</div>
    </div>
    <div style="width:100%;height:1px;"></div>
    <div style="display:flex">
        <table>
            <thead>
                <tr>
                    <th style="width:301px">话题</th>
                    <th style="width:44px">回复</th>
                    <th style="width:74px">时间</th>
                    <th style="width:94px">发起人</th>
                    <th style="width:104px">圈儿</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in topicList" :key="index">
                    <td class="point">{{item.topic}}</td>
                    <td>{{item.reply}}</td>
                    <td>{{item.time}}</td>
                    <td class="point">{{item.person}}</td>
                    <td class="point">{{item.circle}}</td>
                </tr>
            </tbody>
        </table>
        <div style="width:250px;">
            <div class="side-div">
                <h5 class="recent-circle">
                    <span style="border-bottom: solid 3px #ff9b78;">我最近访问的圈儿 </span>
                </h5>
                <div style="margin-left:20px;display:flex">
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                </div>
            </div>
            <div class="side-div">
                <h5 class="recent-circle">
                    <span style="border-bottom: solid 3px #ff9b78;">热门圈儿 </span>
                </h5>
                <div style="margin-left:20px;display:flex">
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                </div>
                <div style="margin-left:20px;display:flex">
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                    <div class="img-react">
                        <img src="../../img/topic.jpg"/>
                        <div>神经病文学</div>
                    </div>
                </div>
            </div>
            <div class="side-div">
                <h5 class="recent-circle">
                    <span style="border-bottom: solid 3px #ff9b78;">最近话题 </span>
                </h5>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.head-line {
    display: flex;
    margin-top: 30px;
}
.one-head {
    width: 84px;
    height: 28px;
    margin-right: 8px;
    background: #e6e6e6;
    color: #666;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
}
.one-head-active {
    width: 84px;
    height: 28px;
    margin-right: 8px;
    background: rgb(233, 150, 150);
    color: #FFF;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
}
th {
    color: #999;
    text-align: left;
    padding: 3px 5px 3px 0;
    border-bottom: dashed 1px #ccc;
    font-size: 12px;
}
td {
    color: #999;
    text-align: left;
    padding: 3px 5px 3px 0;
    border-bottom: dashed 1px #ccc;
    font-size: 12px;
}

.point{
    cursor: pointer;
    color: rgb(66, 116, 41)
}

.point:hover{
    color:rgb(233, 150, 150);
}

.sidebox {
    margin-bottom: 20px;
    padding-left: 20px;
    width: 300px;
}
.recent-circle {
    margin-bottom: 15px;
    line-height: 25px;
    height: 25px;
    border-bottom: solid 1px #e6e6e6;
    position: relative;
    color: #666;
    margin: 0 0 0 30px;
    width: 100%;
}
.side-div {
    margin-bottom: 40px;
}
.img-react {
    padding: 20px 10px;
}
.img-react div:hover {
    color:rgb(233, 150, 150);
}
.img-react img {
    cursor: pointer;
    width:50px;
    height:50px
}
.img-react div {
    cursor: pointer;
    color: rgb(66, 116, 41);
    font-size: 12px;
}
</style>
<script>
    export default {
        name: 'CircleHome',
        components: {
        },
        props: {},
        data() {
            return {
                activeTopic: 1,
                topicList: [
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
                    },
                    {
                        topic: '我想看很好笑很好笑的美剧 求推荐',
                        reply: 13,
                        time: '2018.12.28',
                        person: '我的眼睛里',
                        circle: '迷上英剧迷'
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