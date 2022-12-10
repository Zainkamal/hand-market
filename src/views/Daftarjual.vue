<script setup>
import Swal from "sweetalert2";
import { reactive, onMounted } from "vue";
import api from "../plugin/Api";
// import { RouterView } from "vue-router";
import Mycard from "../components/Cardproduct.vue";

const data = reactive({
  product: [],
});
const getdata = async () => {
  await api.get("/buyer/product?page=1&per_page=100").then((response) => {
    data.product = response.data;
    console.log(response.data);
  });
};

onMounted(() => {
  getdata();
});
// alert
const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  background: "green",
  color: "white",
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const alert = () => {
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
};
</script>
<template>
  <div class="wrap">
    <header>
      <h4>Daftar Jual</h4>
    </header>
    <main>
      <div class="profil">
        <img src="../assets/images.jpg" alt="" />
        <div class="data">
          <h3>Nama Penjual</h3>
          <p>Alan Masyhuri prayono</p>
        </div>
      </div>
      <button @click="alert">Edit</button>
    </main>
    <aside>
      <nav class="nav flex-column">
        <h5 style="margin-left: 15px">katagori</h5>
        <a class="nav-link active" aria-current="page" href="#"
          ><i class="bi bi-box-fill"> Semua katagori</i>
          <i class="bi bi-arrow-right-circle"></i
        ></a>
        <a class="nav-link" href="#"
          ><i class="bi bi-heart-fill"> Diminati</i>
          <i class="bi bi-arrow-right-circle"></i
        ></a>
        <a class="nav-link" href="#"
          ><i class="bi bi-currency-dollar"> Diminati</i>
          <i class="bi bi-arrow-right-circle"></i
        ></a>
      </nav>
      <div class="right">
        <router-link to="infoproduct">
          <div class="image">
            <i class="bi bi-plus"></i></div
        ></router-link>
        <Mycard
          v-for="item in data.product"
          :key="item.id"
          :image="item.image_url"
          :location="item.location"
          :Categories="item.Categories"
          :base_price="item.base_price"
        />
      </div>
    </aside>
  </div>
</template>
<style scoped>
.wrap {
  max-width: 90%;
  margin: 0 auto;
}
header {
  width: 100%;
  padding-top: 15px;
}
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
}
main .profil {
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
main .profil img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
main .profil .data {
  margin-left: 10px;
}
main .profil .data h3 {
  top: 10px;
  font-size: 1rem;
}
main .profil .data p {
  font-size: 12px;
}
main button {
  border-radius: 10px;
  font-size: 0.8rem;
  width: 3rem;
  margin-right: 10px;
}
aside {
  display: flex;
  margin-top: 10px;
}
aside .nav {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
  width: 16rem;
  padding: 15px 3px 30px 3px;
  max-height: 13rem;
}

aside .nav .nav-link {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.295);
}
aside .right {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
}
.right .image {
  width: 10rem;
  height: 10rem;
  background: white;
  border: 1px dashed #d0d0d0;
  border-radius: 12px;
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
}
.right .image i {
  margin: 0 auto;
  font-size: 2.5rem;
}
aside .box {
  margin: 3px 5px;
  display: flex;
}
aside .box .card {
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
}
aside .box .card img {
  width: 100%;
  max-height: 8rem;
  cursor: pointer;
  transition: 400ms;
}
.card-body h5,
p {
  font-size: 0.9rem;
}
</style>
