<script setup>
import { reactive, onMounted, watchEffect } from "vue";
import api from "../plugin/Api";
import kategori from "../plugin/Api";
import Mycard from "../components/Cardproduct.vue";
import { useRouter } from "vue-router";
import Swiper from "../components/Swiper.vue";

const data = reactive({
  product: [],
  kategori: [],
  perPage: 30,
  idkategori: 0,
});

const getdata = async () => {
  await api
    .get("/buyer/product", {
      params: {
        page: 1,
        per_page: data.perPage,
        category_id: data.idkategori || "",
      },
    })
    .then((response) => {
      data.product = response.data;
      console.log(response.data);
    });
};

const getkategori = async () => {
  await kategori.get("/seller/category").then((response) => {
    data.kategori = response.data;
  });
};
const loadMore = () => {
  data.perPage += 30;
};

watchEffect(() => {
  getdata();
});

onMounted(() => {
  getkategori();
});
const router = useRouter();
</script>
<template>
  <main>
    <Swiper />
  </main>
  <aside>
    <h5>Telusuri Katagori</h5>
    <div class="filter">
      <button
        class="search"
        @click="data.idkategori = 0"
        :class="data.idkategori == 0 ? 'bg-active' : 'bg-unactive'"
      >
        🔍 Semua
      </button>
      <button
        v-for="(item, index) in data.kategori"
        :key="index"
        @click="data.idkategori = item.id"
        :class="data.idkategori == item.id ? 'bg-active' : 'bg-unactive'"
        class="search"
      >
        🔍
        {{ item.name }}
      </button>
    </div>

    <div class="wrap">
      <div class="row">
        <Mycard
          v-for="item in data.product"
          :key="item.id"
          :image="item.image_url"
          :location="item.location"
          :Categories="item.Categories"
          :base_price="item.base_price"
          @click="router.push('/product/' + item.id)"
        />
      </div>
      <button @click="loadMore" class="clik">
        <i class="bi bi-plus"></i>Tambah halaman
      </button>
    </div>
  </aside>
  <footer class="fixed-bottom">
    <router-link to="/infoproduct"
      ><button><i class="bi bi-plus"></i>Jual</button></router-link
    >
  </footer>
</template>
<style scoped>
main {
  width: 90%;
  margin: 10px auto;
}
aside {
  width: 90%;
  margin: 20px auto;
  height: auto;
}
aside .filter {
  margin-top: 10px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: flex;
  overflow: auto;
  white-space: nowrap;
}
.filter::-webkit-scrollbar {
  height: 10px;
}
.filter::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #e2d4f0;
}
.filter::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #7126b5;
}

aside .filter .search {
  margin: 2px 5px;
  border-radius: 12px;
  font-size: 0.7rem;
  color: black;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
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
  justify-content: space-between;
}
aside .wrap .clik {
  max-height: 2rem;
  background-color: #e2d4f0;
  border: #e2d4f0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 7rem;
}
aside .wrap .clik:hover {
  background-color: #7126b5;
  color: white;
}
footer {
  bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 5px;
}
footer button {
  background-color: #7126b5;
  border: #7126b5;
  font-size: 1rem;
  color: white;
  border-radius: 10px;
  padding: 3px 10px;
}

@media (max-width: 576px) {
  aside {
    margin-top: 0;
  }
  aside .filter {
    margin-top: 0;
  }
  aside h5 {
    font-size: 1rem;
  }
  aside .filter .search {
    margin: 1px 3px;
    font-size: 0.5rem;
    height: 1.5rem;
  }
  .filter::-webkit-scrollbar {
    height: 6px;
  }
}
</style>
