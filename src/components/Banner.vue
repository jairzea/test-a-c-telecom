<template>
  <div class="banner"></div>
</template>

<script>
export default {
  name: "AppBanner",
};
</script>

<style scoped>
.banner {
  background-image: url(~@/assets/images/fondo-banner.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 230px;
  padding: 20px;
  text-align: center;
  color: #ffffff;
}
</style>
