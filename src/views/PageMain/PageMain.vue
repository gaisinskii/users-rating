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
              ref="ageSelect"
              class="page__select"
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
              ref="ratingSelect"
              class="page__select"
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
        <base-search-bar
          class="page__search"
          @search="search"
        />
      </div>

      <base-user-row
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        :position="index + 1"
        class="page__table-row"
      />
    </div>
    <base-search-result v-show="isModalVisible" />
  </base-page>
</template>

<script>
import { mapState } from 'vuex';
import BasePage from '@/components/BasePage/BasePage.vue';
import BaseUserRow from '@/components/BaseUserRow/BaseUserRow.vue';
import BaseSearchBar from '@/components/BaseSearchBar/BaseSearchBar.vue';
import BaseSearchResult from '@/components/BaseSearchResult/BaseSearchResult.vue';

export default {
  components: {
    BasePage,
    BaseUserRow,
    BaseSearchBar,
    BaseSearchResult,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['users', 'isModalVisible']),
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
      this.$store.dispatch('sortUsers', payload);
      if (payload.sort === 'age') {
        this.$refs.ratingSelect.value = '';
      } else {
        this.$refs.ageSelect.value = '';
      }
    },
    search(query) {
      const capilalizedFullName = query.toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
      const fullName = capilalizedFullName.split(' ');
      if (fullName.length !== 2) {
        this.$store.dispatch('findUser', { firstName: '', secondName: '' });
      } else {
        const computedQuery = {
          firstName: fullName[0],
          secondName: fullName[1],
        };
        this.$store.dispatch('findUser', computedQuery);
      }
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
      position: relative;
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
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
    &__select {
      border: none;
      border-bottom: 1px solid #000;
      padding: 5px 0;
      outline: none;
    }
    &__search {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
