<template>
  <div class="site-container flex w-screen h-screen animation">
    <NavBar />
    <nuxt class="container" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="scss" scoped>
</style>
