<template>
  <transition name="fade">
    <div class="base-search-result">
      <div
        ref="modal"
        class="base-search-result__modal"
      >
        gdfgdfgdfgdfgfdgdfg

        {{ modal }}

        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="base-search-result__btn"
              @click="close"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['modal']),
  },
  methods: {
    close () {
      this.$emit('close');
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
    flex-direction: column;
    width: 50vw;
    height: 50vh;
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
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
