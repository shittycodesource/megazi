<template>
    <div 
        class="projects"
        :style="[ 
            { maxHeight: getDatabaseLength - step > getLoaded.length ? gridHeight : 'unset' },
            { marginBottom: getDatabaseLength - step > getLoaded.length ? '0px' : '25px' }
        ]"
    >

        <img
            v-for="i in Math.ceil(getLoaded.length / (4 * itemsPerRow))"
            :key="i"
            class="grid-decor" 
            :class="[{ 'grid-decor-left': i % 2 == 0 }]"
            :style="[
                { left: i % 2 === 0 ? `calc(50% - 800px)` : `calc(50% + 500px)` },
                { maxWidth: i % 2 === 0 ? `450px` : `500px` },
                { top: `${(i * 800) + 1200}px` }
            ]"
            :src="require(`@/assets/grids/grid2.png`)" 
            alt="grid" 
        >


        <div class="projects__grid projects-grid" :style="[ { maxHeight: getDatabaseLength - step > getLoaded.length ? gridHeight : 'unset' } ]">
            <template v-if="getLoaded.length">
                <v-project
                    v-for="item in getLoaded"
                    :data="item"
                    :key="item.id"
                ></v-project>
            </template>
            <template v-else>
                <v-project-skeleton
                    v-for="item in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]"
                    :data="item"
                    :isSkeleton="true"
                    :key="item.id"
                ></v-project-skeleton>
            </template>
        </div>

        <div class="projects__load projects-grid" v-if="getDatabaseLength - step > getLoaded.length">
            <v-button @click.native="load" :disabled="disabled">Show More</v-button>
        </div>

    </div>
</template>

<script>
    import vProject from './vProject.vue';
    import vProjectSkeleton from './skeletons/vProjectSkeleton.vue';
    import vButton from './vButton.vue';

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'vProjects',
        components: { vProject, vProjectSkeleton, vButton },
        data() {
            return {
                start: 0,
                end: 18,
                step: 18,
                itemsPerRow: 3,
                disabled: true,
            }
        },
        methods: {
            ...mapActions(['setWindowResizeObserver', 'loadProjects']),
            resizeGrid() {
                const breakpoints = {
                    TABLET: 1000,
                    MOBILE: 650
                };

                if (this.getWindowWidth <= breakpoints.MOBILE) 
                {
                    this.itemsPerRow = 1;
                } else if (this.getWindowWidth <= breakpoints.TABLET) 
                {
                    this.itemsPerRow = 2;
                } else 
                {
                    this.itemsPerRow = 3; //desktop
                }

                console.log('resize', this.itemsPerRow);
            },
            async load() {
                try {
                    this.disabled = true;

                    await this.loadProjects({ limitValue: this.end });
                    // this.start += this.step;
                    // this.end += this.step;
                    // this.end -= this.getLoaded.length;

                    this.disabled = false;
                } catch (error) {
                    this.disabled = false;
                    throw error;
                }
            }
        },
        computed: {
            ...mapGetters(['getWindowWidth', 'getLoaded', 'getDatabaseLength']),
            gridHeight() { 
                return `${(Math.ceil(this.getLoaded.length / this.itemsPerRow) - 1) * (385 + 25) + 140}px`;
            }
        },
        created() {
            this.setWindowResizeObserver();
            this.resizeGrid();
            this.load();
        },
        watch: {
            'getWindowWidth'() {
                this.resizeGrid();
            }
        }
    }
</script>

<style lang="scss">
    .projects {
        position: relative;
        overflow-y: clip;

        @media(max-width: 1000px) {
            .grid-decor {
                transform: translateX(-100%);

                
                &-left {
                    transform: translateX(65%);
                }
            }
        } 
        
        &-grid {
            padding-top: 5px;
            display: grid;
            grid-template-columns: repeat(3, auto);
            justify-content: center;
            gap: 25px;
            overflow: hidden;

            @media(max-width: 1000px) {
                grid-template-columns: repeat(2, auto);
            } 

            @media(max-width: 650px) {
                grid-template-columns: repeat(1, auto);
            } 
        }

        &__load {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            background: linear-gradient(to bottom, rgba(12, 10, 10, .5), #0C0A0A);

            z-index: 100;
            
            height: 140px;
        }
    }
</style>