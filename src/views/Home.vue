<script setup>
import { reactive, onMounted, watchEffect } from "vue";
import api from "../plugin/Api";
import Mycard from "../components/Cardproduct.vue";
import { useRouter } from "vue-router";
import Swiper from "../components/Swiper.vue";
import { useAuthStore } from "../store/useAuth";

const data = reactive({
  loading: false,
});

const loadMore = () => {
  useAuthStore().perPage += 30;
};

watchEffect(() => {
  useAuthStore().getdata();
});

onMounted(() => {
  useAuthStore().getkategori();
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
        @click="useAuthStore().idkategori = 0"
        :class="useAuthStore().idkategori == 0 ? 'bg-active' : 'bg-unactive'"
      >
        🔍 Semua
      </button>
      <button
        v-for="(item, index) in useAuthStore().kategori"
        :key="index"
        @click="useAuthStore().idkategori = item.id"
        :class="
          useAuthStore().idkategori == item.id ? 'bg-active' : 'bg-unactive'
        "
        class="search"
      >
        🔍
        {{ item.name }}
      </button>
    </div>
    <div v-if="useAuthStore().loading" class="row g-3 mt-3">
      <div v-for="item in 12" :key="item" class="col-lg-2">
        <div class="card">
          <div class="card-body d-flex flex-column gap-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="wrap">
      <div class="row">
        <div class="box">
          <!-- :namecategori="item.categories" -->
          <Mycard
            v-for="item in useAuthStore().data"
            :key="item.id"
            :image="item.image_url"
            :name="item.name"
            :Categories="item.Categories"
            :price="item.base_price"
            :description="item.description"
            @click="router.push('/product/' + item.id)"
          />
        </div>
      </div>
      <div @click="loadMore" class="clik">
        <i class="bi bi-plus">Tambah halaman</i>
      </div>
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
.box {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
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
.card-body div {
  border-radius: 5px;
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: rgba(228, 227, 227, 0.322);
  }
  100% {
    background-color: rgb(228, 227, 227);
  }
}
.card-body div:first-child {
  width: 100%;
  height: 8rem;
  background-color: rgb(228, 227, 227);
}
.card-body div {
  width: 100%;
  height: 1rem;
  background-color: rgb(228, 227, 227);
}

@media (max-width: 414px) {
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
  .row {
    width: 100%;
    margin: 0 auto;
  }
  .box {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
}
</style>
