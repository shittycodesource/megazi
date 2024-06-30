<template>
    <button class="btn">
        <slot></slot>
        <div class="btn__back"></div>
        <img class="btn__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/>
    </button>
</template>

<script>
    export default {
        name: 'vButton'
    }
</script>

<style lang="scss">
    .btn {
        padding: 20px 40px;

        border-radius: 6px;
        background: #101010;
        border: none;

        color: #fff;
        font-size: inherit;
        font-weight: 700;
        font-family: inherit;

        cursor: pointer;

        position: relative;
        
        transition: margin-bottom .2s linear, margin-left .2s linear;

        &::before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            
            margin: -1px;
            
            border-radius: 6px;
            background: linear-gradient(to bottom, #FFFFFF, #272424);
        }

        &__grid {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0) scale(1.01);
            z-index: 1;
            object-fit: cover;

            user-select: none;
            pointer-events: none;

            width: 100%;
            height: 100%;
        }

        &__back {
            position: absolute;
            top: 3px;
            left: -3px;
            z-index: -2;
            
            width: 100%;
            height: 100%;

            border-radius: 6px;
            background: #101010;

            transition: top .2s linear, left .2s linear;

            &::before {
                content: '';
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                z-index: -3;
                
                margin: -1px;
                
                border-radius: 6px;
                background: linear-gradient(to bottom, #FFFFFF, #272424);
            }

            &::after {
                content: '';
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                z-index: -3;
                
                border-radius: 6px;
                background: #101010;
            }
        }

    }
</style>