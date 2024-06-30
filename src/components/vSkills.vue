<template>
    <div class="skills">
        <div class="skills__background">
            <div class="skills__rotating">
                <div class="skills__rotate" v-for="index in 40" :key="index">{{ array[40 % index] }}</div>
            </div>
        </div>
        <div class="container">
            <div class="skills__inner">
                <h3 class="skills__title">My Skills</h3>

                <div class="skills__icons">
                    <div class="skills__icon">
                        <svg><use xlink:href="#ae" /></svg>
                    </div>
                    <div class="skills__icon">
                        <svg><use xlink:href="#cinema" /></svg>
                    </div>
                    <div class="skills__icon">
                        <svg><use xlink:href="#photoshop" /></svg>
                    </div>
                    <div class="skills__icon">
                        <svg><use xlink:href="#zbrush" /></svg>
                    </div>
                    <div class="skills__icon">
                        <svg><use xlink:href="#premiere" /></svg>
                    </div>
                </div>

                <div class="skills__also">ALSO</div>
                <div class="skills__description">Animation, Lighting, Texturing, Rigging and Rendering</div>
            </div> <!-- skills inner --> 
        </div>  <!-- container --> 
    </div> <!-- skills --> 
</template>

<script>
    export default {
        name: 'vSkills',
        data() {
            return {
                array: [
                    'TEXTURING LIGHTING CREATIVITY VIDEO PRODUCTION ANIMATION AFTER EFFECTS REDSHIFT CINEMA 4D ZBRUSH BLENDER PHOTOSHOP OCTANE RENDER',
                    'CREATIVITY VIDEO PRODUCTION REDSHIFT OCTANE RENDER PHOTOSHOP ZBRUSH CINEMA 4D AFTER EFFECTS ANIMATION LIGHTING TEXTURING BLENDER',
                    'TEXTURING CREATIVITY ZBRUSH PHOTOSHOP REDSHIFT BLENDER ANIMATION VIDEO PRODUCTION AFTER EFFECTS CINEMA 4D OCTANE RENDER LIGHTING',
                    'PHOTOSHOP BLENDER ANIMATION AFTER EFFECTS ZBRUSH TEXTURING REDSHIFT LIGHTING CREATIVITY CINEMA 4D VIDEO PRODUCTION OCTANE RENDER',
                    'TEXTURING ZBRUSH AFTER EFFECTS PHOTOSHOP LIGHTING VIDEO PRODUCTION REDSHIFT BLENDER ANIMATION OCTANE RENDER CREATIVITY CINEMA 4D',
                    'TEXTURING LIGHTING CREATIVITY VIDEO PRODUCTION ANIMATION AFTER EFFECTS REDSHIFT CINEMA 4D ZBRUSH BLENDER PHOTOSHOP OCTANE RENDER',
                    'CREATIVITY OCTANE RENDER VIDEO PRODUCTION LIGHTING ANIMATION ZBRUSH CINEMA 4D PHOTOSHOP AFTER EFFECTS REDSHIFT BLENDER TEXTURING',
                    'AFTER EFFECTS CINEMA 4D OCTANE RENDER ZBRUSH PHOTOSHOP ANIMATION VIDEO PRODUCTION REDSHIFT LIGHTING CREATIVITY BLENDER TEXTURING',
                    'TEXTURING VIDEO PRODUCTION PHOTOSHOP REDSHIFT LIGHTING ZBRUSH CINEMA 4D ANIMATION BLENDER OCTANE RENDER AFTER EFFECTS CREATIVITY',
                    'TEXTURING OCTANE RENDER AFTER EFFECTS VIDEO PRODUCTION LIGHTING ZBRUSH REDSHIFT CREATIVITY PHOTOSHOP BLENDER CINEMA 4D ANIMATION',
                    'CINEMA 4D ANIMATION ZBRUSH LIGHTING OCTANE RENDER PHOTOSHOP BLENDER REDSHIFT CREATIVITY TEXTURING VIDEO PRODUCTION AFTER EFFECTS',
                    'CREATIVITY OCTANE RENDER VIDEO PRODUCTION LIGHTING ANIMATION ZBRUSH CINEMA 4D PHOTOSHOP AFTER EFFECTS REDSHIFT BLENDER TEXTURING',
                    'AFTER EFFECTS VIDEO PRODUCTION REDSHIFT LIGHTING OCTANE RENDER ANIMATION ZBRUSH PHOTOSHOP TEXTURING CREATIVITY BLENDER CINEMA 4D',
                    'OCTANE RENDER CINEMA 4D ZBRUSH PHOTOSHOP REDSHIFT LIGHTING ANIMATION AFTER EFFECTS VIDEO PRODUCTION CREATIVITY BLENDER TEXTURING',
                    'CREATIVITY OCTANE RENDER VIDEO PRODUCTION LIGHTING ANIMATION ZBRUSH CINEMA 4D PHOTOSHOP AFTER EFFECTS REDSHIFT BLENDER TEXTURING',
                    'TEXTURING CREATIVITY ZBRUSH PHOTOSHOP REDSHIFT BLENDER ANIMATION VIDEO PRODUCTION AFTER EFFECTS CINEMA 4D OCTANE RENDER LIGHTING',
                    'PHOTOSHOP BLENDER ANIMATION AFTER EFFECTS ZBRUSH TEXTURING REDSHIFT LIGHTING CREATIVITY CINEMA 4D VIDEO PRODUCTION OCTANE RENDER',
                    'TEXTURING VIDEO PRODUCTION PHOTOSHOP REDSHIFT LIGHTING ZBRUSH CINEMA 4D ANIMATION BLENDER OCTANE RENDER AFTER EFFECTS CREATIVITY',
                    'CREATIVITY VIDEO PRODUCTION REDSHIFT OCTANE RENDER PHOTOSHOP ZBRUSH CINEMA 4D AFTER EFFECTS ANIMATION LIGHTING TEXTURING BLENDER',
                    'TEXTURING OCTANE RENDER AFTER EFFECTS VIDEO PRODUCTION LIGHTING ZBRUSH REDSHIFT CREATIVITY PHOTOSHOP BLENDER CINEMA 4D ANIMATION',
                    'TEXTURING LIGHTING CREATIVITY VIDEO PRODUCTION ANIMATION AFTER EFFECTS REDSHIFT CINEMA 4D ZBRUSH BLENDER PHOTOSHOP OCTANE RENDER',
                ]
            }
        }
    }
