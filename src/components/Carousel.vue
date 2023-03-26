<template>
  <div class="carousel">
    <div class="carousel__ambient-background" :style="{ backgroundImage: 'url(' + imageSrc + ')' }" />
    <img class="carousel__bg" src="../assets/iPhone-mokup@3x.png" />
    <div class="main-img-container">
      <img class="carousel__main-img" :src="imageSrc"/>
      <div class="carousel__camera-controls">
        <Icon  :primary="true" />
        <Icon :id="'secondary'" @click="setImage" :secondary="true" />
        <Icon :id="'tertiary'" @click="setImage" :tertiary="true" />
        <Icon :id="'quaternary'" @click="setImage" :quaternary="true" />
      </div>
    </div>
    <div class="sm-img-container">
      <img class="carousel__img__sm" :src="smallImageSrc" />
    </div>
    <div class="carousel__shutter" @click="nextImage"/>
    <ul class="carousel__progress-indicator">
      <li
        v-for="(image, idx) in imagesCount"
        :key="idx"
        :class="['progress__bar', idx < index ? 'highlight' : '', idx === index ? 'animate' : ''].join(' ')"
      />
    </ul>
  </div>
</template>

<script>
import {imageLinks} from '../assets/imageLinks.json';
import Icon from './Icon.vue';

export default {
  name: "CustomCarousel",
  data() {
    return {
      defaultPlaceholder: "Enter your Email Address",
      imageSrc: '',
      smallImageSrc: '',
      index: 0,
      imagesCount: imageLinks.length,
    };
  },
  components: {
    Icon,
  },
  props: {
    placeholder: {
      type: String,
      required: false,
    },
  },
  methods: {
    setindex() {
      this.index = this.index < 3 ? this.index + 1 : 0;
    },
    nextImage() {
      this.setindex();
      this.smallImageSrc = require(`../assets/small-${imageLinks[this.index < 3 ? this.index + 1 : 0].src}`);
      this.imageSrc = require(`../assets/${imageLinks[this.index].src}`);
    },
    setImage(e) {
      console.log(e.target.id);
      if (e.target.id === 'secondary') {
        this.imageSrc = require(`../assets/${imageLinks[this.index].src}`);
        this.smallImageSrc = require(`../assets/small-${imageLinks[this.index + 1].src}`);
      } else if (e.target.id === 'tertiary') {
        this.imageSrc = require(`../assets/${imageLinks[this.index].srcTwoX}`);
        this.smallImageSrc = require(`../assets/small-${imageLinks[this.index + 1].srcTwoX}`);
      } else if (e.target.id === 'quaternary') {
        this.imageSrc = require(`../assets/${imageLinks[this.index].srcThreeX}`);
        this.smallImageSrc = require(`../assets/small-${imageLinks[this.index + 1].srcThreeX}`);
      }
    }
  },
  mounted() {
    this.imageSrc = require(`../assets/${imageLinks[this.index].src}`);
    this.smallImageSrc = require(`../assets/small-${imageLinks[this.index + 1].src}`);

    setInterval(() => {
      this.setindex();
      this.imageSrc = require(`../assets/${imageLinks[this.index].src}`);
      this.smallImageSrc = require(`../assets/small-${imageLinks[this.index < 3 ? this.index + 1 : 0].src}`);
    }, 8000);
  },
};
</script>

<style lang="scss" scoped>
@import "../base.scss";

.carousel {
  position: relative;

  &__ambient-background {
    opacity: 0.4;
    position: absolute;
    left: -5%;
    height: 90%;
    width: 93%;
    z-index: -1;
    filter: blur(70px);
  }
  &__bg {
    max-width: 98%;
    @media (min-width: $desktop) {
      max-width: 335px;
      max-height: 691px;
    }
    margin-bottom: 30.5px;
  }
  &__main-img {
    width: 100%;
    height: 100%;
  }
  .main-img-container {
    position: absolute;
    top: 15.6%;
    left: 5%;
    width: 90%;
    height: 57.6%;
    @media (min-width: $desktop) {
      left: 4%;
      width: 92%;
    }
  }
  &__camera-controls {
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
    bottom: 11%;
    display: flex;
    padding-top: 0px;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 127px;
    height: 34px;
    .icon {
      position: relative;
      top: 3px;
    }
  }
  .sm-img-container {
    width: 12%;
    position: absolute;
    top: 79.3%;
    left: 8.8%;
    height: 6.2%;
    @media (min-width: $desktop) {
      top: 79.4%;
      left: 8.2%;
      height: 5.6%;
    }
  }
  &__shutter {
    width: 15%;
    position: absolute;
    top: 78.3%;
    left: 42%;
    height: 7.8%;
  }
  &__img__sm {
    width: 100%;
    height: 100%;
  }
  &__progress-indicator {
    display: flex;
    list-style: none;
    margin: 0;
    .progress__bar {
      width: 55px;
      height: 1px;
      background: $dark-gray;
      border-radius: 1px;
      margin: 0 4px;
      position: relative;
      &.highlight {
        background: $white;
      }
      &.animate {
        &::before {
          content: '';
          display: block;
          height: 100%;
          width: 0;
          max-width: 100%;
          background-color: $white;
          border-radius: 1em;
          animation: fadein 8s;
        }
      }
    }
  }
}

@keyframes fadein {
  0% {
    width: 1%;
  }
  100% {
    width: 100%;
  }
}
</style>
  