<template>
    <main class="main">
        
        <img class="grid-decor grid-decor-1" :src="require(`@/assets/grids/grid1.png`)" alt="grid">
        <img class="grid-decor grid-decor-2" :src="require(`@/assets/grids/grid2.png`)" alt="grid">

        <div class="container">
            <div class="about">
                <h3 class="about__title">About Me</h3>

                <div class="about__text">
                    My name is Egor, i’m 16 years old. I am a 3D artist, <br/>
                    I make characters from films, TV series and games. <br/>
                    I also create concept art, paleoart, etc.<br/>
                </div>
            
                <div class="about__image">
                    <picture>
                        <source :srcset="require(`@/assets/about-mob.png`)" media="(max-width: 650px)">
                        <img :src="require(`@/assets/about.png`)" alt="picture">
                    </picture>
                </div>
            </div>
        </div>

    </main>
</template>

<script>
    export default {
        name: 'vAboutPage',
    }
</script>

<style lang="scss">

    .about {
        width: 100%;

        &__title {
            margin-bottom: 25px;
            font-size: 30px;
            text-align: center;
        }

        &__text {
            margin: 0 auto 25px;
            max-width: 560px;
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            line-height: 1.7;

            @media(max-width: 680px) {
                br {
                    display: none;
                }
            } 
        }

        &__image {
            width: 100%;

            position: relative;
         
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom:0;

                width: 100%;
                height: 100%;

                background: linear-gradient(to bottom, transparent, rgba(12, 10, 10, .4) 50%, #0C0A0A);
            }

            img, picture, source {
                user-select: none;
                width: 100%;
                height: auto;
                display: block;
                max-width: 100%;
            }
        }
    }

</style>