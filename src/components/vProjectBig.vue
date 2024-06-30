<template>
    <div class="project project--big" :class="{ 'project--mounted': isMounted }">
        <picture>
            <source :srcset="require(`@/assets/imgBg-mob.png`)" alt="background" media="(max-width: 650px)">
            <img class="project__bg" :src="require(`@/assets/imgBg.png`)" alt="background"/>
        </picture>
    
        <template v-if="data.images.length > 1">
            <div :class="`glide glide-${data.id}`">

                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <img 
                            v-for="(image, index) in data.images" :key="index"
                            class="project__image glide__slide" 
                            :src="image"
                            :alt="data.name" 
                            @load="mountGlide"
                        />
                    </ul>
                </div>

                <div class="glide__arrows" data-glide-el="controls">
                    <button  class="glide__arrow glide__arrow--left" data-glide-dir="<">
                        <svg><use xlink:href="#left"/></svg>
                    </button>
                    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                        <svg><use xlink:href="#right"/></svg>
                    </button>
                </div>

                <div class="glide__bullets projects__counters" data-guide-el="controls[nav]">
                    <button 
                        v-for="(image, index) in data.images"
                        :key="index"
                        class="glide__bullet project__counter"
                        :class="{ 'glide__bullet--active': imageIndex == index }"
                        :data-glide-dir="'=' + index"
                        @click="() => { glide.go('=' + index); imageIndex = index; }"
                    ></button>
                </div>

            </div>
        </template>
        <template v-else>
            <!-- <img class="project__backdrop" :src="require(`@/assets/pictures/${data.images[0]}`)"  /> -->
            <img 
                class="project__image" 
                :src="data.images[0]" 
                :alt="data.name" 
                loading="lazy"
                decoding="async"
                fetchpriority="high"
            />
        </template>
    </div>
</template>

<script>
import Glide from '@glidejs/glide';

export default {
    name: 'vProjectBig',
    data() {
        return {
            glide: null,
            imageIndex: 0,
            isGlideMounted: false,
            isMounted: false
        }
    },
    props: { data: { type: Object } },
    methods: {
        initGlide() {
            this.glide = new Glide(`.glide-${this.data.id}`, {
                gap: 0,
                type: 'slider',
                rewind: false,
                dragDistance: false,
                swipeThreshold: false,
                touchRatio: 0,
                touchAngle: 0,
                bound: false ,
                perView: 1
            });

            this.glide.on('run', () => {
                this.imageIndex = this.glide.index;
                this.$emit('changeActiveImage', this.imageIndex);
            });

             this.glide.on('mount.after', () => {
                this.glide.update();
            })
        },
        mountGlide() {
           if (this.isGlideMounted == false) {
                this.glide.mount(); 
                this.isGlideMounted = true;
                this.isMounted = true;
           }
        }
    },
    mounted() {
        if (this.data.images.length > 1) {
            this.initGlide();
            return;
        }   

        this.isMounted = true;
    },
}
</script>

<style lang="scss">
    .project--big {
        max-width: 100%;
        min-width: unset;
        width: 100%;


        max-height: 800px;
        max-width: 750px;
        margin: 0 auto;

        &:hover,
        &:focus {
            transform: unset;
        }

        &::before {
            opacity: 0;
        }

        .project__image {
            cursor: default;
            max-height: 800px;
            min-height: 400px;
        }

        .project__backdrop {
            content: '';
            width: 100%;
            height: 100%;

            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;

            transform: translate3d(-50%, -50%, 0);
            filter: blur(200px);

            object-fit: cover;
            pointer-events: none;
            user-select: none;
        }

        .glide {
            border-radius: 15px;
            font-size: 0;
            overflow: hidden;

            .glide__track {
                height: 100%;
            }

            .glide__slides {
                height: 100%;
            }

            .glide__slide {
                display: block;
                max-width: 100%;
                width: 100%;
                height: 100%;

                border-radius: 0px;
                height: 100%;

                position: relative;
                z-index: 1;

                transform: translate3d(0, 0, 0);
            }

            .glide__arrows {
                z-index: 100;
            }

            .glide__arrow {
                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 500px;
                background: rgba(0, 0, 0, .5);
                border: none;
                width: 25px;
                height: 25px;
                padding: 0;
                opacity: .8;

                z-index: 100;

                svg {
                    width: 15px;
                    height: 15px;
                    fill: white;
                }

                &:hover {
                    background: rgba(0, 0, 0, .8);
                    opacity: 1;
                }

                @media(max-width: 1000px) {
                    width: 40px;
                    height: 40px;

                    svg {
                        width: 30px;
                        height: 30px;
                    }
                } 
            }

            .glide__arrow--right {
                right: 15px;
            }

            .glide__arrow--left {
                left: 15px;
            }

            .glide__arrow--disabled {
                display: none;
            }

            .glide__bullets {
                z-index: 100;
                margin-bottom: 15px;
            }

            .glide__bullet {
                &--active {
                    opacity: 1;
                    transform: scale(1.2);
                }
            }

        }

        @media(max-width: 780px) {
            max-width: 100%;
        }

        @media(max-width: 680px) {
            min-height: unset;

            .project__image {
                min-height: unset;
            }
        } 

        @media(max-width: 650px) {
            .project__bg {
                display: block;
            }
        }
    }

    .project {
        &--mounted {
            &::before {
                opacity: 1;
            }   
        }   
    }
</style>