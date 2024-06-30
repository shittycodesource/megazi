<template>
    <div class="project">
        <img class="project__bg" :src="require(`@/assets/empty.png`)" />

        <template v-if="data.images.length > 1">
            <div v-if="data.date" :class="`glide glide-${data.date}`">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <router-link class="project__link" :to="{ path: '/project/' + data.date }" tag="a" v-for="image in data.images" :key="image">
                            <img 
                                class="project__image glide__slide" 
                                :src="require(`@/assets/pictures/${image}`)"
                                :alt="data.name"
                            />
                        </router-link>
                    </ul>
                </div>
                <div class="glide__arrows" data-glide-el="controls">
                    <button 
                        class="glide__arrow glide__arrow--left" 
                        data-glide-dir="<"
                    ><svg><use xlink:href="#left"/></svg>
                    </button>
                    <button 
                        class="glide__arrow glide__arrow--right" 
                        data-glide-dir=">"
                    ><svg><use xlink:href="#right"/></svg>
                    </button>
                </div>

                <div class="glide__bullets projects__counters" data-guide-el="controls[nav]">
                    <button 
                        class="glide__bullet project__counter"
                        :class="{ 'glide__bullet--active': imageIndex == index }"
                        v-for="(image, index) in data.images"
                        :data-glide-dir="'=' + index"
                        @click="() => { glide.go('=' + index); imageIndex = index; }"
                        :key="image"
                    ></button>
                </div>
            </div>
        </template>
        <template v-else>
            <router-link :to="{ path: '/project/' + data.date }" class="project__link">
                <img class="project__image" :src="require(`@/assets/pictures/${data.images[0]}`)"/>
            </router-link>
        </template>
    </div>
</template>

<script>
import Glide from '@glidejs/glide'


export default {
    name: 'vProject',
    data() {
        return {
            glide: null,
            imageIndex: 0
        }
    },
    props: { data: { type: Object } },
    mounted() {
        if (this.data.images.length > 1) {
            this.glide = new Glide(`.glide-${this.data.date}`, {
                gap: 0,
                type: 'slider',
                rewind: false,
                dragDistance: false,
                swipeThreshold: false,
                touchRatio: 0,
                touchAngle: 0,
                bound: false 
            }).mount();

            this.glide.on('run', () => {
                this.imageIndex = this.glide.index
            })

        }

    }
}
</script>

<style lang="scss">
.project {
    max-height: 385px;
    min-height: 385px;
    max-width: 300px;

    display: flex;
    position: relative;

    border-radius: 15px;
    background: #171717;

    @media(max-width: 340px) {
        max-width: 100%;
        width: 100%;
        min-width: 100%;
    } 

    .glide {
        height: 100%;
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
            border-radius: 0px;
            cursor: pointer;
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

    &__link {
        height: 100%;
        width: 100%;
    }

    &__image,
    .glide__slide {
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
        content: '';
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
    }
}
</style>