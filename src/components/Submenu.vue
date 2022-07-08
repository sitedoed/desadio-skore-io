<template>
    <div>
        <h3>Lista Simples</h3>
        <br />
    </div>
    <div
        v-for="item in contents"
        :key="item.id"
        class=""
    >
        <ul>
            <li></li>
             <li><router-link :to="`/saiba_mais/${item.id}`"><span class="saiba-mais">{{ item.title }}</span></router-link></li>
        </ul>
    </div>
</template>
<script>
import gql from 'graphql-tag'

export default {
    name: "SubmenuVue",
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
    }`,
    },
}
</script>
<style>
    
</style>