<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store";

const router = useRouter();

onMounted(() => {
  useAuthStore().getuser();
});
</script>
<template>
  <div class="container">
    <div class="close">
      <a @click="router.back"><i class="bi bi-arrow-left-short"></i></a>
    </div>
    <div class="box">
      <div class="left">
        <div class="img">
          <img :src="useAuthStore().user.image_url" alt="" />
        </div>
        <div class="btn"><button>Edit</button></div>
      </div>
      <div class="right">
        <div class="atas d-flex justify-content-between">
          <p>id : {{ useAuthStore().user.id }}</p>
          <div class="ttg">
            <p>createdAt : {{ useAuthStore().user.createdAt }}</p>
            <p>updatedAt : {{ useAuthStore().user.updatedAt }}</p>
          </div>
        </div>
        <h5>full_name : {{ useAuthStore().user.full_name }}</h5>
        <p>email : {{ useAuthStore().user.email }}</p>
        <p>phone_number : {{ useAuthStore().user.phone_number }}</p>
        <p>city : {{ useAuthStore().user.city }}</p>
        <p>address : {{ useAuthStore().user.address }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.close {
  font-size: 2rem;
  margin-right: 2rem;
}
.close a {
  cursor: pointer;
}
.box {
  border: 1px solid black;
  width: 100%;
  display: flex;
  margin: 15px auto;
  padding: 5px;
}
.left {
  width: 30%;
}
.left .img {
  width: 100%;
  height: 300px;
}
.left .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.left .btn {
  display: flex;
  justify-content: center;
}
.left button {
  margin-top: 10px;
  width: 13rem;
  border-radius: 20px;
  background-color: blueviolet;
  color: white;
}
.right {
  width: 70%;
  margin-left: 10px;
}
</style>
