<template>
    <div>
        <div class="head-show">
            <div class="head-picture">
                <div style="width:145; height:145px"></div>
                <div class="ser-info">
                    {{userName}}
                </div>
                <div class="breaklineS"></div>
                <div></div>
            </div>
            <div></div>
        </div>
        <div></div>
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
</style>

<script>
export default {
    data() {
        return {
            userName : '愚柴'
        }
    }
}
</script>


