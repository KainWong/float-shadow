<template>
<div class="head-part">
    <div class="head-center">
        <i v-for="(item,index) in menu" :key="index" :class="`head-item ${item.icon}`" @click="changeMenu(item)">{{item.name}}</i>
    </div>
</div>
    
</template>

<style scoped>
.head-part {
    height : 70px;
    width : 100%;
    background-color: #67C23A;
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
}
.head-center {
    display:flex; 
    justify-content: center;
    align-items: flex-start;
    width: 100%
}
.head-item {
    color: aliceblue;
    width: 74px;
    height: 24px;
    font-size: 14px;
    line-height: 20px;
    float: left;
    font-weight: 400;
    font-family: 宋体;
    padding: 5px 10px 0px;  
    cursor: pointer;
}
.head-item:hover {
    color:thistle
}
</style>

<script>
export default {
    name:'vheader',
    data(){
        return {
            namea :'a'
        }
    },
    computed: {
        menu(){
            return this.$store.state.menu;
        }
    },
    methods: {
        changeMenu(item){
            router.push(item.id)
        }
    }
}
</script>

