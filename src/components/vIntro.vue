<template>
    <div class="intro">
        <div class="intro__bracket">[</div>
        <div class="intro__text">Hello there. My name is Egor and i’m a 3D Artist </div>
        <div class="intro__bracket">]</div>
    </div>
</template>

<script>
    export default {
        name: 'vIntro'
    }
</script>

<style lang="scss">
    .intro {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 80px;

        padding: 25px 0;

        font-size: 30px;
        text-align: center;       

        @media(max-width: 880px) {
            gap: 40px;
        }  

        @media(max-width: 800px) {
            .intro__text {
                max-width: 350px;
            }
            
            font-size: 30px;
        }  

        @media(max-width: 480px) {
            .intro__bracket {
                display: none;
            }
        }  

        @media(max-width: 360px) {
            .intro__text {
                max-width: 320px;
            }
            
            font-size: 25px;
        }  
    }
</style>