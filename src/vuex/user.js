import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const userStore = new Vuex.Store({
    state: {
        user: {},
    },
    getters: {
        user(state) {
            if (!state.user.userId) {
                state.user = JSON.parse(localStorage.getItem('user')) || {};
            }
            return state.user;
        },
        isLogin(state) {
            if (!state.user.userId) {
                state.user = JSON.parse(localStorage.getItem('user')) || {};
            }
            return state.user.userId;
        },
    },
    mutations: {
        setuser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        deluser(state) {
            state.user = {};
            localStorage.removeItem('user');
        }
    },
    actions: {
        setuser({ commit }, user) {
            commit('setuser', user);
        },
        deluser({ commit }) {
            commit('deluser');
        }
    }
});

export default userStore;
