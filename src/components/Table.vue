<template lang="">
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Url</th>
                <th scope="col">Embeddable</th>
                <th scope="col">Download</th>
                <th scope="col">Data de criação</th>
                <th scope="col">Última atualização</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in contents" :key="item.id" class="">
                <th scope="row">{{ item.type }}</th>
                <td><router-link :to="`/saiba_mais/${item.id}`">
                    {{ item.title }}
                    </router-link>
                </td>
                <td>{{ item.embeddable }}</td>
                <td>{{ item.allow_download }}</td>
                <td>{{ item.created_at }}</td>
                <td>{{ item.updated_at }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import gql from 'graphql-tag'

export default {
    name: 'TableVue',
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
<style scoped>
    tr{
        text-align: left;
        width: 100px;
    }
</style>