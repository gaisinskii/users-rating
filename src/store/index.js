import Vue from 'vue';
import Vuex from 'vuex';

import { vuexfireMutations, firestoreAction } from 'vuexfire';
import 'firebase/firestore';
import db from '@/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    modal: {},
    isModalVisible: false,
  },
  mutations: {
    SHOW_MODAL(state) {
      state.isModalVisible = true;
    },
    HIDE_MODAL(state) {
      state.isModalVisible = false;
    },
    FETCH_MODAL(state, payload) {
      state.modal = payload;
    },
    ...vuexfireMutations,
  },
  actions: {
    bindUsersRef: firestoreAction(context => context.bindFirestoreRef('users', db.collection('users').orderBy('rating', 'desc'))),
    sortUsers: firestoreAction(({ bindFirestoreRef }, payload) => bindFirestoreRef('users', db.collection('users').orderBy(payload.sort, payload.direction))),
    findUser({ commit }, user) {
      const foundUser = db.collection('users').where('first_name', '==', user);
      foundUser.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit('FETCH_MODAL', doc.data());
          commit('SHOW_MODAL');
        });
      });
    },
  },
});
