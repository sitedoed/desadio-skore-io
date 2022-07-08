import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home.vue';
import DesafioVue from './views/Desafio.vue';
import SaibamaisVue from './views/Saibamais.vue'
import ListaCompletaVue from './views/ListaCompleta.vue'
import NotFoundVue from "./components/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },    
    {
        path: '/lista_completa',
        name: 'lista_completa',
        component: ListaCompletaVue
    },  
    {
        path: '/desafio',
        name: 'desafio',
        component: DesafioVue
    },  
    {
        path: '/saiba_mais',
        name: 'saiba_mais',
        component: SaibamaisVue
    },
    {
        path: '/saiba_mais/:id',
        name: 'saiba_mais/:id',
        component: SaibamaisVue
    },
    {   path: '/404',
        name: 'NotFound',
        component: NotFoundVue 
    },  
    {   path: '/:pathMatch(.*)*', 
        redirect: '/404' 
    }      
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;