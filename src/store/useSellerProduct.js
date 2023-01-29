import { defineStore } from "pinia";
import api from "../plugin/Api";
import { useAuthStore } from "./useAuth";

export const useSellerProduct = defineStore("seller", {
  state: () => ({
    product: [],
  }),
  getters: {},
  actions: {
    async getSellerProduct() {
      await api
        .get("/seller/product", {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
