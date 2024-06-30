<template>
    <footer class="footer">
        <router-link to="/contact">
            <v-button>Contact Me</v-button>
        </router-link>
        <router-link to="/about">
            <v-button>More About Me</v-button>
        </router-link>

        <img class="footer__image" :src="require(`@/assets/grids/gridbottom.png`)"/>
    </footer>
</template>

<script>
    import vButton from './vButton.vue';

    export default {
        name: 'vFooter',
        components: {
            vButton
        }
    }
</script>

<style lang="scss">

    .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap:25px;

        position: relative;

        height: 350px;

        &__image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            max-width: 650px;

            z-index: -10;
            user-select: none;
            pointer-events: none;
        }

        @media(max-width: 520px) {
            flex-direction: column;

            .btn {
                width: 220px;
            }
        } 
    }

</style>