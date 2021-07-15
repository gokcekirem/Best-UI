<template>
  <div class="page-container bg-ActiveAreaBackground">
    <CreateListingCard />
  </div>
</template>
<style scoped>
.page-container {
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
<script>
import CreateListingCard from "../components/CreateListingCard";
export default {
  name: "Create",
  head() {
    return {
      title: "BestMarket | Create",
    };
  },
  components: {
    CreateListingCard,
  },
  beforeMount() {
    this.$currentPageSetter(this.$store, 0);
  },
};
</script>
