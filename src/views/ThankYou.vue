<template>
  <div class="thank-you-page">
    <div class="container">
      <h1 class="title">Thank you</h1>
      <p class="message">
        You will get notified when iPhone Photo Academy becomes available
      </p>
      <a href="https://www.youtube.com/user/iPhonePS">
        <Button buttonText="Subscribe To Our Youtube Channel" />
      </a>
    </div>
  </div>
</template>
  
<script>
import Button from '../components/Button.vue';
  export default {
    name: 'ThankYou',
    components: {
      Button,
    }
  }
</script>

<style lang="scss" scoped>
@import "../base.scss";

.thank-you-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}
.container {
  width: 318px;
  height: 164px;
  .title {
    font-weight: $font-weight-medium;
    font-size: 32px;
    line-height: 48px;
    color: $white;
  }
  .message {
    font-weight: $font-weight-medium;
    font-size: 18px;
    line-height: 26px;
    color: $white;
  }
  a {
    text-decoration: none;
  }
}
</style>
  