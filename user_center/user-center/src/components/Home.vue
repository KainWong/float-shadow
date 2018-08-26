<template>
    <div>
        <v-header></v-header>
        <v-main></v-main>
        <v-footer></v-footer>

    </div>
</template>

<style scoped>

</style>

<script>
import Footer from './sub/Footer.vue';
import Main from './sub/Main.vue';
import Header from './sub/Header.vue';
export default {
  name: 'Home',
  components : {
      'v-footer' : Footer,
      'v-main' : Main,
      'v-header' : Header,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>