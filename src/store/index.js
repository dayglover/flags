import Vue from "vue";
import Vuex from "vuex";
import flagServices from "@/services/flagServices";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    isLightMode: true,
    allCountries: [],
    singleCountry: {},
  },
  getters: {
    getMode: (state) => state.isLightMode,
    getAllCountries: (state) => state.allCountries,
    getSingleCountry: (state) => state.singleCountry,
  },
  mutations: {
    SET_MODE(state) {
      state.isLightMode = !state.isLightMode;
    },
    SET_COUNTRIES(state, payload) {
      state.allCountries = payload;
    },
    SET_COUNTRY(state, payload) {
      state.singleCountry = payload;
    },
  },
  actions: {
    toggleMode({ commit }) {
      commit("SET_MODE");
    },
    async fetchCountries({ commit }) {
      try {
        const response = await flagServices.getAllCountries();
        commit("SET_COUNTRIES", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSingleCountry({ commit }, payload) {
      try {
        const response = await flagServices.getSingleCountry(payload);
        commit("SET_COUNTRY", response.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
  plugins: [vuexLocal.plugin],
});
