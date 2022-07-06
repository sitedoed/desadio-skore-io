<template lang="">
    <div>
        <section>
            <h2>{{ page }}</h2>
            <article
                v-for="item in contents"
                :key="item.id"
                class=""
            >
                <h3 class="">{{ item.title }}</h3>
                <div class="">
                <p><strong>Descrição: </strong> {{ item.description }}</p>
                <ul>
                    <li><strong>Tipo: </strong> {{ item.type }}</li>
                    <li><strong>Url:</strong> {{ item.url }}</li>
                    <li><strong>Embeddable:</strong> {{ item.embeddable }}</li>
                    <li><strong>Download:</strong> {{ item.allow_download }}</li>
                    <li><strong>Data de criação:</strong> {{ item.created_at }}</li>
                    <li><strong>Última atualização:</strong> {{ item.updated_at }}</li>
                </ul>
                </div>
                <li><router-link :to="`/saiba_mais/${item.id}`"><span class="saiba-mais">Saiba mais</span></router-link></li>
            </article>
        </section>
    </div>
</template>
<script>
import gql from 'graphql-tag'

export default {
    name: "ListaVue",
      data: function() {
            return {
            page: "Lista de Conteúdos"
            };
        },
        apollo: {
        contents: gql `
        query contents {
          contents {
            id
            title
            description
            type
            url
            embeddable
            allow_download
            created_at
            updated_at
          }
        }
      `,
    },
}
</script>
<style lang="">
    
</style>