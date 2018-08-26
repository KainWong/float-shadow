<template>
<div class="head-part">
    <div class="head-center">
        <i class="float-icon-cangku_kucunxiangqing head-item">首页</i>
        <i class="float-icon-ditu_diqiu head-item">小世界</i>
        <i class="float-icon-wenben head-item">日记墙</i>
        <i class="float-icon-yizhan head-item">话题街</i>
        <i class="float-icon-yibiaopan head-item">圈儿</i>
        <i class="float-icon-che head-item">公交站</i>
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
    
}
</script>

