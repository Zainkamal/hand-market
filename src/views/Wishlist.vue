<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useWhishlistStore } from "../store";

const back = useRouter();
onMounted(() => {
  useWhishlistStore().getWishlist();
});
</script>
<template>
  <div class="container">
    <div class="close">
      <a @click="back.back"><i class="bi bi-arrow-left-short"></i></a>
    </div>
    <div class="card">
      <div class="box" v-for="item in useWhishlistStore().wishlist" :key="item">
        <div class="img">
          <img :src="item.Product.image_url" alt="" />
        </div>
        <div class="ket">
          <h5>name :{{ item.Product.name }}</h5>
          <p>base_price: {{ item.Product.base_price }}</p>
          <p>location :{{ item.Product.location }}</p>
          <p>status : {{ item.Product.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 30px auto;
  width: 80%;
}
.close {
  font-size: 2rem;
  margin-right: 2rem;
}
.close a {
  cursor: pointer;
}
.card {
  border: 1px solid black;
  display: grid;
  gap: 10px;
  padding: 10px;
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.555);
  grid-template-columns: repeat(6, 1fr);
}
.box {
  border: 1px solid black;
}
.box .img {
  width: 100%;
  height: 150px;
  padding: 5px;
  box-shadow: 0px 0px 3px black;
}
.box .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ket {
  padding: 5px;
}
.ket h5 {
  font-size: 1rem;
}
.ket p {
  font-size: 0.8rem;
}
</style>
