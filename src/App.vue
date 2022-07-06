<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import './assets/css/main.css'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
}
}
</script>

<style>

</style>
