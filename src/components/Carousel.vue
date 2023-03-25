<template>
  <div class="carousel">
    <img class="carousel__container" src="../assets/iPhone-mokup@3x.png" />
    <img class="carousel__img" src="../assets/carousel-photo-01.jpg" />
    <img class="carousel__camera-controls" src="../assets/FE-test-assets.svg" alt="SVG image" />
    <img class="carousel__img__sm" src="../assets/small-carousel-photo-01.jpg" />
    <ul class="carousel__progress-indicator">
      <li class="progress__bar animate" />
      <li class="progress__bar" />
      <li class="progress__bar" />
      <li class="progress__bar" />
    </ul>
  </div>
</template>
  
<script>

  export default {
    name: 'CustomCarousel',
    data() {
      return {
        defaultPlaceholder: 'Enter your Email Address',
      }
    },
    props: {
      placeholder: {
        type: String,
        required: false,
      }
    }
  };
</script>

<style lang="scss" scoped>
 // Breakpoint for screens larger than 1200px
 $desktop: 1200px;

// Breakpoint for screens larger than 992px
$tablet: 992px;
// Breakpoint for iPad portrait orientation
$ipad: 768px;
.carousel {
  position: relative;
  padding: 0 10px;
  &__container {
    max-width: 98%;
    @media (min-width: $desktop) {
      max-width: 335px;
    }
    margin-bottom: 30.5px;
  }
  &__img {
    position: absolute;
    top: 114px;
    left: 26px;
  }
  &__camera-controls {
    position: absolute;
    top: 490px;
    left: 115px;
  }
  &__img__sm {
    position: absolute;
    top: 574px;
    left: 40px;
  }
  &__progress-indicator {
    display: flex;
    list-style: none;
    margin: 0;
    .progress__bar {
      width: 55px;
      height: 1px;
      background: #3A3A3A;
      border-radius: 1px;
      margin: 0 4px;
      position: relative;
      &.animate {
        &::before {
          content: '';
          display: block;
          height: 100%;
          max-width: 100%;
          background-color: #EEECEC;;
          border-radius: 1em;
          animation: fadin 8s;
        }
      }
    }
  }
}

@keyframes fadin {
  0% {
    width: 1%;
  }
  100% {
    width: 100%;
  }
}
</style>
  