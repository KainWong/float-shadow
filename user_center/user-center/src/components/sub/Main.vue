<template>
<div class="main-style">
    <v-info></v-info>
</div>
    
</template>

<style scoped>
.main-style {
    background-color:#EEE;
    display: flex;
    justify-content: center;
}
</style>

<script>
import Info from '../Info.vue'
export default {
    components:{
    'v-info' : Info
    }
}
</script>