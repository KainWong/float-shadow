<template>
  <div>
      <div class="head-part">

      </div>
      <div class="body-part">
          <div class="item-line">
            <el-input placeholder="登陆邮箱" class="button-item"></el-input>
          </div>
          <div class="item-line">
            <el-input placeholder="密 码" class="button-item"></el-input>
          </div>
          <div class="item-line">
              <div class="item-line" style="justify-content: flex-end; width:250px; margin: 0 0">
                <el-button type="primary" >登陆</el-button>
              </div>
          </div>
          <div class="item-line">
            <div  class="item-line" style="justify-content: flex-end; width:250px; margin: 0 0">
                <label style="font-size:12px; color:#49812D; cursor:pointer">还没账号？立即注册>></label>
            </div>
          </div>
      </div>
      <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from './sub/Footer.vue';
import Header from './sub/Header.vue';
export default {
  name: 'Login',
  components : {
      'v-footer' : Footer,
      'v-header' : Header,
  }
}
</script>

<style scoped>
.head-part{
    height: 250px;
    background-color: #67C23A
}
.body-part{
    height: 302px;
    padding: 40px 0;
}
.button-item{
    width: 250px;
}
.item-line{
    display: flex;
    justify-content: center;
    margin:30px 0;
}

</style>
