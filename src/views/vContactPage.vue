<template>
    <main class="main main--contact">

        <img class="grid-decor grid-decor-1" :src="require(`@/assets/grids/grid1.png`)" alt="grid">
        <img class="grid-decor grid-decor-2" :src="require(`@/assets/grids/grid2.png`)" alt="grid">
        <img class="grid-decor grid-decor-5" :src="require(`@/assets/grids/grid2.png`)" alt="grid">
        
        <div class="container">
            
            <form class="form" :key="rerenderKey">


                <h3 class="form__title">Contact Me</h3>
                
                <div class="input-block">
                    <!-- <img class="input-block__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/> -->
                    <!-- <img class="input-block__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/> -->
                    <input type="text" placeholder="Your Name" class="input-block__input" v-model.trim="name" maxlength="32" required>
                    <div class="input-block__back"></div>
                </div>

                <div class="input-block">
                    <!-- <img class="input-block__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/> -->
                    <!-- <img class="input-block__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/> -->
                    <input type="email" placeholder="Your Email" class="input-block__input" v-model="email" @change="validateEmail" @input="validateEmail" @blur="validateEmail" required>
                    <div class="input-block__back"></div>
                </div>
                <div class="input-error" v-if="msg.length">{{ msg }}</div>

                <div class="input-block">
                    <!-- <img class="input-block__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/> -->
                    <!-- <img class="input-block__grid" :src="require(`@/assets/grids/gridbtn.png`)" alt="grid"/> -->
                    <textarea v-textarea type="text" placeholder="Your Message" class="input-block__input" v-model="text" maxlength="1024" required></textarea>
                    <div class="input-block__back"></div>
                </div>
                
                <div class="form__button" :style="{ opacity: error ? '0.5': '1' }">
                    <v-button v-on:click.native.prevent="send" :disabled="error">SEND</v-button>
                </div>
            </form>

        </div>
        
    </main>
</template>

<script>
    import vButton from '../components/vButton.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'vContactPage',
        components: {
            vButton
        },
        data() {
            return {
                name: '',
                email: '',
                text: '',
                msg: '',
                rerenderKey: 0
            }
        },
        methods: {
            ...mapActions(['sendMessage']),
            async send() {
                try {
                    const data = {
                        name: this.name,
                        email: this.email,
                        text: this.text
                    }

                    await this.sendMessage(data);

                    this.name = '';
                    this.email = '';
                    this.text = '';
                    this.rerenderKey++;
                } catch(error) {
                    throw error;
                }
            },
            validateEmail() {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
                    console.log('correct')
                    this.msg = '';
                } else {
                    console.log('incorrect')
                    this.msg = 'Please enter a valid email address';
                }
            }
        },
        computed: {
            error() {
                if (this.name.trim('').length == 0) {
                    return true;
                }

                if (this.text.trim('').length == 0) {
                    return true;
                }

                if (this.msg.length) {
                    return true;
                }
            }
        },
    }
</script>

<style lang="scss">

    .form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 25px;

        max-width: 500px;
        margin: 0 auto;
        padding-bottom: 5px;

        position: relative;
        
        &__title {
            font-size: 30px;
            text-align: center;
        }

        &__button {
            margin: 0 auto;
        }

        // &

        .input-error {
            font-weight: 700;
            font-size: 16px;
        }
    }

    .input-block {
        border-radius: 6px;
        background: #101010;
        border: none;

        position: relative;

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
            width: 135px;
            top: 50%;
            left: 0;
            transform: translate3d(0, -50%, 0);
            z-index: 1;
            object-fit: cover;

            user-select: none;
            pointer-events: none;

            height: 100%;

            &:nth-child(2) {
                right: 35px;
                width: 150px;
                left: unset;
            }
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

        &__input {
            width: 100%;

            border-radius: 0;
            background: none;
            border: none;

            color: #fff;
            font-size: inherit;
            font-weight: 400;
            font-family: inherit;

            position: relative;
            z-index: 2;

            padding: 20px;

            resize: none;
        
            &:focus {
                outline: none;
            }
        }
    }

</style>