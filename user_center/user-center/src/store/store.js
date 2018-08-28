import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const menu = [
    {
        id: 'home-page',
        name: '首页',
        icon: 'float-icon-cangku_kucunxiangqing',
    },
    {
        id: 'littleworld',
        name: '小世界',
        icon: 'float-icon-ditu_diqiu',
    },
    {
        id: 'diarywall',
        name: '日记墙',
        icon: 'float-icon-wenben',
    },
    {
        id: 'topicstreet',
        name: '话题街',
        icon: 'float-icon-yizhan',
    },
    {
        id: 'circleer',
        name: '圈儿',
        icon: 'float-icon-yibiaopan',
    },
    {
        id: 'busstop',
        name: '公交站',
        icon: 'float-icon-che',
    },
]

const state = {
    menu: menu
}
export default new Vuex.Store({
    state,
    menu
});