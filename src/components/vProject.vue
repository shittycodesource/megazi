<template>
    <router-link class="project" :class="{ 'project--full': isFull }" :to="{ path: '/project/' + data.id }">
        <picture>
            <source :srcset="require(`@/assets/imgBg-mob.png`)" alt="background" media="(max-width: 650px)">
            <img class="project__bg" :src="require(`@/assets/imgBg.png`)" alt="background"/>
        </picture>

        <img 
            class="project__image" 
            :src="data.thumbnails[0]"
            :alt="data.name" 
        />
        <template v-if="data.images.length > 1">
            <div class="project__counters">
                <div class="project__counter"
                    v-for="image in data.images"
                    :key="image"
                ></div>
            </div>
        </template>
    </router-link>
</template>

<script>
export default {
    name: 'vProject',
    props: { data: { type: Object }, isFull: { type: Boolean, default: false } }
}
</script>

<style lang="scss">
.project {
    max-height: 385px;
    min-height: 385px;
    max-width: 300px;
    min-width: 300px;

    display: flex;
    position: relative;
    
    border-radius: 15px;
    background: #171717;

    transition: transform .2s linear;

    &:hover,
    &:focus {
        transform: translateY(5px);
    }

    @media(max-width: 340px) {
        max-width: 100%;
        width: 100%;
        min-width: 100%;
    } 

    &__link {
        height: 100%;
        width: 100%;
    }

    &__image {
        display: block;
        max-width: 100%;
        width: 100%;
        height: 100%;

        border-radius: 15px;
        object-fit: cover;
        cursor: pointer;

        position: relative;
        z-index: 1;

        transform: translate3d(0, 0, 0);
    }

    &__bg {
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;

        border-radius: 15px;
        transform: translate3d(0, 0, 0);

        object-fit: cover;
        pointer-events: none;
        user-select: none;
    }

    &__counters {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 5px;
        
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;

        padding: 15px;
    }

    &__counter {
        width: 10px;
        height: 10px;
        border-radius: 500px;
        background: white;
        opacity: .7;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;

        margin: -1px;

        border-radius: inherit;
        background: linear-gradient(to bottom, #626262, transparent);
        transition: opacity .35s ease-out;
    }


    
    &--full {
        min-height: 100%;
        max-width: 100%;
        min-width: 100%;
        max-height: 100%;
        width: 100%;

        &:hover,
        &:focus {
            transform: unset;
        }
    }
}
</style>