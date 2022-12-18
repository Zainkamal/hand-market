<script setup>
import { reactive, onMounted } from "vue";
import api from "../plugin/Api";
import Mycard from "../components/Cardproduct.vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/useAuth";
const data = reactive({
  product: [],
});
const getdata = async () => {
  await api
    .get("/seller/product", {
      headers: {
        access_token: useAuthStore().gettoken,
      },
    })
    .then((response) => {
      data.product = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getdata();
});
const router = useRouter();
</script>
<template>
  <div class="image" @click="router.push('/infoproduct')">
    <i class="bi bi-plus"></i>
  </div>
  <Mycard
    v-for="item in data.product"
    :key="item.id"
    :image="item.image_url"
    :location="item.location"
    :Categories="item.Categories"
    :base_price="item.base_price"
    @click="router.push('/halaman/' + item.id)"
  />
</template>
<style scoped>
.image {
  width: 10rem;
  background: white;
  border: 1px dashed #d0d0d0;
  border-radius: 12px;
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 1rem;
}
.image i {
  margin: 0 auto;
  font-size: 2.5rem;
}
</style>
