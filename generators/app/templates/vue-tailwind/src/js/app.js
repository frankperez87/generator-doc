import Vue from 'vue';
import VueRouter from 'vue-router';

// Setup Router
Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
    mode: 'hash', // Change to 'history' to get rid of the #
    routes
});

// Import Layout
import App from '../layouts/App';

// Import Styles
import '../sass/app.scss';

// Setup Vue
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');