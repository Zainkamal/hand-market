<script setup>
import Swal from "sweetalert2";
import { reactive, onMounted } from "vue";
import api from "../plugin/Api";
import NavbarVue from "../components/Navbar.vue";
import { RouterView } from "vue-router";

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
      <div class="left">
        <NavbarVue></NavbarVue>
      </div>
      <div class="right d-flex">
        <RouterView />
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
aside .right {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
}

@media screen and (max-width: 414px) {
  header {
    width: 100%;
    padding-top: 5px;
  }
  header h4 {
    font-size: 1rem;
  }
  main .profil {
    height: 2rem;
  }
  main .profil img {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
  main .profil .data {
    margin-left: 7px;
  }
  main .profil .data h3 {
    font-size: 0.7rem;
  }
  main .profil .data p {
    font-size: 0.6rem;
  }
  main button {
    border-radius: 10px;
    font-size: 0.5rem;
    width: 3rem;
    margin-right: 10px;
  }
  aside {
    display: block;
    margin-top: 10px;
  }
  aside .left {
    width: 100%;
  }
  aside .right {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 15px;
  }
}
</style>
