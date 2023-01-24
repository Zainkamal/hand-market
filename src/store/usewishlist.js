import { defineStore } from "pinia";
import api from "../plugin/Api";
import { useAuthStore } from "./useAuth";

export const useWhishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: [],
  }),
  getters: {},
  actions: {
    async getWishlist() {
      await api
        .get("/buyer/wishlist", {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((res) => {
          this.wishlist = res.data;
        });
    },
    async postWishlist(id) {
      await api.post(
        "/buyer/wishlist",
        {
          product_id: id,
        },
        {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        }
      );
    },
    async delWishlist(id) {
      await api.delete("/buyer/wishlist/" + id, {
        headers: {
          access_token: useAuthStore().gettoken,
        },
      });
    },
  },
});
