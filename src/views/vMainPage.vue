<template>
    <main class="main">

        <!-- <div class="grid-decorations" :style="[ { maxHeight: gridHeight } ]"> -->
            <img class="grid-decor grid-decor-1" :src="require(`@/assets/grids/grid1.png`)" alt="grid">
            <img class="grid-decor grid-decor-2" :src="require(`@/assets/grids/grid2.png`)" alt="grid">
            <img class="grid-decor grid-decor-3" :src="require(`@/assets/grids/grid2.png`)" alt="grid" v-if="getDatabaseLength > 6">
            <img class="grid-decor grid-decor-4" :src="require(`@/assets/grids/grid3.png`)" alt="grid" v-if="getDatabaseLength > 9">
            <!-- <img class="grid-decor grid-decor-5" :src="require(`@/assets/grids/grid2.png`)" alt="">

            <img class="grid-decor grid-decor-6" :src="require(`@/assets/grids/grid2.png`)" alt="">
            <img class="grid-decor grid-decor-7" :src="require(`@/assets/grids/grid2.png`)" alt=""> -->
        <!-- </div> -->

        <div class="container">
            <v-intro v-once></v-intro>
            <v-projects></v-projects>
        </div>

        <v-skills></v-skills>

        <div class="container">
            <v-footer></v-footer>
        </div>
    </main>
</template>

<script>
    import vIntro from '../components/vIntro.vue';
    import vProjects from '../components/vProjects.vue';
    import vSkills from '../components/vSkills.vue';
    import vFooter from '../components/vFooter.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'vMain',
        components: {
            vIntro,
            vProjects,
            vSkills,
            vFooter
        },
        computed: {
            ...mapGetters(['getDatabaseLength'])
        }
    }
</script>

<style lang="scss">

    .main {
        &--contact {
            overflow-y: hidden;

            .grid-decor-1,
            .grid-decor-2 {
                position: fixed;

                @media(max-width: 650px) {
                    display: none;
                }
            }
        }
    }

    .grid-decor {
        position: absolute;
        z-index: -1;
        pointer-events: none;
        user-select: none;
    }

    .grid-decor-1 {
        left: calc(50% - 650px);
        top: 120px;
        transform: translateX(-50%);
        max-width: 450px;
        
        @media(max-width: 1000px) {
            left: calc(50% - 400px);
        }

        @media(max-width: 650px) {
            left: calc(50% - 300px);
        }
    }

    .grid-decor-2 {
        left: calc(50% + 700px);
        top: 300px;
        transform: translateX(-50%);

        @media(max-width: 1000px) {
            left: calc(50% + 550px);
        }

        @media(max-width: 650px) {
            left: calc(50% + 350px);
        }
    }

    .grid-decor-3 {
        left: calc(50% - 700px);
        top: 980px;
        transform: translateX(-50%) translateZ(0);

        @media(max-width: 1000px) {
            left: calc(50% - 450px);
        }

        @media(max-width: 650px) {
            left: calc(50% - 300px);
        }
    }

    .grid-decor-4 {
        left: calc(50% + 700px);
        top: 1410px;
        transform: translateX(-50%) translateZ(0);

        @media(max-width: 1000px) {
            left: calc(50% + 450px);
        }

        @media(max-width: 650px) {
            left: calc(50% + 250px);
        }
    }

    .grid-decor-5 {
        position: fixed;
        left: calc(50% + 50px);
        top: 450px;
        transform: translateX(-50%) translateZ(0);
    }
</style>