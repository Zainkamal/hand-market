import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { search } from "../store/index";
import kategori from "../plugin/Api";
import api from "../plugin/Api";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userData: JSON.parse(localStorage.getItem("userdata")),
    product: " ",
    loading: false,
    data: [],
    kategori: [],
    idkategori: 0,
    perPage: 30,
    user: {},
    order: {},
    detailorder: {},
    buyerorder: [],
    notification: [],
  }),
  getters: {
    gettoken() {
      return this.userData?.access_token;
    },
    notif() {
      return this.notification.length;
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
    // get data
    async getdata() {
      this.loading = true;
      await api
        .get("/buyer/product", {
          params: {
            page: 1,
            per_page: this.perPage,
            category_id: this.idkategori || "",
            search: search.value || null,
          },
        })
        .then((response) => {
          this.data = response.data;
          this.loading = false;
        });
    },
    // get category
    async getkategori() {
      await kategori.get("/seller/category").then((response) => {
        this.kategori = response.data;
      });
    },
    // addproduct
    async addproduct(payload) {
      this.loading = true;
      await api
        .post("/seller/product", payload, {
          headers: {
            access_token: this.gettoken,
          },
        })
        .then((res) => {
          this.loading = false;
          router.push("/daftarjual");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // editproduct
    async editproduct(id, payload) {
      this.loading = true;
      await api
        .put("/seller/product/" + id, payload, {
          headers: {
            access_token: this.gettoken,
          },
        })
        .then((res) => {
          this.loading = false;
          router.push("/daftarjual");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getuser() {
      await api
        .get("/auth/user", {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((res) => {
          this.user = res.data;
          console.log(res.data);
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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Data Berhasil di simpan",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    async sellerorder() {
      await api
        .get("/seller/order", {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((res) => {
          this.order = res.data;
          console.log(res.data);
        });
    },
    async detailsellerorder(id) {
      await api
        .get("/seller/order/" + id, {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((res) => {
          this.detailorder = res.data;
          console.log(res.data);
        });
    },
    async pathstatusproduct(id, status) {
      await api.patch("seller/order/" + id, status, {
        headers: {
          access_token: useAuthStore().gettoken,
        },
      });
    },
    async getbuyerorder() {
      await api
        .get("/buyer/order", {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((res) => {
          this.buyerorder = res.data;
        });
    },
    async getnotification() {
      await api
        .get("/notification", {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then((res) => {
          this.notification = res.data;
        });
    },
  },
});
