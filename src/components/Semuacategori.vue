<script setup>
import { onMounted } from "vue";
import Mycard from "../components/Cardproduct.vue";
import { useRoute, useRouter } from "vue-router";
import { useSellerProduct } from "../store/useSellerProduct";

onMounted(() => {
  useSellerProduct().getSellerProduct();
});
const router = useRouter();
</script>
<template>
  <div class="wrap">
    <div class="row">
      <div class="box">
        <Mycard
          v-for="item in useSellerProduct().product"
          :key="item.id"
          :image="item.image_url"
          :name="item.name"
          :Categories="item.Categories"
          :price="item.base_price"
          @click="router.push('/halaman/' + item.id)"
        />
      </div>
    </div>
    <div class="tambah position-fixed bottom-0 end-0">
      <div class="image" @click="router.push('/infoproduct')">
        <i class="bi bi-plus"></i>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  width: 100%;
  flex-wrap: wrap;
}
.row {
  width: 100%;
}
.tambah {
  width: 100%;
  margin: 40px;
  display: flex;
  justify-content: end;
  padding-top: 5rem;
}
.image {
  width: 2.5rem;
  height: 2.5rem;
  background: blue;
  border: 1px dashed #d0d0d0;
  border-radius: 12px;
  display: flex;
  justify-items: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
.image i {
  margin: 0 auto;
  font-size: 2.5rem;
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
