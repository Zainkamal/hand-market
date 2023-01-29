<script setup>
import { onMounted, computed } from "vue";
import Apexchart from "vue3-apexcharts";
import { useAuthStore } from "../store";
import { useSellerProduct } from "../store/useSellerProduct";

const sellerSture = useSellerProduct();
const getAllProdukCategories = computed(() => {
  let data = {
    temp: [],
    total: [],
    label: [],
  };
  sellerSture.product.map((order) => {
    order.Categories.map((categories) => {
      const index = data.temp.findIndex((x) => x.id === categories.id);

      // chek if categori
      if (index === -1) {
        data.temp.push({
          id: categories.id,
          name: categories.name,
          couns: 1,
        });
        data.total.push(1);
        data.label.push(categories.name);
      } else {
        data.temp[index].couns += 1;
        data.total[index] += 1;
        data.label[index] + categories.name;
      }
    });
  });
  return data;
});

onMounted(() => {
  sellerSture.getSellerProduct();
});
</script>
<template>
  <div class="boxs">
    <div class="top">
      <i class="ri-pie-chart-fill"></i>
      <h3>Statistik Produk</h3>
    </div>
    <div class="grafik">
      <h5>Total product : {{ sellerSture.product.length }}</h5>
      <br />
      <Apexchart
        v-if="sellerSture.product.length"
        height="350"
        type="pie"
        :options="{ labels: getAllProdukCategories.label }"
        :series="getAllProdukCategories.total"
      ></Apexchart>
      <Apexchart
        v-if="sellerSture.product.length"
        height="350"
        type="bar"
        :options="{
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          xaxis: {
            categories: getAllProdukCategories.label,
          },
          colors: ['rgb(201, 56, 56)'],
        }"
        :series="[
          {
            name: 'kategoti',
            data: getAllProdukCategories.total,
          },
        ]"
      ></Apexchart>
    </div>
  </div>
</template>
<style scoped>
.boxs {
  width: 100%;
}
.top {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.top i {
  font-size: 26px;
  margin-right: 10px;
}
</style>
