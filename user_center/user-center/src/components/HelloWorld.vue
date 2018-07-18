<template>
<div>
    <div>
      <router-link class="nav-item" to='/home'>
        <label>Home</label>
      </router-link>
    </div>
    <div>
      <router-link class="nav-item" to='/about' >
        <label>About</label>
      </router-link>
    </div>
    <el-button type="primary">aaa</el-button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
