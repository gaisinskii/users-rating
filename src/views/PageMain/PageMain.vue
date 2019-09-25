<template>
  <base-page name="main">
    <div class="page__table">
      <div class="page__header">
        <h1 class="page__heading">
          Рейтинг участников
        </h1>
        <div class="page__sorting">
          <div class="page__sorting-block">
            <label for="page__sort-by-age">Отсортировать по возрасту</label>
            <select
              id="page__sort-by-age"
              @change="sortUsers($event, 'age')"
            >
              <option value="">
                Выбрать
              </option>
              <option value="desc">
                От взрослых до мальенких
              </option>
              <option value="asc">
                От мальенких до взрослых
              </option>
            </select>
          </div>
          <div class="page__sorting-block">
            <label for="page__sort-by-rating">Отсортировать по рейтингу</label>
            <select
              id="page__sort-by-rating"
              @change="sortUsers($event, 'rating')"
            >
              <option value="">
                Выбрать
              </option>
              <option value="desc">
                От высокого до низкого
              </option>
              <option value="asc">
                От низкого до высокого
              </option>
            </select>
          </div>
        </div>
      </div>

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
  methods: {
    sortUsers(e, sortType) {
      const payload = {
        direction: e.target.value,
        sort: sortType,
      };
      console.log(payload);
      this.$store.dispatch('bindDocuments', payload);
    },
  },
};
</script>

<style lang="scss">
.page_main {
  display: flex;
  justify-content: center;
  .page {
    &__header {
      margin-bottom: 20px;
    }
    &__heading {
      margin-bottom: 15px;
    }
    &__table {
      width: 600px;
      margin-top: 100px;
    }
    &__sorting {
      display: flex;
    }
    &__sorting-block {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
