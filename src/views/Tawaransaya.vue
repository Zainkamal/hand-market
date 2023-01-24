<script setup>
import { onMounted, reactive, ref } from "vue";
import { useAuthStore } from "../store/useAuth";
import { useRouter } from "vue-router";
import api from "../plugin/Api";
import Swal from "sweetalert2";
import router from "../router";
import MyModal from "../components/MyModal.vue";
import { onClickOutside } from "@vueuse/core";

const back = useRouter();
const harga = ref(null);
const showModal = ref(false);
const el = ref(false);

function close() {
  el.value = false;
}
const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  background: "green",
  color: "white",
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const kondisiStatus = (status) => {
  switch (status) {
    case "pending":
      return "bg-danger";
    case "accepted":
      return "bg-warning";
    case "declined":
      return "bg-success";
    case "seller":
      return "bg-secondary";
    default:
      return "text-bg-dark";
  }
};

const deletorder = (id) => {
  Swal.fire({
    title: "Apakah anda yakin?",
    text: "Data yang di hapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      api
        .delete("/buyer/order/" + id, {
          headers: {
            access_token: useAuthStore().gettoken,
          },
        })
        .then(() => {
          Swal.fire({
            text: "Data berhasil di hapus",
            icon: "success",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              useAuthStore().getbuyerorder();
            }
          });
        })
        .catch(() => {
          Swal.fire({
            title: "Gagal",
            text: "Data gagal di hapus",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    }
  });
};
const putorder = async () => {
  await api
    .put(
      "/buyer/order/" + selected.value.id,
      {
        bid_price: harga.value,
      },
      {
        headers: {
          access_token: useAuthStore().gettoken,
        },
      }
    )
    .then(() => {
      Toast.fire({
        icon: "success",
        title: "Edit in successfully",
      });
      useAuthStore().getbuyerorder();
      showModal.value = false;
    });
};
const selected = ref({});
onMounted(() => {
  useAuthStore().getbuyerorder();
});
onClickOutside(el, close);
</script>
<template>
  <div class="container">
    <div class="left">
      <a @click="back.back"> <i class="bi bi-arrow-left-short"></i></a>
    </div>
  </div>
  <div
    class="card mb-3"
    v-for="item in useAuthStore().buyerorder"
    :key="item.id"
    ref="el"
  >
    <div class="row g-0">
      <div class="image col-md-4">
        <img
          :src="item.image_product"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-4 cols">
        <div class="card-body">
          <h5 class="card-title">{{ item.product_name }}</h5>
          <del class="card-text">Rp.{{ item.base_price }}</del>
          <p class="card-text">Rp.{{ item.price }}</p>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            @click="
              selected = item;
              harga = item.price;
              showModal = true;
            "
          >
            Detail Product
          </button>
          <button class="btn btn-primary" @click="deletorder(item.id)">
            Hapus
          </button>
        </div>
      </div>
      <div class="col cols">
        <div class="status">
          <h5
            class="card-title badge text-bg-primary"
            :class="kondisiStatus(item.status)"
          >
            {{ item.status }}
          </h5>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <MyModal :show="showModal" @close="showModal = false">
      <template #body>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Info product yang kamu tawar
              </h5>
              <button
                type="button"
                class="btn-close btn-outline-primary"
                @click="showModal = false"
                style="width: 1rem"
              ></button>
            </div>
            <div class="modal-body">
              <div class="card mb-3" style="max-width: 540px">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      :src="selected.Product?.image_url"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="ket mx-2">
                      <p class="card-title">
                        Nama : {{ selected.Product?.name }}
                      </p>
                      <del class="card-text"
                        >Rp.{{ selected.Product?.base_price }}</del
                      >
                      <p class="card-text">
                        location :{{ selected.Product?.location }}
                      </p>
                      <p class="card-text">
                        description :{{ selected.Product?.description }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div
            class="bottom d-flex"
            style="height: 3rem; margin-left: 15px; top: -20px"
          >
            <img
              src="../assets/Among_Us_Background_Keren-removebg-preview.png"
              alt=""
              style="width: 2rem; height: 2rem"
            />
            <div class="nama"></div>
          </div> -->

            <form @submit.prevent="putorder">
              <div class="mb-3 m-3" style="top: -8px">
                <label for="exampleFormControlInput1" class="form-label"
                  >Harga Tawaran</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Nominal"
                  v-model="harga"
                />
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </template>
    </MyModal>
  </Teleport>
</template>
<style scoped>
.left {
  width: 2rem;
  max-width: 2rem;
}
.left i {
  font-size: 2rem;
  cursor: pointer;
}
.card {
  width: 80%;
  margin: 15px auto;
}
.row {
  display: flex;
  align-items: center;
}

.image {
  width: 135px;
  height: 135px;
  overflow: hidden;
  margin: 5px;
}
.status {
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
}
.modal-content {
  width: 30rem;
}
.modal-body {
  padding: 0;
}
.btn {
  width: 8rem;
  padding: 0;
  margin-right: 0.8rem;
}
</style>
