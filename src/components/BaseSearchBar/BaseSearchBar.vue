<template>
  <div class="base-search-bar">
    <form
      class="base-search-bar__form"
      @submit.prevent="search"
    >
      <input
        v-model="query"
        type="text"
        placeholder="Введите имя и фамилию"
        class="base-search-bar__input"
      >
      <button
        type="submit"
        class="base-search-bar__btn"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      this.$emit('search', this.query);
    },
  },
};
</script>

<style lang="scss">
.base-search-bar {
  height: 35px;
  &__form {
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__input {
    height: 100%;
    border: none;
  }
  &__btn {
    height: 100%;
    width: 50px;
    background: url("https://img.icons8.com/material/24/000000/search--v1.png")
      no-repeat center;
    border: none;
  }
}
</style>
