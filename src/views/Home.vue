<template>
  <div class="wrapper">
    <div class="container">
        <div class="item">
          <h1 class="">Home - {{ page_title }}</h1>
          <section>
            <article>
              <h2>Bem-vindos ao Desafio de FrontEnd Skore</h2>
              <br />
              <h3>O desafio consiste no desenvolvimento de um projeto, responsivo, em Nuxt.js que atenda os seguintes requisitos:</h3>
              <br />
              <ul>
                <li>Ter uma página que liste conteúdos;</li>
                <li>Ter uma página que mostre os detalhes de um conteúdo buscando-o através do seu id;</li>
              </ul>
              <br />
              <br />
              <h3>Principais tecnologias utilizadas na Skore:</h3>
              <br />
              <ul>
                <li>Nuxt.js;</li>
                <li>Jest e Vue Test Utils;</li>
                <li> SCSS;</li>
                <li>GraphQL;</li>
                <li>GitHub Actions;</li>
              </ul>
            </article>
          </section>
          <Submenu />
        </div>
    </div>
  </div>
</template>

<script>
import Submenu from '@/components/Submenu.vue'

export default {
    name: "HomeVue",
    data () {
      return {
        page_title: "Página Inicial"
      }
    },
    components: { Submenu }
}
</script>
<style scoped>
.saiba-mais{
 font-size: large;
 font-weight: bold;
 color: #5e5d5d;
}
</style>
