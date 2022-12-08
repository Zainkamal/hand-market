<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./views/Header.vue";
import Home from "./views/Home.vue";
import { RouterView } from "vue-router";
import Daftarjual from "./views/Daftarjual.vue";
import Halamanproduct from "./views/Halamanproduct.vue";
</script>

<template>
  <Header></Header>
  <Home></Home>
  <!-- <Daftarjual></Daftarjual> -->
  <!-- <Halamanproduct></Halamanproduct> -->
  <RouterView />
</template>

<style scoped></style>
