<template>
    <div class="landing">
        <Header />
        <div class="container">
            <div class="col">
                <span class="pill">new course</span>
                <h1 class="landing__title">
                    iPhone Photo Academy
                </h1>
                <p class="landing__subtitle">
                    Sign up now to get notified when this course is available!
                </p>
                <InputField
                    id="email"
                    class="landing__input"
                    :label="'Enter your Email Address'"
                    @invalidInput="(value) => disableBtn = value"
                />
                <Button @click="handleClick" :disabled="disableBtn" buttonText="Please Notify Me" />
            </div>
            <div class="col">
                <Carousel />
            </div>
        </div>
    </div>
</template>
  
<script>
  import Header from '../components/Header.vue';
  import Button from '../components/Button.vue';
  import InputField from '@/components/InputField.vue';
  import Carousel from '@/components/Carousel.vue';

  export default {
    name: 'LandingPage',
    data() {
        return {
            disableBtn: true,
        }
    },
    components: {
        Header,
        Button,
        InputField,
        Carousel,
    },
    methods: {
        handleClick() {
            this.$router.push('/thankyou');
        }
    }
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../base.scss";
    .landing {
        color: $white;
        padding: 0 16px 63.5px 16px;
        @media (min-width: $desktop) {
            padding: 0 156px 0 156px;
        }
        .container {
            display: flex;
            flex-direction: column;
            @media (min-width: $desktop) {
                flex-direction: row;
                justify-content: space-between;
            }
            .col {
                display: flex;
                flex-direction: column;
                @media (min-width: $ipad) and (max-width: $desktop) {
                    width: 50%;
                    margin: auto;
                }
                .pill {
                    background: #2B5341;
                    border-radius: 32px;
                    padding: 8px 16px;
                    font-weight: $font-weight-heavy;
                    font-size: 12px;
                    line-height: 12px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
            }
            .col:first-of-type {
                align-items: flex-start;
                @media (min-width: $desktop) {
                    justify-content: center;
                    max-width: 449px;
                }
            }
        }
        &__title {
            font-family: 'Montserrat', sans-serif;
            font-weight: $font-weight-medium;
            font-size: 40px;
            line-height: 48px;
            text-align: left;
            margin: 0 0 16px 0;
            @media (min-width: $desktop) {
                font-size: 63px;
                line-height: 63px;
                margin: 0 0 32px 0;
            }
        }
        &__subtitle {
            font-weight: $font-weight-medium;
            font-size: 22px;
            line-height: 30px;
            text-align: left;
            margin: 0 0 28px 0;
            @media (min-width: $desktop) {
                margin: 0 0 16px 0;
            }
        }
        .pill,
        &__input {
            margin: 0 0 16px 0;
        }

        .button-container {
            @media (min-width: $desktop) {
                width: 44%;
            }
        }
    }
</style>
  