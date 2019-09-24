<template>
  <main class="page_main">
    main
    <hr>
    {{ users }}
  </main>
</template>

<script>
// import firebase from 'firebase';
import db from '../../firebase';

export default {
  firestore() {
    return {
      users: db.collection('users').orderBy('rating'),
    };
  },
  data() {
    return {
      users: [],
    };
  },
};
</script>

<style lang="scss">
.page_main {
  font-size: $test;
  .page {
  }
}
</style>