</script>

<style lang="scss">
    @keyframes scroll {
        to {
            transform: translateX(calc(50% - 20px))
        }
    }

    .skills {
        margin-bottom: 50px;
        background: #0F0F10;
        position: relative;

        &__background {
            position: absolute;
            left: 50%;
            transform: translate3d(-50%, 0, 0);

            width: 1280px;
            height: 100%;

            overflow: hidden;    

            z-index: 0;

            font-size: 24px;
            font-weight: 700;
            color: #1F1F21;

            pointer-events: none;
            user-select: none;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                width: 100%;
                height: 100%;

                background: linear-gradient(to right, #0F0F10, transparent, transparent, transparent, transparent, transparent,   #0F0F10);

                z-index: 1;
            }
        }

        &__rotating {

            transform: rotate(-45deg) translate(30%, -25%);
            width: 1250px;
            height: 1200px;
            border: 1px solid red;
        }

        &__rotate {
            text-wrap: nowrap;
            animation: scroll 15s linear infinite;
            position: relative;
            left: -55%;
        }



        &__inner {
            display: flex;
            justify-content: center;
            flex-direction: column;

            width: 100%;
            padding: 25px 0;

            text-align: center;
    
            position: relative;
            z-index: 0;
        }

        &__title {
            margin-bottom: 25px;
            font-size: 30px;
        }

        &__icons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 45px;

            @media(max-width: 650px) {
                flex-wrap: wrap;
            } 
        }

        &__icon {
            svg {
                width: 85px;
                height: 85px;
            }
        }

        &__also {
            margin: 15px 0;
            font-size: 14px;
            font-weight: 700;
        }

        &__description {
            font-size: 20px;
            font-weight: 700;
        }
    }
</style>