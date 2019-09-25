<template>
  <div
    id="app"
    :style="isModalVisible ? {'overflow-y': 'hidden'} : ''"
  >
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['users', 'isModalVisible']),
  },
};
</script>

<style lang="scss">
</style>
