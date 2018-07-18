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
      <div class="foot-part">
          <div class="footer-line">
            <label class="footer-item">关于我们</label> |
            <label class="footer-item">联系我们</label> |
            <label class="footer-item">服务条款</label> |
            <label class="footer-item">常见问题</label> |
            <label class="footer-item">手机版</label> |
            <label class="footer-item">客户端</label> |
            <label class="footer-item">加入我们</label> |
            <label class="footer-item">给我们提意见</label> |
            <label class="footer-item">友情链接</label> |
            <label class="footer-item">流影周刊</label> 
          </div>
          <div class="footer-line">
              <label style="padding:0 3px">Copyright © 2014</label>
              <label class="footer-item">floatshadow.com</label>
              <label style="padding:0 3px">火ICP星130130130号-3   </label>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
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
.foot-part{
    background-color: #ebebeb;
    height: 60px;
    padding: 10px
}
.button-item{
    width: 250px;
}
.item-line{
    display: flex;
    justify-content: center;
    margin:30px 0;
}
.footer-item{
    color: #847F7E;
    padding: 0 3px;
    cursor: pointer;
}
.footer-item:hover{
    color:#FF9912
}
.footer-line{
    color:#847F7E;
    display: flex;
    justify-content: center;
    font-size: 12px;
    margin:10px;
}

</style>
