<template>
    
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
</style>
  