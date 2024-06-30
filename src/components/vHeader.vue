<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    <img class="header__image" :src="require('@/assets/krendel.png')" alt="krendel">
                    Megazi
                </div>

                <v-nav  @closeNav="isNavOpen = false" :isOpen="isNavOpen"></v-nav>
                <v-nav-toggle @openNav="isNavOpen = !isNavOpen" :isOpen="isNavOpen"></v-nav-toggle>
            </div>
        </div>
    </header>
</template>

<script>
    import vNav from './vNav.vue';
    import vNavToggle from './vNavToggle.vue';

    export default {
        name: 'vHeader',
        components: {
            vNav,
            vNavToggle
        },
        data() {
            return {
                isNavOpen: false,
            }
        },
    }
</script>

<style lang="scss">
    .header {
        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            padding: 20px 0;

            width: 100%;
        }
        
        &__logo {
            display: flex;
            align-items: center;
            gap: 10px;

            font-weight: 700;
            font-size: 30px;
        }

        &__image {
            max-width: 28px;
        }

    }
</style>