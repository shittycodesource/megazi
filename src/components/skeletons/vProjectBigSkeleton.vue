<template>
    <div class="project project--skeleton project--big  project--mounted">
        <picture>
            <source :srcset="require(`@/assets/imgBg-mob.png`)" alt="background" media="(max-width: 650px)">
            <img class="project__bg" :src="require(`@/assets/imgBg.png`)" alt="background"/>
        </picture>
    </div>
</template>

<script>

export default {
    name: 'vProjectBigSkeleton',
}
</script>

<style lang="scss">
    .project--skeleton.project--big {
        min-height: 700px;
        max-width: 500px;
        width: 100%;
    }
</style>