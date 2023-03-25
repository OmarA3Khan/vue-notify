<template>
    <div class="form-field form">
      <label
        :for="id"
        class="form__label"
        :class="{ 'form__label--active': isActive, 'error': value !== '' && invalidInput }">
          {{ invalidInput ? errorMessage : label }}
        </label>
      <input
        :id="id"
        v-model="value"
        type="email"
        :class="['form__input', value !== '' && invalidInput ? 'error' : ''].join(' ')"
        @focus="isActive = true"
        @blur="!hasValue ? isActive = false : null">
      <img class="form__icon" src="../assets/mail-icon.svg"/>
    </div>
  </template>
  
<script>

  export default {
    props: {
      id: {
        type: String,
        required: true,
    },
      label: {
        type: String,
        default: 'label',
        required: false,
      },
      submitBtnClicked: {
        type: Boolean,
        required: false,
      },
    },
    data() {
      return {
        isActive: false,
        value: '',
        invalidInput: false,
        errorMessage: 'Please enter a valid email',
        disableBtn: true,
      };
    },
    computed: {
      hasValue() {
        return Boolean(this.value !== '');
      },
    },
    watch: {
      value() {
        const emailRegex = /^\S+@\S+\.\S+$/;
        this.invalidInput = !(emailRegex.test(this.value));
        this.$emit('invalidInput', this.invalidInput)
      },
    },
  };
</script>
  
<style lang="scss" scoped>
  .form {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    &__label {
      position: absolute;
      pointer-events: none;
      transition: transform 0.2s ease-out, font-size 0.2s ease-out;
      left: 16px;
      color: #EEECEC;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      &--active {
        transform: translateY(-1rem);
        font-size: 12px;
        color: #3A3A3A;
      }
      &.error{
        color: #D41C3D;
      }
    }
  
    &__input {
      color: #EEECEC;
      font-size: 16px;
      padding: 0 0 0 16px;
      height: 62px;
      width: 98%;
      background: #171715;
      border: 1px solid #3A3A3A;
      border-radius: 6px;
      outline: none;
      &.error{
        border: 1px solid #D41C3D;
      }
    }
    &__icon {
      color: #D41C3D;
      position: absolute;
      right: 4.25%;
    }
  }
</style>
  