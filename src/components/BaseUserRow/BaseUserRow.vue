<template>
  <div class="base-user-row">
    <div class="base-user-row__col">
      <span class="base-user-row__position"> {{ position }} </span>
      <div class="base-user-row__avatar-outer">
        <div
          :class="generateAvatarAccentClassByPos(position)"
          class="base-user-row__avatar-inner"
        >
          <img
            :src="user.avatar"
            class="base-user-row__avatar"
            alt="user image"
          >
        </div>
      </div>
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

  },
  methods: {
    generateAvatarAccentClassByPos(position) {
      switch (position) {
        case 1:
          return 'base-user-row__avatar-inner--gold';
        case 2:
          return 'base-user-row__avatar-inner--silver';
        case 3:
          return 'base-user-row__avatar-inner--bronze';
        default:
          break;
      }
      return '';
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
    font-weight: bold;
  }
  &__avatar-outer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 65px;
  }
  &__avatar-inner {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    &::before {
      display: block;
      position: absolute;

      height: 100%;
      width: 100%;
      bottom: -10px;
    }
    &--gold {
      height: 65px;
      width: 65px;
      &::before {
        content: url("../../assets/images/wreath-gold.svg");
      }
    }
    &--silver {
      height: 60px;
      width: 60px;
      &::before {
        content: url("../../assets/images/wreath-silver.svg");
      }
    }
    &--bronze {
      height: 55px;
      width: 55px;
      &::before {
        content: url("../../assets/images/wreath-bronze.svg");
      }
    }
  }
  &__avatar {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
  &__text-block {
    display: flex;
    flex-direction: column;
    position: relative;
    left: 20px;
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
