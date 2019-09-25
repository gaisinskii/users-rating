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
    isUserFound: true,
  },
  mutations: {
    SHOW_MODAL(state) {
      state.isModalVisible = true;
    },
    HIDE_MODAL(state) {
      state.isModalVisible = false;
      state.modal = {};
    },
    FETCH_MODAL(state, payload) {
      state.modal = payload;
    },
    USER_FOUND(state, payload) {
      state.isUserFound = payload;
    },
    ...vuexfireMutations,
  },
  actions: {
    bindUsersRef: firestoreAction(context => context.bindFirestoreRef('users', db.collection('users').orderBy('rating', 'desc'))),
    sortUsers: firestoreAction(({ bindFirestoreRef }, payload) => bindFirestoreRef('users', db.collection('users').orderBy(payload.sort, payload.direction))),
    findUser({ commit }, user) {
      const foundUser = db
        .collection('users')
        .where('first_name', '==', user.firstName)
        .where('second_name', '==', user.secondName);
      foundUser.get().then((querySnapshot) => {
        if (querySnapshot.empty === true) {
          commit('USER_FOUND', false);
          commit('SHOW_MODAL');
        } else {
          querySnapshot.forEach((doc) => {
            commit('USER_FOUND', true);
            commit('FETCH_MODAL', doc.data());
            commit('SHOW_MODAL');
          });
        }
      });
    },
  },
});
