<template>
    <button class="nav-toggle" type="button" @click="$emit('openNav')" :class="{ 'active': isOpen }">
        <span class="nav-toggle__item"></span>
    </button>
</template>

<script>
    export default {
        name: 'vNavToggle',
        props: {
            isOpen: { type: Boolean, default: false }
        }
    }
</script>

<style lang="scss">
    .nav-toggle {
        display: none;
        padding: 10px 0;
        width: 30px;
        border: 0;
        background: 0;
        position: absolute;
        top: 24px;
        font-size: 0;
        cursor: pointer;
        color: transparent;
        right: 24px;
        z-index: 1001;

        @media (max-width: 680px) {
            display: block;
        } 
        
    }

    .nav-toggle:focus {
        outline: none;
    }

    .nav-toggle.active .nav-toggle__item {
        background: none;
        transform: translateY(3px);
    }

    .nav-toggle.active .nav-toggle__item:before {
        transform-origin: left top;
        transform: rotate(45deg) translateX(-3px);
        transition: transform .2s linear;
    }
    .nav-toggle.active .nav-toggle__item:after {
        transform-origin: left bottom;
        transform: rotate(-45deg) translateX(-3px);
        transition: transform .2s linear;
    }

    .nav-toggle__item {
        display: block;
        width: 100%;
        height: 3px;
        background-color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        transition: transform .2s linear, background .2s linear;
    }

    .nav-toggle__item:before,
    .nav-toggle__item:after {
        content: "";
        width: 100%;
        height: 3px;
        background-color: #fff;
        position: absolute;
        left: 0;
        z-index: 1;
    }

    .nav-toggle__item:before {
        top: -8px;
    }

    .nav-toggle__item:after {
        bottom: -8px;
    }
</style>