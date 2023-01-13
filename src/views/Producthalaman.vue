<script setup>
import axios from "axios";
import Swal from "sweetalert2";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../plugin/Api";
import { useAuthStore } from "../store";

const router = useRouter();
const idDetailItem = useRoute().params.id;
const detail = reactive({
  product: {},
  tawaran: "",
});
const posttawar = async () => {
  const nego = {
    product_id: idDetailItem,
    bid_price: detail.tawaran,
  };
  await api
    .post("/buyer/order", nego, {
      headers: {
        access_token: useAuthStore().gettoken,
      },
    })
    .then((res) => {
      detail.tawaran = res.data;
    });
};

const getDetailItem = async () => {
  await api.get("/buyer/product/" + idDetailItem).then((Response) => {
    detail.product = Response.data;
    console.log(Response.data);
  });
};
onMounted(() => {
  getDetailItem();
});
const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 3000,
  background: "green",
  color: "white",
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const alert = () => {
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
};
</script>
<template>
  <div class="warp">
    <div class="close">
      <a @click="router.back"><i class="bi bi-arrow-left-short"></i></a>
    </div>
    <div class="card">
      <img :src="detail.product.image_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <span v-for="item in detail.product.Categories" :key="item.id">
          categori : {{ item.name }} </span
        ><br />
        <span>name id : {{ detail.product.name }}</span
        ><br />
        <span>description :{{ detail.product.description }}</span
        ><br />
        <span>
          base_price :
          {{ detail.product.base_price }}
        </span>
        <span>location :{{ detail.product.location }}</span
        ><br />
        <span>user_id : {{ detail.product.user_id }}</span
        ><br />
        <span>status : {{ detail.product.status }}</span
        ><br />
        <span>createdAt : {{ detail.product.createdAt }}</span
        ><br />
        <span>
          updatedAt :
          {{ detail.product.updatedAt }}
        </span>
      </div>
    </div>
    <div class="word">
      <div class="top">
        <h5>{{ detail.product.name }}</h5>
        <span v-for="item in detail.product.Categories" :key="item.id">
          categori : {{ item.name }} </span
        ><br />
        <h5 style="top: -8px">Rp 250.000</h5>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Saya tertarik
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="width: 20rem">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Masukkan Harga Tawarmu
                </h5>
                <button
                  type="button"
                  class="btn-close btn-outline-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style="width: 1rem"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
                  akan segera dihubungi penjual.
                </p>
              </div>
              <div
                class="bottom d-flex"
                style="height: 3rem; margin-left: 15px; top: -20px"
              >
                <img
                  src="../assets/Among_Us_Background_Keren-removebg-preview.png"
                  alt=""
                  style="width: 2rem; height: 2rem"
                />
                <div class="nama">
                  <h5>{{ detail.product.User?.full_name ?? "-" }}</h5>
                  <p>{{ detail.product.User?.city ?? "-" }}</p>
                </div>
              </div>

              <form action="" @submit.prevent="posttawar">
                <div class="mb-3 m-3" style="top: -8px">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Harga Tawaran</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Nominal"
                    v-model="detail.tawaran"
                  />
                </div>
                <div class="modal-footer">
                  <button @click="alert" type="submit" class="btn btn-primary">
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom d-flex">
        <img
          src="../assets/Among_Us_Background_Keren-removebg-preview.png"
          alt=""
        />
        <div class="nama">
          <h5>{{ detail.product.User?.full_name ?? "-" }}</h5>
          <p>{{ detail.product.User?.city ?? "-" }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.warp {
  margin: 2em auto;
  width: 80%;
  display: flex;
  justify-content: center;
}
.close {
  font-size: 2rem;
  margin-right: 2rem;
}
.close a {
  cursor: pointer;
}
.card {
  width: 40%;
}
.card img {
  max-height: 15rem;
}

.word {
  margin-left: 15px;
  width: auto;
}
.word .top {
  box-shadow: 0 0 4px black;
  max-width: 18rem;
  height: auto;
  padding: 5px 12px;
}
.word .top button {
  width: 100%;
  margin-top: 10px;
  background-color: #7126b5;
  border-radius: 10px;
  border: #7126b5;
  margin-bottom: 10px;
  color: white;
}
.word .top button:hover {
  background-color: #431172;
}
.bottom {
  margin-top: 10px;
  box-shadow: 0 0 4px black;
  padding: 0 15px;
  height: 3.5rem;
  justify-content: flex-start;
  align-items: center;
  max-width: 18rem;
}
.bottom img {
  border-radius: 50%;
  box-shadow: 0 0 4px black;
  border: 1px solid black;
  margin-right: 10px;
  width: 3rem;
  height: 3rem;
}
.bottom h5 {
  font-size: 1rem;
  top: 0.8rem;
}

@media screen and (max-width: 414px) {
  .warp {
    display: block;
  }
  .close {
    font-size: 1.3rem;
  }
  .close a {
    cursor: pointer;
  }
  .card {
    margin: 0 auto;
    width: 80%;
  }
  .card-body {
    font-size: 0.7em;
    top: -10px;
  }

  .word {
    margin: 10px auto;
    width: 80%;
  }
  .word h5,
  p {
    font-size: 0.7rem;
  }
  .word .top button {
    margin-top: 0;
    margin-bottom: 5px;
    color: white;
  }
  .word .top button:hover {
    background-color: #431172;
  }
  .bottom {
    margin-top: 5px;
    box-shadow: 0 0 4px black;
    padding: 0 15px;
    height: 3.5rem;
    justify-content: flex-start;
    align-items: center;
    max-width: 18rem;
  }
  .bottom img {
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
  }
  .bottom h5 {
    font-size: 0.7rem;
    top: 0.8rem;
  }
}
</style>
