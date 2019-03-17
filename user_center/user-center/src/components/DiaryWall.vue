<template>
<div style="display:flex;justify-content:center">
    <div style="width:946px;display:flex;">
        <div class="column">
            <div class="left-part">
                <div class="alink">最近回复的日记</div>
                <div class="alink">最近传阅的日记</div>
                <div class="alink">最近喜欢的日记</div>
                <div class="alink">昨天这时的日记</div>
            </div>
            <div class="left-part" style="padding:10px 10px">
                <img :src="mainImg['diary']"/>
            </div>
            <div class="left-part" v-for="(item,index) in diaryList1" :key="index">
                <img :src="diaryImg['diary' + (index*4+1)]"/>
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="column">
            <div class="left-part" v-for="(item,index) in diaryList2" :key="index">
                <img :src="diaryImg['diary' + (index*4+2)]"/>
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="column">
            <div class="left-part" v-for="(item,index) in diaryList3" :key="index">
                <img :src="diaryImg['diary' + (index*4+3)]"/>
                <p>{{item.text}}</p>
            </div>
        </div>
        <div class="column">
            <div class="left-part" v-for="(item,index) in diaryList4" :key="index">
                <img :src="diaryImg['diary' + (index*4+4)]"/>
                <p>{{item.text}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
.column {
    width: 225px;
    margin-right: 10px;
}
.left-part {
    border: solid 1px #c5d6e6;
    background: #FFF;
    margin-top:20px;
    padding: 10px 12.5px;
}
.left-part p {
    width: 200px;
    padding: 5px 5px;
    margin-top: 10px;
    font-size: 12px;
    color: #666;
    line-height: 180%;
    padding: 0 5px;
    text-align: left;
}
.alink {
    display: block;
    padding: 10px 30px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #aaa;
    border-bottom: solid 1px #ffffff;
    font-weight: 300;
}
</style>
<script>
    import * as mainImg from '../../img/mainImage.js';
    import * as diaryImg from '../../img/diaryImage.js'
    export default {
        name: 'DiaryWall',
        components: {
        },
        props: {},
        data() {
            return {
                mainImg,
                diaryImg,
                diaryList: [
                    {
                        title: '活着便精彩',
                        introduction: '年轻的碎碎念念',
                        text: '现在的自己已经22岁了。马上拉开了毕业工作的序幕。 迄今为止，大学三年的生活，让我现实了很多。 我愿意听从爸爸的话，做一名小学音乐老师，他任职校长，从事教育很多很多年。 我不再去任性，去憧憬过一种有的没的的生活 父母能帮你一下都强过于你自己扑腾很多，虽然这话是大学恩师告诉我的 我很明白 自己热爱写作，自己热爱爵士鼓 但我不可以在毕业的当口就去从事自己热爱的事业 我只能退而求其次 找到轻松稳定并且有社会地位的职 ...'
                    },
                    {
                        title: '和谐君',
                        introduction: '生活',
                        text: '杂谈 现在是2018年8月10日上午，回想这一年，既平淡又充满坎坷。很多时候，都不是很明白自己到底想要的是什么，我想可能还是我的心灵不够强大吧。 从小我就是一个很爱思考的孩子，过多的思考总是会让人觉得很痛苦，正所谓烦恼都是源自想的太多而做的太少。偏偏人又都是矛盾的，心中既有着理想主义式的英雄情结偏偏又总是会逃避，又渴望平淡。既害怕孤独却有不明白怎么和恋人相处。有时候我的内心会非常恐惧，25岁的我，难道已经在 ...',
                    },
                    {
                        title: 'Originals',
                        introduction: 'Day',
                        text: '如果当时的自己能再努力一点是不是就不用在现在这个学校了呢？担惊受怕地每个学期要分班怕遇到之前那个搬出去的室友，明明就是她的错，却搞的我不敢面对她，心里很慌张',
                    },
                    {
                        title: '快乐小肥柴',
                        introduction: '肥柴的日常',
                        text: '老同学说我结婚后不向以前了 接地气了 觉得我现在挺好的 -------------------- 意思就是以前的我不可一世，心高气傲 现在的我被生活折磨得 蓉蓉烂烂了 好吧好吧 是我不够强大了 ',
                    },
                    {
                        title: 'miiky',
                        introduction: '点滴生活',
                        text: '哭够了，抱抱自己 睡一觉， 明天又好像是很好的一天 一个人熬过所有的苦 谁给的糖都不要了',
                    },
                    {
                        title: '芒果妈',
                        introduction: '芒哥的日常',
                        text: '芒哥，你频繁夜醒的问题，得不到解决 就长不高，长不好 焦灼不安 该怎么办才好',
                    },
                    {
                        title: '一只透明的猫',
                        introduction: '2019',
                        text: '家里人从来没夸过我好看 永远都在说我丑 所以我一直自卑 每次自信一点点就被打回原样 连个爱我的人都没有',
                    },
                    {
                        title: '丝瓜小姐爱咬人',
                        introduction: 'je t aime',
                        text: '177。。睡醒起来就可以看到先生啦。 磨蹭到现在才想起来还没写东西。。 被知道又要被说了。。 我好想你。。。',
                    },

                    {
                        title: 'shine_晒',
                        introduction: 'thinking',
                        text: '我很不开心 没有人喜欢我 我也没有喜欢的人 这个事像魔障一样困着我 我知道客观来看我有一些闪光点 优点 可关键问题是 我自己不信 怎么能自信啊 怎么学得会啊 我无法用真实的自己去面对这个世界 无法敞开心扉 而我无法清晰的解释为什么 来源是什么 我只清楚的知道 如果我一直这么下去 我就真的会迎来纠结、自怨自艾、孤独到死的一生 我不愿意的 我也希望有爱 有被爱 但每当面对一些场合 我实在不知道要怎么 所谓 展示自 ...',
                    },
                    {
                        title: 'Z小闲',
                        introduction: '云卷心散',
                        text: '	最近开启相亲模式，没想到第一次就遇到老同学，还是一个不熟的初中同学。第一感觉就是，完了，尴尬了，没戏了，呵呵.....可是对方并不排斥，我就无语了，他是觉得可以试试？这个我倒没想到，因为小时候一点没注意过他，现在想，应该也不会有感觉的。 加微信，聊电话，吃饭，压马路，依旧老同学相聚视觉，虽然看上去长大了，但人感觉在那端着，想让人觉得他成熟，有能力，是成功的。这种做法，曾经的我也不自觉下意识过，但，现在.... ...',
                    },
                    {
                        title: '半天飞人',
                        introduction: '美国随记',
                        text: '2019/3/9与吴文生去台北参加温岭同乡会的餐会，叶匡时也来参加，特地与他合影，还见到汪夏莲，至少54年没见过面，还认得出来',
                    },
                    {
                        title: '心寄',
                        introduction: '孕期记事',
                        text: '最近好久没有称体重了。但是最近早饭有多吃哦。 今日早餐:大半碗粥，两个白煮蛋。 10点吃了两个鲜花饼。 胃口不小吧！！！！ ',
                    },
                    {
                        title: 'Cherishment',
                        introduction: '最重要的小事',
                        text: '孩子他奶在宝宝从出生到现在从没冲过奶粉因为她说她看不清奶瓶上的刻度。马上我要休完产假去上班了她准备单独带孩子，又改口说她能看清，说，那个瓶子上面字大，有什么看不清的！结果今晚我大姑姐试了她一下，一下就露馅了，问她120ml在哪，她看了半天，指着140ml说：是这个吧… 你看不清就实话实说嘛，戴个老花镜就行了，为什么看不清还要硬说自己看得清呢？孩子怎么放心完全交给她带？',
                    },
                    {
                        title: 'yoyook',
                        introduction: '有空就嘿嘿',
                        text: '新年過得賊快，感覺還沒好好睡個覺就要上班了，最近做的一個項目做的很痛苦，不知道什麼時候才能結束，畫到想嘔，希望快點調到澳門，嘗試下新環境，感覺能學習到更多。 ',
                    },
                    {
                        title: '给你一场旅行',
                        introduction: '生命之花',
                        text: '2019年3月1日 最近情绪开始暴躁易怒，想到未来充满了惶恐，害怕，此刻我想人为什么活着，要是时间永远停留在这里就好了，没有烦恼，没有压力，我是个特别脆弱的人，心理承受能力也是极弱，从小就是如此，我觉得这个是先天就具备的吧，我很想努力强大起来，但是我做不到，特别痛苦，那种想放弃一起的感受越来越强烈，我不知道什么时候就爆发了，死亡似乎距离我越来越近。但是我放不下母亲，活着为了她死了担心她',
                    },
                ]
            }
        },
        computed: {
            diaryList1(){
                return this.diaryList.filter((x,inx) => {
                    if((inx+1)%4===1) return x
                })
            },
            diaryList2(){
                return this.diaryList.filter((x,inx) => {
                    if((inx+1)%4===2) return x
                })
            },
            diaryList3(){
                return this.diaryList.filter((x,inx) => {
                    if((inx+1)%4===3) return x;
                })
            },
            diaryList4(){
                return this.diaryList.filter((x,inx) => {
                    if((inx+1)%4===0) return x;
                })
            },
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