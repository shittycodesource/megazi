<template>
    <nav class="nav" :class="{ 'nav--open': isOpen }">
        
        <router-link 
            to="/" 
            tag="a" 
            class="nav__link" 
            v-if="$route.name != 'project' && $route.name != 'home'"
            @click.native="$emit('closeNav')"
        >[ <div class="nav__link-text">Projects</div> ]
        </router-link>
        
        <router-link 
            to="/about" 
            tag="a" 
            class="nav__link" 
            v-if="$route.name != 'about'"
            @click.native="$emit('closeNav')"
        >[ <div class="nav__link-text">About Me</div> ]
        </router-link>

        <router-link 
            to="/contact" 
            tag="a" 
            class="nav__link" 
            v-if="$route.name != 'contact'"
            @click.native="$emit('closeNav')"
        >[ <div class="nav__link-text">Contact Me</div> ]
        </router-link>

        <img class="grid-decor grid-decor-nav" :src="require(`@/assets/grids/grid2.png`)" alt="grid">

    </nav>
</template>

<script>
    export default {
        name: "vNav",
        props: {
            isOpen: { type: Boolean, default: false }
        }
    }
</script>

<style lang="scss">
    .nav {
        display: flex;
        align-items: center;
        gap: 15px;

        .grid-decor-nav {
            display: none;
        }

        &__link {
            display: flex;
            align-items: center;
            gap: 5px;

            color: inherit;
            font-size: inherit;
            text-decoration: none;
            font-weight: 700;

            &-text {
                color: #D2D2D2;
            }

            &:hover {
                .nav__link-text {
                    color: #fff;
                }
            }
        }

        @media (max-width: 680px) {
            transform: translateX(100%);
            opacity: 0;

            flex-direction: column;
            justify-content: center;

            z-index: 1000;

            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;

            height: 100%;
            width: 300px;
            padding: 15px;

            background: #101010;
            box-shadow: 0 0 15px black;

            transition: opacity .2s linear, transform .2s linear;

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }

            &:before {
                z-index: -1;

                margin: -1px;

                background: linear-gradient(to bottom, #626262, transparent);
            }

            &:after {
                z-index: -1;
                background: #101010;
            }

            .nav__link {
                width: 100%;
                justify-content: space-between;
            }

            .grid-decor-nav {
                display: block;
                right: -20px;
                bottom: -20px;
                z-index: 0;
                width: 100%;
                left: unset;
                top: unset;
                transform: translate(30px, 40px);
            }

            &--open {
                transform: translateX(0);
                opacity: 1;
            }
        } 
    }
</style>