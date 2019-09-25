import Vue from 'vue';
import Vuex from 'vuex';

import { vuexfireMutations, firestoreAction } from 'vuexfire';
import 'firebase/firestore';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: { ...vuexfireMutations },
  actions: {
    bindUsersRef: firestoreAction(context => context.bindFirestoreRef('users', db.collection('users').orderBy('rating', 'desc'))),
    sortUsers: firestoreAction(({ bindFirestoreRef }, payload) => bindFirestoreRef('users', db.collection('users').orderBy(payload.sort, payload.direction))),
  },
});
