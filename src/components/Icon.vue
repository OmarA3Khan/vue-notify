<template>
    <div class="icon">
        <img class="icon__img" :id="id" v-if="primary" src="../assets/0.5x_camera.svg" />
        <img class="icon__img" :id="id" v-if="secondary" src="../assets/1x_camera.svg" />
        <img class="icon__img" :id="id" v-if="tertiary" src="../assets/2x_camera.svg" />
        <img class="icon__img" :id="id" v-if="quaternary" src="../assets/3x_camera.svg" />
    </div>
</template>
  
<script>
  export default {
    name: 'customIcon',
    props: {
      id: {
        type: String,
      },
      primary: {
        type: Boolean,
        default: false,
      },
      secondary: {
        type: Boolean,
        default: false,
      },
      tertiary: {
        type: Boolean,
        default: false,
      },
      quaternary: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      emitClickEvent() {
        this.$emit('click-event', 'Button clicked!');
      }
    }
  };
</script>
  