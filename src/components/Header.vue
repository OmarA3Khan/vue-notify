<template>
    <div class="header">
        <img class="header__branding" src="../assets/ips-logo.svg" />
    </div>
</template>
  
<script>

export default {
  name: 'PageHeader',
}
</script>
  
<style lang="scss" scoped>
$tablet: 992px;
 .header {
    display: flex;
    margin-bottom: 35px;
    padding: 2% 0;
    @media (min-width: $tablet) {
        margin: 0;
    }
    &__branding {
        display: none;
        margin-right: auto;
        @media (min-width: $tablet) {
            display: block;
        }
    }
}
</style>
