<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default { components: { AppHeader } };
</script>

<style lang="scss">
@import "~@/assets/scss/common.scss";
</style>
