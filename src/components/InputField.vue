<template>
    <div class="input-container">
        <input class="input" :placeholder="placeholder"/>
        <img class="input__icon" src="../assets/mail-icon.svg"/>
    </div>
</template>
  
<script>

  export default {
    name: 'InputField',
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
.input-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
}
.input {
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
    &__icon {
        position: absolute;
        right: 4.25%;
    }
}
</style>
  