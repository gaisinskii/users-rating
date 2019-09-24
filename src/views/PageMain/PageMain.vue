<template>
  <main class="page_main">
    main
    {{ users }}
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      rofl: this.$store.state.rofl,
    };
  },
  computed: {
    ...mapState(['users']),
  },
  created() {
    this.$store.dispatch('bindUsersRef');
  },
};
</script>

<style lang="scss">
.page_main {
  .page {
  }
}
</style>
