import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import './assets/scss/style.scss';

import textareaDirective from './directives/textarea.directive';

Vue.directive('textarea', textareaDirective);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
