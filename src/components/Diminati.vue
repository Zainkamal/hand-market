<script setup>
import { watchEffect } from "vue";
import { useRouter } from "vue-router";
import Mycard from "../components/Cardproduct.vue";
import { useAuthStore } from "../store";

const router = useRouter();
watchEffect(() => {
  useAuthStore().sellerorder();
});
</script>
<template>
  <div class="wrap" v-if="useAuthStore().order">
    <div class="row">
      <div class="box">
        <Mycard
          v-for="item in useAuthStore().order"
          :key="item.id"
          :image="item.Product.image_url"
          :name="item.product_name"
          :base_price="item.base_price"
          :price="item.price"
          :status_product="item.status"
          @click="router.push('/infopenawaran/' + item.id)"
        />
      </div>
    </div>
  </div>
  <div v-else class="kosong">
    <img src="../../src/assets/Frame-34.png" alt="" />
  </div>
</template>
<style scoped>
.kosong {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  margin-top: 15px;
  width: 20rem;
  height: 20rem;
}
.wrap {
  width: 100%;
  flex-wrap: wrap;
}
.row {
  width: 100%;
}
.box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
@media screen and (max-width: 414px) {
  .wrap {
    justify-content: center;
  }
  .row {
    margin: 0 auto;
  }
  .box {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
