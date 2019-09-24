<template>
  <div class="base-user-row">
    <div class="base-user-row__col">
      <span class="base-user-row__position"> {{ position }} </span>
      <img
        :src="computedAvatar"
        class="base-user-row__avatar"
        alt="user image"
      >
      <div class="base-user-row__text-block">
        <p class="base-user-row__text--main">
          {{ user.first_name }} {{ user.second_name }}
        </p>
        <p class="base-user-row__text--sub">
          {{ user.job }}
        </p>
      </div>
    </div>
    <div class="base-user-row__col">
      <div class="base-user-row__text-block">
        <p class="base-user-row__text--main">
          {{ user.rating }}
        </p>
        <p class="base-user-row__text--sub">
          баллов
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  computed: {
    computedAvatar: {
      get() {
        return this.user.avatar;
      },
      set(v) {
        if (v === '') {
          const initials = `${this.user.first_name.charAt(0)} `;
        }
      },
    },
  },
};
</script>

<style lang="scss">
.base-user-row {
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 80px;
  margin-left: 70px;
  &__col {
    display: flex;
    align-items: center;
  }
  &__position {
    position: absolute;
    left: -50px;
  }
  &__avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 30px;
  }
  &__text-block {
    display: flex;
    flex-direction: column;
  }
  &__text {
    &--main {
      font-weight: bold;
    }
    &--sub {
      color: grey;
      font-size: 12px;
    }
  }
}
</style>
