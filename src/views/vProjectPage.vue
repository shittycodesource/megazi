<template>
    <main class="main">

        <img class="grid-decor grid-decor-1" :src="require(`@/assets/grids/grid1.png`)" alt="grid">
        <img class="grid-decor grid-decor-2" :src="require(`@/assets/grids/grid2.png`)" alt="grid">

        <div class="container">
            <div class="project-wrapper" v-if="data">
                <h2 class="project-title">{{  data.name  }}</h2>

                <v-project-big v-if="isLoading == false" :data="data" @changeActiveImage="index => imageIndex = index"> </v-project-big>
                
                <div class="project-actions">
                    <router-link to="/">
                        <v-button :isWide="true">PROJECTS</v-button>
                    </router-link>
                    <a :href="data.images[imageIndex]" :download="data.name">
                        <v-button :isWide="true">DOWNLOAD</v-button>
                    </a>
                </div>
            </div>
            
            <div class="project-wrapper" v-else>
                <h2 class="project-title">Wait a second...</h2>
                <v-project-big-skeleton></v-project-big-skeleton>
            </div>
        </div>


        <v-footer></v-footer>
    </main>
</template>

<script>
    import vProjectBig from '../components/vProjectBig.vue';
    import vProjectBigSkeleton from '../components/skeletons/vProjectBigSkeleton.vue';
    import vButton from '../components/vButton.vue';
    import vFooter from '../components/vFooter.vue';
    
    import { mapActions } from 'vuex';
    // import { mapGetters } from 'vuex';

    export default {
        name: 'vProjectPage',
        data() {
            return {
                data: undefined,
                imageIndex: 0,
                isLoading: true
            }
        },
        components: {
            vProjectBig,
            vProjectBigSkeleton,
            vButton,
            vFooter
        },
        methods: {
            ...mapActions(['getProject'])
        },
        async created() {
            try {
                this.isLoading = true;
                this.data = await this.getProject(this.$route.params.id);
                this.isLoading = false;
            } catch (error) {
                throw error;
            }
        }
    }
</script>

<style lang="scss">

    .project-wrapper {
        max-width: 1000px;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        flex-direction: column;

    }

    .project-title {
        margin-bottom: 25px;
        font-weight: 700;
        font-size: 30px;
        text-align: center;
        position: relative;
    }

    .project-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px auto 0;
        width: 100%;
        max-width: 750px;

        @media(max-width: 520px) {
            flex-wrap: wrap;
            justify-content: center;
            flex-direction: column;

            .btn, a {
                width: 100%;

                .btn__grid {
                    width: 75%;
                }
            }

            a:first-child {
                margin-bottom: 25px;
            }
        } 
    }

</style>