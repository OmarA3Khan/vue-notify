<template>
  <div class="button-container">
    <button class="button">{{ buttonText }}</button>
  </div>
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
@import "../base.scss";

.button-container {
  width: 100%;
  display: flex;
  position: relative;
  $border: 1px;
  margin-bottom: 26px;
  border-radius: 6px;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: $primary-color;
  }
  .button {
    font-family: 'Open Sans';
    width: 100%;
    background: linear-gradient(135deg, #370C14 0%, #280C23 100%);
    border: none;
    border-radius: 6px;
    color: $white;
    font-weight: $font-weight-heavy;
    font-size: $font-size-base;
    line-height: 16px;
    padding: 16px 24px;
    cursor: pointer;
    &:hover {
      background: linear-gradient(135deg, #62051C 0%, #440C3A 100%);;
    }
  }
}
</style>
  