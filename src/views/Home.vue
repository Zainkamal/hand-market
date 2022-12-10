<script setup>
import { reactive, onMounted } from "vue";
import api from "../plugin/Api";
import Mycard from "../components/Cardproduct.vue";

const data = reactive({
  product: [],
});

const getdata = async () => {
  await api.get("/buyer/product?page=1&per_page=100").then((response) => {
    data.product = response.data;
    console.log(response.data);
  });
};

onMounted(() => {
  getdata();
});
</script>
<template>
  <main>
    <img src="../assets/buku.webp" alt="" />
    <img src="../assets/buku.webp" alt="" />
    <img src="../assets/buku.webp" alt="" />
  </main>
  <aside>
    <h5>Telusuri Katagori</h5>
    <div class="filter">
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
    </div>
    <router-link to="producthalaman">
      <div class="wrap">
        <Mycard
          v-for="item in data.product"
          :key="item.id"
          :image="item.image_url"
          :location="item.location"
          :Categories="item.Categories"
          :base_price="item.base_price"
        />
      </div>
    </router-link>
  </aside>
  <footer class="fixed-bottom">
    <router-link to="/infoproduct"
      ><button><i class="bi bi-plus"></i>Jual</button></router-link
    >
  </footer>
</template>
<style scoped>
main {
  width: 72%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 4px;
}
main img {
  width: 50rem;
  height: 10rem;
}
aside {
  width: 72%;
  margin: 20px auto;
  height: auto;
}
aside .filter {
  margin-top: 10px;
}
aside .filter button {
  padding: 2px 10px;
  margin-right: 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  color: black;
  background-color: #e2d4f0;
}
aside .filter button:hover {
  background-color: #7126b5;
  color: white;
}
aside .wrap {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
}
aside .box {
  margin: 10px 5px;
  display: flex;
}
aside .box .card {
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
}
aside .box .card img {
  width: 100%;
  max-height: 8rem;
  cursor: pointer;
  transition: 400ms;
}
.card-body h5,
p {
  font-size: 0.9rem;
}
footer {
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
}
footer button {
  background-color: #7126b5;
  border: #7126b5;
  font-size: 1rem;
  color: white;
  border-radius: 10px;
  padding: 3px 10px;
}
</style>
