<template>
    <div class="landing">
        <div class="col">
            <span class="pill">new course</span>
            <h1 class="landing__title">
                iPhone Photo Academy
            </h1>
            <p class="landing__subtitle">
                Sign up now to get notified when this course is available
            </p>
            <input class="landing__input" placeholder="Enter your Email Address"/>
            <button class="landing__button">
                Please Notify Me
            </button>
        </div>
        <div class="col">
            <div class="landing__carousel">
                <img src="../assets/iPhone-mokup@3x.png" />
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'LandingPage',
  }
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
    .landing {
        display: flex;
        flex-direction: column;
        color: #EEECEC;
        padding: 0 16px;
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
        }
        &__title {
            font-weight: 400;
            font-size: 40px;
            line-height: 48px;
            text-align: left;
        }
        &__subtitle {
            font-weight: 400;
            font-size: 22px;
            line-height: 30px;
            text-align: left;
            margin: 0 0 28px 0;
        }
        &__input {
            height: 61px;
            width: 98%;
            background: #171715;
            border: 1px solid #3A3A3A;
            border-radius: 6px;
            &::placeholder {
                color: #EEECEC;
                font-weight: 400;
                font-size: 16px;
                line-height: 22px;
                padding-left: 16px;
            }
        }
        &__button {
            width: 98%;
            height: 48px;
            border: 1px solid linear-gradient(135deg, #D41C3D 0%, #861B83 100%);
            border-image-source: linear-gradient(135deg, #D41C3D 0%, #861B83 100%);
            background: linear-gradient(135deg, #370C14 0%, #280C23 100%);
            border-radius: 6px;
            color: #EEECEC;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
            margin-bottom: 26px;
        }
        &__carousel {
            padding: 0 10px;
            img {
                max-width: 100%;
            }
        }
        .pill,
        &__title,
        &__input {
            margin: 0 0 16px 0;
        }
    }
  </style>
  