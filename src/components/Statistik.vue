<script setup>
import { onMounted, computed } from "vue";
import Apexchart from "vue3-apexcharts";
import { useAuthStore } from "../store";
import { useSellerProduct } from "../store/useSellerProduct";

const sellerSture = useSellerProduct();
// Seller product
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
        // data.label[index] = categories.name;
      }
    });
  });
  return data;
});

// diminati
// new Date(x.updatedAt).toLocaleDateString()
const sellerorder = useAuthStore();
const getallsellerorder = computed(() => {
  let datas = {
    temps: [],
    totals: [],
    labels: [],
  };
  sellerorder.order.map((order) => {
    const index = datas.temps.findIndex((x) => x.status === order.status);
    if (index === -1) {
      datas.temps.push({
        status: order.status,
        couns: 1,
      });
      datas.totals.push(1);
      datas.labels.push(order.status);
    } else {
      datas.temps[index].couns += 1;
      datas.totals[index] += 1;
    }
  });
  return datas;
});
const getupdatedAt = computed(() => {
  let datas = {
    temps: [],
    totals: [],
    labels: [],
  };
  sellerorder.order.map((order) => {
    const indexs = datas.temps.findIndex(
      (x) => x.status === new Date(order.updatedAt).toLocaleDateString()
    );
    if (indexs === -1) {
      datas.totals.push({
        updatedAt: new Date(order.updatedAt).toLocaleDateString(),
        const: 1,
      });
      datas.totals.push(1);
      datas.labels.push(new Date(order.updatedAt).toLocaleDateString());
    } else {
      datas.temps[indexs].couns += 1;
      datas.totals[indexs] += 1;
    }
  });
  return datas;
});

onMounted(() => {
  sellerSture.getSellerProduct();
  sellerorder.sellerorder();
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
    <div class="top">
      <i class="ri-pie-chart-fill"></i>
      <h3>Statistik Produk Diminati</h3>
    </div>
    <div class="grafik">
      <h5>Total product yang diminati : {{ sellerorder.order.length }}</h5>
      <br />
      <Apexchart
        v-if="sellerorder.order.length"
        height="350"
        type="pie"
        :options="{ labels: getallsellerorder.labels }"
        :series="getallsellerorder.totals"
      ></Apexchart>
      <h5>Bar horizontal</h5>
      <Apexchart
        v-if="sellerorder.order.length"
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
            categories: getallsellerorder.labels,
          },
          colors: ['rgb(201, 56, 56)'],
        }"
        :series="[
          {
            name: 'kategoti',
            data: getallsellerorder.totals,
          },
        ]"
      ></Apexchart>
      <h5>bar vertical</h5>
      <Apexchart
        v-if="sellerorder.order.length"
        height="350"
        type="bar"
        :options="{
          plotOptions: {
            chart: {
              stacked: true,
            },
          },
          xaxis: {
            categories: getupdatedAt.labels,
          },
          colors: ['rgb(201, 56, 56)'],
        }"
        :series="[
          {
            name: 'status',
            data: getupdatedAt.totals,
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
