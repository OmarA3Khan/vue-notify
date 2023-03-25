<template>
    <button class="button">{{ buttonText }}</button>
</template>
  
<script>
  export default {
    name: 'CustomButton',
    props: {
      buttonText: {
        type: String,
        default: 'Click Me!',
        required: false,
      }
    }
  };
</script>

<style lang="scss" scoped>
.button {
    font-family: 'Open Sans';
    width: 100%;
    background: linear-gradient(135deg, #370C14 0%, #280C23 100%);
    border: none;
    border-radius: 6px;
    color: #EEECEC;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    padding: 16px 24px;
    cursor: pointer;
}
</style>
  