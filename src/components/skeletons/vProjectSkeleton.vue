<template>
    <div class="project  project--skeleton">
        <picture>
            <source :srcset="require(`@/assets/imgBg-mob.png`)" alt="background" media="(max-width: 650px)">
            <img class="project__bg" :src="require(`@/assets/imgBg.png`)" alt="background"/>
        </picture>
    </div>
</template>

<script>
export default {
    name: 'vProjectSkeleton',
}
</script>

<style lang="scss">
.project {
    &--skeleton {
        &:hover,
        &:focus {
            transform: unset;
        }
    }
}
</style>