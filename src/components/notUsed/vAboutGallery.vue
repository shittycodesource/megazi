<template>
    <div class="about__gallery">
        
        <v-project :data="projects[0]" class="project--static project--static-1"></v-project> 

        <v-project :data="projects[1]" class="project--static project--static-2"></v-project>

        <v-project :data="projects[2]" class="project--static project--static-3"></v-project>

        <v-project :data="projects[3]" class="project--static project--static-4"></v-project>
        
        <v-project></v-project>

        <v-project></v-project>

        <v-project></v-project>

        <v-project></v-project>
    </div>
</template>

<script>
    import vProject from '../vProject.vue'

    export default {
        name: 'vAboutGallery',
        components: {
            vProject 
        },
        data() {
            return {
                projects: [
                    { name: 'Toy Bonnie', images: [ 'bonny.png' ], date: 1 },
                    { name: 'Toy Chica', images: [ 'chica.png' ], date: 3 },
                    { name: 'Langolier', images: [ 'langolier.png' ], date: 6 },
                    { name: 'Toy Freddy', images: [ 'beer trans.png' ], date: 15 },
                    { name: 'Sonic has touched grass', images: [ 'sonic.jpg' ], date: 16 },
                    { name: 'Toy Bonnie', images: [ 'bonny trans.png' ], date: 17 },
                    { name: 'Sakabampaspis', images: [ 'loadTest/sakabambaspis.jpg' ], date: 22 },
                    { name: 'Endo V2', images: [ 'endo.png' ], date: 2 },
                ]
            }
        },
    }
</script>

<style lang="scss">
    .about__gallery {
        max-width: 920px;
        width: 100%;
        margin: 30px auto 0;
        position: relative;
    }

    .project {
        &--static {
            min-width: unset;
            min-height: unset;
            position: absolute;
        }

        &--static-1 {
            top: 0;
            left: 15px;
            max-width: 210px;
            max-height: 140px;
        }

        &--static-2 {
            top: 120px;
            left: 275px;
            max-width: 210px;
            max-height: 140px;
        }

        &--static-3 {
            top: 35px;
            left: 525px;
            max-width: 210px;
            max-height: 185px;
        }

        &--static-4 {
            top: 55px;
            left: 525px;
            max-width: 210px;
            max-height: 185px;
        }
    }
</style>