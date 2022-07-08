<template>
    <header id="top">
        <nav class="container">
            <a href="/">
                <img id="logo" src="/img/logos-1.webp" alt="logo"/>
            </a>
            <img v-on:click="openMenu" alt="Expandir Menu" id="menu-button" src="/img/toogle-btn.png"/>
            
            <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive"></div>
            <div id="menu-items" :class="{active:menuActive}">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/lista_completa">Lista Completa</router-link></li>   
                    <li><router-link to="/desafio">Sobre o Desafio</router-link></li>      
                    <li><a href="https://desafio-skore-io.netlify.app/" target="_blank" rel="noopener">Online Demo</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderVue',
    data(){
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }
 }
</script>  

<style scoped>
    header {
        background-color: var(--color-background-nav);
        width: 100%;
        height: 70px;
        position: fixed;
        margin-top: -20px;
        display: block;
        justify-content: center;
        align-items: center;
    }
    nav {
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;
        width: 80%;
        height: 60px;
        align-items: space-between;
    }
    #logo{
        width: 120px;
    }
    #menu-button {
        width: 30px;
    }
    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: #0099;
        opacity: 0.8;
        z-index: 99;
    }
    #menu-logo{
        width: 110px;
        margin-top:30px;
    }
    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    #menu-items.active{
        display: flex;
    }
    ul{
        list-style: none;
        text-align: center;
    }
    ul li {
        margin: 20px 0px;
    }
    ul li a {
        color: var(--color-text-light);
    }
    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }
        #menu-items{
            display: flex;
            position: static;
            height: 50px;
            width: auto;
        }
        ul {
            display: flex;
            height: 60px;
            align-items: center;
        }
        ul li{
            margin: 0;
            margin-left: 20px;
        }
    }
</style>