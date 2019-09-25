<template>
  <transition name="fade">
    <div class="base-search-result">
      <div
        ref="modal"
        class="base-search-result__modal"
      >
        <h2>Результат поиска: </h2>
        <div
          v-if="isUserFound"
          class="base-search-result__content"
        >
          <div class="base-search-result__header">
            <img
              :src="modal.avatar"
              class="base-search-result__avatar"
              alt="user image"
            >
          </div>

          <div class="base-search-result__body">
            <p>Имя: {{ modal.first_name }} {{ modal.second_name }}</p>
            <p>Возраст: {{ modal.age }}</p>
            <p>Должность: {{ modal.job }}</p>
            <p>Рейтинг: {{ modal.rating }}</p>
          </div>
        </div>
        <div v-if="!isUserFound">
          Пользователь не найден
        </div>
        <button
          type="button"
          class="base-search-result__btn"
          @click="close"
        >
          &#x274C;
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['modal', 'isUserFound']),
  },
  methods: {
    close() {
      this.$store.commit('HIDE_MODAL');
    },
  },

};
</script>

<style lang="scss">
.base-search-result {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  &__modal {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 50vw;
    height: 50vh;
    padding: 30px;
    background: #ffffff;
    box-shadow: 5px 5px 20px;
  }
  &__header {
    height: 150px;
    width: 150px;
    margin-bottom: 20px;
  }
  &__avatar {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  &__btn {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 20px;
    width: 20px;
    border: none;
    outline: none;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
  }
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
