import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import vMainPage from '../views/vMainPage.vue';
import vProjectPage from '../views/vProjectPage.vue';
import vContactPage from '../views/vContactPage.vue';
import vAboutPage from '../views/vAboutPage.vue';

const routes = [
    { path: '/', component: vMainPage, name: "home" },
    { path: '/project/:id', component: vProjectPage,  name: "project" },
    { path: '/contact', component: vContactPage, name: "contact" },
    { path: '/about', component: vAboutPage, name: "about" },
];

const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes
});

const scrollableElementId = 'app';
let scrollPositions = 0;

router.beforeEach((to, from, next) => {
    if (to.name == 'home') {
        if (from.name == 'about' || from.name == 'contact') {
            // nothing
        } else {
            let element = document.getElementById(scrollableElementId);
            setTimeout(() => element.scrollTo({ top: scrollPositions, behavior: 'instant' }), 0);
        }

    } 

    if (to.name == 'project') {
        let element = document.getElementById(scrollableElementId);
        scrollPositions = element.scrollTop;

        setTimeout(() => {
            document.getElementById('app').scrollTo(0, 0);
        }, 0);        
    }
    
    next();
});

export default router;