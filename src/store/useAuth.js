import { defineStore } from "pinia";

import api from "../plugin/Api";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("userdata")),
    product: " ",
  }),
  getters: {
    gettoken() {
      return this.userData?.access_token;
    },
  },
  actions: {
    async register(payload) {
      await api
        .post("/auth/register", payload)
        .then(() => {
          //   router.push("/login");
          //
          api
            .post("/auth/login", {
              email: payload.email,
              password: payload.password,
            })
            .then((res) => {
              localStorage.setItem("userdata", JSON.stringify(res.data));
              this.userData = res.data;
              router.push("/");
            });
        })
        .catch(() => {
          console.log("error");
        });
    },
    async login(payload) {
      await api.post("/auth/login", payload).then((res) => {
        localStorage.setItem("userdata", JSON.stringify(res.data));
        this.userData = res.data;
        router.push("/");
      });
    },
    logout() {
      this.userData = {};
      localStorage.removeItem("userdata");
      router.push("/");
    },
    async addproduct(payload) {
      await api
        .post("/seller/product", payload, {
          headers: {
            access_token: this.gettoken,
          },
        })
        .then((res) => {
          alert("berhasil");
          router.push("/daftarjual");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async adduser(payload) {
      await api
        .put("/auth/user", payload, {
          headers: {
            access_token: this.gettoken,
          },
        })
        .then((res) => {
          router.push("/daftarjual");
        });
    },
  },
});
