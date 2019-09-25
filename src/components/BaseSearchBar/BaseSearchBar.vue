<template>
  <div class="base-search-bar">
    <form @submit.prevent="search">
      <input
        type="text"
        placeholder="Search.."
        name="search"
      >
      <button type="submit" />
    </form>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.base-search-bar {
}
</style>
