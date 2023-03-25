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
                    :submitBtnClicked="true"
                    @invalidInput="(value) => disableBtn = value"
                />
                <div class="gradient-border">
                    <Button @click="handleClick" :disabled="disableBtn" :class="{ disabled: disableBtn }" buttonText="Please Notify Me" />
                </div>
            </div>
            <div class="col">
                <!-- <div class="landing__carousel carousel">
                    <img class="carousel__container" src="../assets/iPhone-mokup@3x.png" />
                    <img class="carousel__img" src="../assets/carousel-photo-01.jpg" />
                    <img class="carousel__camera-controls" src="../assets/FE-test-assets.svg" alt="SVG image" />
                    <img class="carousel__img__sm" src="../assets/small-carousel-photo-01.jpg" />
                    <ul class="carousel__progress-indicator">
                        <li class="progress__bar animate"></li>
                        <li class="progress__bar"></li>
                        <li class="progress__bar"></li>
                        <li class="progress__bar"></li>
                    </ul>
                </div> -->
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
    .landing {
        // Breakpoint for screens larger than 1200px
        $desktop: 1200px;

        // Breakpoint for screens larger than 992px
        $tablet: 992px;
        // Breakpoint for iPad portrait orientation
        $ipad: 768px;

        // Breakpoint for iPad landscape orientation
        $ipad-landscape: 1024px;
        color: #EEECEC;
        padding: 0 16px 63.5px 16px;
        @media (min-width: $desktop) {
            padding: 0 156px 0 156px;
        }
        .disabled {
            background-color: green;
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
                .pill {
                    background: #2B5341;
                    border-radius: 32px;
                    padding: 8px 16px;
                    font-weight: 600;
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
            font-weight: 400;
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
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            text-align: left;
            margin: 0 0 28px 0;
            @media (min-width: $desktop) {
                margin: 0 0 16px 0;
            }
        }
        // .carousel {
        //     position: relative;
        //     padding: 0 10px;
        //     &__container {
        //         max-width: 98%;
        //         @media (min-width: $desktop) {
        //             max-width: 335px;
        //         }
        //         margin-bottom: 30.5px;
        //     }
        //     &__img {
        //         position: absolute;
        //         top: 114px;
        //         left: 26px;
        //     }
        //     &__camera-controls {
        //         position: absolute;
        //         top: 490px;
        //         left: 115px;
        //     }
        //     &__img__sm {
        //         position: absolute;
        //         top: 574px;
        //         left: 40px;
        //     }
        //     &__progress-indicator {
        //         display: flex;
        //         list-style: none;
        //         margin: 0;
        //         .progress__bar {
        //             width: 55px;
        //             height: 1px;
        //             background: #3A3A3A;
        //             border-radius: 1px;
        //             margin: 0 4px;
        //             position: relative;
        //             &.animate {
        //                 &::before {
        //                     content: '';
        //                     display: block;
        //                     height: 100%;
        //                     max-width: 100%;
        //                     background-color: #EEECEC;;
        //                     border-radius: 1em;
        //                     animation: fadin 8s;
        //                 }
        //             }
        //         }
        //     }
        // }
        .pill,
        &__input {
            margin: 0 0 16px 0;
        }

        .gradient-border {
            width: 100%;
            display: flex;
            position: relative;
            $border: 1px;
            margin-bottom: 26px;
            border-radius: 6px;
            @media (min-width: $desktop) {
                width: 44%;
            }

        &:before {
            content: '';
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            z-index: -1;
            margin: -$border;
            border-radius: inherit;
            background: linear-gradient(135deg, #D41C3D 0%, #861B83 100%);
        }
        }
    }
  
// @keyframes fadin {
//   0% {
//     width: 1%;
//   }
//   100% {
//     width: 100%;
//   }
// }
</style>
  