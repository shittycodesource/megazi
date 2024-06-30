<template>
    <div id="app">

        <v-header></v-header>

        <router-view></router-view>
    </div>
</template>

<script>
import vHeader from './components/vHeader.vue';

export default {
    name: "App",
    components: {
        vHeader
    },
};
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
    
    #preloadedImages {
        width: 0px;
        height: 0px;
        display: inline;
        background: 
            url('@/assets/imgBg.png'), 
            url('@/assets/imgBg-mob.png'), 
            url('@/assets/about.png'), 
            url('@/assets/about-mob.png'),
            url('@/assets/grids/grid1.png'), 
            url('@/assets/grids/grid2.png'),
            url('@/assets/grids/grid3.png'),
            url('@/assets/grids/gridbottom.png'),
            url('@/assets/grids/gridbtn.png');
    }
</style>
