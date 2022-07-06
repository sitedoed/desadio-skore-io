<template>
  <div class="wrapper">
    <div class="container">
        <div class="item">
          <h1 class="">Desafio de FrontEnd Skore-io</h1>
          <Submenu />
          <br />
          <br />
          <Table />
        </div>
    </div>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
import Submenu from '@/components/Submenu.vue'

export default {
    name: "HomeVue",
    components: { Table, Submenu }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.saiba-mais{
 font-size: large;
 font-weight: bold;
 color: #5e5d5d;
}
</style>
