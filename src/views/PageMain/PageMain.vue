<template>
  <base-page name="main">
    <div class="page__table">
      <h1 class="page__heading">
        Рейтинг участников
      </h1>
      <base-user-row
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        :position="index + 1"
        class="page__table-row"
      />
    </div>
  </base-page>
</template>

<script>
import { mapState } from 'vuex';
import BasePage from '@/components/BasePage/BasePage.vue';
import BaseUserRow from '@/components/BaseUserRow/BaseUserRow.vue';

export default {
  components: {
    BasePage,
    BaseUserRow,
  },
  data() {
    return {
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
  display: flex;
  justify-content: center;
  .page {
    &__heading {
      margin-bottom: 20px;
    }
    &__table {
      width: 600px;
      margin-top: 100px;
    }
    &__table-row {
    }
  }
}
</style>
