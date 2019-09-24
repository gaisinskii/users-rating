<template>
  <div class="base-user-row">
    {{ user }}
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
