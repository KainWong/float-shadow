<template>
    <div>
        <div class="head-show">
            <div class="head-picture">
                <div style="width:145; height:145px">
                    <img src="../../img/profile.jpg"  alt="头像">
                </div>
                <div class="ser-info">
                    {{userName}}
                </div>
                <div class="breaklineS"></div>
                <div :class="`mark-list ${item.icon}`" v-for="(item,index) in markList" :key="index">
                    {{item.name}}
                </div>
                <div class="breaklineS"></div>
                <div class="search">
                    <el-input placeholder="输入主题或标签"  prefix-icon="el-icon-search" size="mini"></el-input>
                </div>
            </div>
            <div class="inlet">
                <form>
                    <div class="tweet_date tweet_mon_7">
                        <p class="tweet_week">星期二</p>
                        <p class="tweet_day">28</p>
                    </div>
                    <div class="subjects clearfix">
                        <div class="channels buttons clearfix">
                            <el-select v-model="chooseTag" class="e-select" size="small">
                                <el-option v-for="(item,index) in tagList" :key="index" :label="item.name" :value="item.value"></el-option>
                            </el-select>
                            <el-button v-for="(item,index) in tagList" :key="index" size="small" :type="`${chooseTag === item.value ? 'primary' : ''}`" @click="changeChooseTag(item.value)">{{item.name}}</el-button>
                        </div>
                    </div>
                    <div class="subjects clearfix">
                        <div class="channels buttons clearfix">
                            <el-input
                                resize="none"
                                type="textarea"
                                :rows="8"
                                v-model="diaryInputing">
                            </el-input>
                        </div>
                    </div>
                    <div class="subjects clearfix">
                        <div class="buttons clearfix exoprt-button">
                            <el-button icon="el-icon-edit" type="primary">发布</el-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="diary-show">
            <div class="tag-head">
                <div v-for="(item,index) in tagList" :key="index" class="tag-style">{{item.name}}</div>
            </div>
            <div class="diary-detail">

            </div>
        </div>
    </div>
</template>

<style scoped>
.head-show {
    width: 946px;
    height :346px;
    display: flex;
}
.head-picture {
    width: 153px;
    color:rgb(66, 116, 41)
}
.ser-info {
    display: block;
    font-weight: 700;
    font-size: 18px;
    text-align: left;
    padding: 8px 5px;
    margin: 0px;
    height: 20px;
    line-height: 20px;
}
.breaklineS {
    border-top: solid 1px #e1e1e1;
    border-bottom: solid 1px #fff;
    clear: both;
}
.mark-list {
    display: block;
    text-align: left;
    font-size: 14px;
    height: 14px;
    height: 28px;
    line-height: 28px;
    margin: 0;
}
.ser-info,.mark-list,.tag-style {
    cursor: pointer;
}
.ser-info:hover,.mark-list:hover,.tag-style:hover {
    color:rgb(233, 150, 150)
}
.search {
    width: 153px;
    height: 16px;
    padding: 6px 0 2px 5px;
    padding: 7px 0 1px 5px\9;
    margin-top: 0;
    margin-top: 5px;
}
.inlet {
    width: 713px;
    border: solid 1px #eaeaea;
    background-color: #fbfbfb;
    padding: 20px 30px;
    text-align: left;
    color: #444444;
    margin: 0 0 0 32px;
}
form {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
.tweet_date {
    width: 60px;
    height: 60px;
    float: left;
    position: relative;
}
.tweet_mon_7 .tweet_week, .tweet_mon_7 .tweet_month {
    background-color: #077503;
}
.tweet_week {
    font-size: 14px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    border-radius: 5px 5px 0 0;
    color: #fff;
    margin-bottom: 0
}
.tweet_day {
    font-size: 20px;
    text-align: center;
    height: 38px;
    line-height: 38px;
    border-radius: 0 0 5px 5px;
    color: #444;
    background: #eeeeee;
    margin-top : 0
}
.inlet .subjects {
    text-align: left;
    margin: 0;
    padding: 0;
    width: 648px;
    /* float: right; */
}
.inlet .channels {
    height: 29px;
    padding: 13px 0 8px 100px;
}
.e-select {
    width: 150px;  
}
.exoprt-button {
    display: flex;
    justify-content: flex-end;
    margin-top: 150px;
}
.diary-show {
    width: 946px;
    display: flex;
}
.tag-head {
    width: 153px;
}
.diary-detail {
    width: 713px;
}
.tag-style {
    color: rgb(66, 116, 41);
    padding : 2px 0 2px 0;
    text-align: center;
    width:160px;
    border: #eaeaea
}
</style>

<script>
export default {
    name : 'HomePage',
    data() {
        return {
            userName : '愚柴',
            markList : [
                {
                    name : '我的回复',
                    path : '',
                    id : '',
                    icon : 'float-icon-duanxinqunfa'
                },
                {
                    name : '提到我的',
                    path : '',
                    id : '',
                    icon : 'float-icon-anniu-zan'
                },
                {
                    name : '订阅我的',
                    path : '',
                    id : '',
                    icon : 'float-icon-biaoqian'
                },
                {
                    name : '我喜欢的',
                    path : '',
                    id : '',
                    icon : 'float-icon-xiai'
                },
            ],
            chooseTag : 'life',
            tagList :[
                {
                    value : 'life',
                    name : '生活'
                },
                {
                    value : 'love',
                    name : '感情'
                },
                {
                    value : 'bussiness',
                    name : '事业'
                },
                {
                    value : 'secret',
                    name : '秘密'
                },
            ],
            diaryInputing : ''
        }
    },
    methods:{
        changeChooseTag(value){
            this.chooseTag = value;
        }
    }
}
</script>


