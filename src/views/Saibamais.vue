<template>
  <div>
    <div class="container">
      <div class="item">
        <section>
          <article
            v-if="getContent"
          >
            <h1>Título: {{ getContent.title }} </h1>
            <p  v-if="getContent.description"><strong>Descrição: </strong>{{ getContent.description }}</p>
            <img v-if="getContent.type ==='image'" :src="getContent.url" :alt="getContent.type" /> 
            <div v-if="getContent.type ==='video'" > 
              <Video :video_src="getContent.url" />
            </div>      
              <a v-if="getContent.type ==='link' || getContent.type ==='document'" :href="getContent.url" target="_blank" rel="noopener">Link Externo</a>
            <ul>
              <li><strong>Tipo de conteúdo: </strong> {{ getContent.type }}</li>
              <li><strong>Url:</strong> {{ getContent.url }}</li>
              <li><strong>Embeddable:</strong> {{ getContent.embeddable }}</li>
              <li><strong>Download?</strong> {{ getContent.allow_download }}</li>
              <li><strong>Criado em:</strong> {{ getContent.created_at }}</li>
              <li><strong>Atualizado em:</strong> {{ getContent.updated_at }}</li>
              <li><strong>Typename</strong> {{ getContent.__typename }}</li>
            </ul>
          </article>
        </section>
        <Submenu />
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import '../assets/css/main.css'
import Video from '@/components/Video.vue'
import Submenu from '@/components/Submenu.vue'; 

export default {
    data() {
        return {
            contentId: "627150a0-c0dc-45d5-8d4c-f8a69e38b3cf"
        };
    },
    name: "SaibamaisVue",
    apollo: {
        getContent: {
            query: gql `
          query ($id: String!){
            getContent (id: $id) {
              id
              title
              description
              type
              url
              embeddable
              allow_download
              created_at
              updated_at
              __typename
            }
          }
        `,
            variables() {
                return {
                    id: this.$route.params.id
                };
            }
        }
    },
    components: { Video, Submenu }
}
</script>

<style scoped>
img{
  width: 50%;
  margin-bottom: 20px;
}
@media (max-width: 700px){
img{
  width: 100%;
}
}
</style>