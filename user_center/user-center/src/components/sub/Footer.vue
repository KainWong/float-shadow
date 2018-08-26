<template>
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
</template>

<style scoped>
    .footer-line{
        color:#847F7E;
        display: flex;
        justify-content: center;
        font-size: 12px;
        margin:10px;
    }
    .foot-part{
        background-color: #ebebeb;
        height: 60px;
        padding: 10px
    }
    .footer-item{
        color: #847F7E;
        padding: 0 3px;
        cursor: pointer;
    }
    .footer-item:hover{
        color:#FF9912
    }
</style>

<script>
export default {
    
}
</script>