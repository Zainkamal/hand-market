<script setup>
import { onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../plugin/Api";
import { useAuthStore } from "../store";

const detail = reactive({
  product: [],
});
// router back
const router = useRouter();
// menangkap id dari componen semuacategori
const idDetailItem = useRoute().params.id;

const getDetailItem = async () => {
  await api
    .get("/seller/product/" + idDetailItem, {
      headers: {
        access_token: useAuthStore().gettoken,
      },
    })
    .then((Response) => {
      detail.product = Response.data;
      console.log(Response.data);
    });
};

const delet = async () => {
  await api
    .delete("/seller/product/" + idDetailItem, {
      headers: {
        access_token: useAuthStore().gettoken,
      },
    })
    .then(() => {
      router.push("/daftarjual");
    });
};
onMounted(() => {
  getDetailItem();
});
</script>
<template>
  <div class="ward">
    <div class="close">
      <a @click="router.back"> <i class="bi bi-arrow-left-short"></i></a>
    </div>

    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="detail.product.image_url" class="card-img-top" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text">name product : {{ detail.product.name }}</p>
            <div class="d-flex justify-content-md-start">
              <p v-for="item in detail.product.Categories" :key="item.id">
                {{ item.name }},
              </p>
            </div>
            <p class="card-text">
              description : {{ detail.product.description }}
            </p>
            <p class="card-text">
              base_price : {{ detail.product.base_price }}
            </p>
            <p class="card-text">location : {{ detail.product.location }}</p>
            <p class="card-text">user_id : {{ detail.product.user_id }}</p>
            <p class="card-text">status : {{ detail.product.status }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="word">
      <div class="top">
        <h5>{{ detail.product.name }}</h5>
        <div class="category">
          <p v-for="item in detail.product.Categories" :key="item.id">
            Categories : {{ item.name }}
          </p>
        </div>
        <h5>Rp {{ detail.product.base_price }}</h5>
        <router-link :to="`/infoproduct/${detail.product.id}`"
          ><button>Edit</button></router-link
        >
        <button @click="delet(id)">Hapus</button><br />
      </div>
    </div>
  </div>
</template>
<style scoped>
.ward {
  margin: 30px auto;
  width: 95%;
  display: flex;
  justify-content: center;
}
.close {
  font-size: 2rem;
  margin-right: 1.5rem;
}
.card {
  width: 40%;
  box-shadow: 0 0 4px black;
}
.word {
  margin-left: 15px;
  max-height: 30vh;
}
.word .top {
  box-shadow: 0 0 4px black;
  width: 18rem;

  padding: 5px 12px;
}
.word .top button {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
}
.word .top button:hover {
  background-color: #7126b5;
  color: white;
}
.category {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
@media screen and (max-width: 414px) {
  .ward {
    margin: 0 auto;
    display: block;
    width: 90%;
  }
  .left {
    font-size: 2rem;
  }

  .word {
    margin: 10px auto;
    width: 100%;
  }
  .word h5,
  p {
    font-size: 0.7rem;
  }
  .word .top {
    width: 100%;
  }
  .word .top button {
    margin-top: 0;
    margin-bottom: 5px;
    color: rgb(0, 0, 0);
  }
  .word .top button:hover {
    background-color: #431172;
  }
}
</style>
