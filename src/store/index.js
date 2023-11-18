import { createStore } from "vuex";
import ApiService from "@/services/ApiService";

export default createStore({
  state: {
    carouselItems: [],
    loading: true,
  },
  mutations: {
    setCarouselItems(state, items) {
      state.carouselItems = items;
    },
    setLoading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    async fetchCarouselItems({ commit }) {
      try {
        const items = await ApiService.getImages();
        commit("setCarouselItems", items);
      } catch (error) {
        console.error("Error al obtener las imágenes en el store", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  modules: {
  },
});
