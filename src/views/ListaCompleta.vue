<template>
    <div class="wrapper">
        <div class="container">
            <div class="item">
                <section>
                    <h1>{{ page_title }}</h1>
                    <p>Lista simples de contéudos, com seus respectivos campos, para referência.
                        Os campos "vazios" não têm valor cadastrado, como pode ser observado non link:
                        <strong>Saiba mais</strong>
                        de cada conteúdo. 
                    </p>
                    <br />
                </section>
                <section>
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
                            <li class="hide"><strong>Url:</strong> {{ item.url }}</li>
                            <li><strong>Embeddable:</strong> {{ item.embeddable }}</li>
                            <li><strong>Download:</strong> {{ item.allow_download }}</li>
                            <li><strong>Data de criação:</strong> {{ item.created_at }}</li>
                            <li><strong>Última atualização:</strong> {{ item.updated_at }}</li>
                            <li><router-link :to="`/saiba_mais/${item.id}`"><span class="saiba-mais">Saiba mais</span></router-link></li>
                        </ul>
                        </div>
                    </article>
                </section>
            
            </div>
        </div>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import '../assets/css/main.css'

export default {
    name: "ListaCompletaVue",
    data: function() {
        return {
        page_title: "Lista Completa"
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

<style>
.bold{
    font-weight:bold ;
}
</style>