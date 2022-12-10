<script setup>
import Mycard from "../components/Cardproduct.vue";
const data = reactive({
  product: [],
});
</script>
<template>
  <Mycard
    v-for="item in data.product"
    :key="item.id"
    :image="item.image_url"
    :location="item.location"
    :Categories="item.Categories"
    :base_price="item.base_price"
  />
</template>
<style scoped></style>
