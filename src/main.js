import { createApp } from 'vue'
import App from './App.vue'
import * as apolloProvider from './apollo.provider'
import router from './router'

const app = createApp(App)
 
app.use(apolloProvider.provider);
app.use(router);
app.mount('#app');


//createApp(App).mount('#app')
