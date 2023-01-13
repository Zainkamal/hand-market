<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store";

const router = useRouter();
const iddetail = useRoute().params.id;

const onStatus = (status) => {
  const data = {
    status: status,
  };
  useAuthStore()
    .pathstatusproduct(iddetail, data)
    .then(() => {
      useAuthStore().detailsellerorder(iddetail);
    });
};
const avatar = `https://ui-avatars.com/api/?name=${
  useAuthStore().user.image_url
}`;

onMounted(() => {
  useAuthStore().detailsellerorder(iddetail);
});
</script>
<template>
  <div class="drop sticky-top zindex-toast">
    <router-link to="/"
      ><img src="../assets/blog-removebg-preview.png" alt=""
    /></router-link>
    <div class="not">
      <div class="title">
        <p>Lengkapi Info akun</p>
      </div>
    </div>
  </div>

  <main>
    <div class="close">
      <a @click="router.back"><i class="bi bi-arrow-left-short"></i></a>
    </div>
    <div class="profil">
      <img :src="useAuthStore().detailorder.User?.image_url ?? avatar" alt="" />
      <div class="data">
        <h3>{{ useAuthStore().detailorder.User?.full_name }}</h3>
        <p>{{ useAuthStore().detailorder.User?.city ?? "-" }}</p>
      </div>
    </div>
    <h3 style="font-size: 1.5rem">Daftar productmu yang di tawar</h3>
    <div class="product d-flex">
      <div class="kiri d-flex">
        <img :src="useAuthStore().detailorder.Product?.image_url" alt="" />
        <div class="ket">
          <p>Penawaran Product</p>
          <h5>{{ useAuthStore().detailorder.Product?.name }}</h5>
          <h5>Rp.{{ useAuthStore().detailorder.Product?.base_price }}</h5>
          <h5>Ditawar {{ useAuthStore().detailorder?.price }}</h5>
        </div>
      </div>
      <div class="kanan">
        <p>{{ useAuthStore().detailorder?.updatedAt }}</p>
      </div>
    </div>
    <!-- btn -->
    <div class="tombol">
      <div v-if="useAuthStore().detailorder.status === 'pending'" class="btns">
        <button @click="onStatus('declined')" class="btn btn-outline-primary">
          Tolak
        </button>
        <button @click="onStatus('accepted')" class="btn btn-outline-primary">
          Terima
        </button>
      </div>
      <div
        v-else-if="useAuthStore().detailorder.status === 'accepted'"
        class="btns"
      >
        <button class="btn btn-outline-primary">status</button>
        <button
          class="btn btn-outline-primary"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Hubungi
        </button>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-aside">
                <h5 class="modal-title" id="exampleModalLabel">
                  Yeay kamu berhasil mendapatkan harga yang sesuai
                </h5>
                <p>
                  Segera menghubungi pembeli melalui whatshapp untuk transaksi
                  selanjutnya
                </p>
              </div>
              <div class="modal-body">
                <h5>Product Match</h5>
                <div class="profil">
                  <img
                    :src="useAuthStore().detailorder.User?.image_url ?? avatar"
                    alt=""
                  />
                  <div class="data">
                    <h3>{{ useAuthStore().detailorder.User?.full_name }}</h3>
                    <p>{{ useAuthStore().detailorder.User?.city ?? "-" }}</p>
                  </div>
                </div>
                <br />
                <div class="product d-flex">
                  <div class="kiri d-flex">
                    <img
                      :src="useAuthStore().detailorder.Product?.image_url"
                      alt=""
                    />
                    <div class="ket">
                      <p>Penawaran Product</p>
                      <h5>{{ useAuthStore().detailorder.Product?.name }}</h5>
                      <h5>
                        Rp. {{ useAuthStore().detailorder.Product?.base_price }}
                      </h5>
                      <h5>Ditawar {{ useAuthStore().detailorder?.price }}</h5>
                    </div>
                  </div>
                  <div class="kanan">
                    <p>{{ useAuthStore().detailorder?.updatedAt }}</p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  style="width: 100%"
                  @click="onStatus('accepted')"
                >
                  Hubungi Via whatshapp
                  <img
                    src="../assets/whatsapp.png"
                    alt=""
                    style="width: 1.5rem"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="btns">
        <p>Anda sudah menolak tawaran ini</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.close {
  font-size: 2rem;
  margin-right: 2rem;
}
.close a {
  cursor: pointer;
}
.drop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: #023b6d;
  color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.315);
}
.drop img {
  width: 6rem;
  height: 4rem;
  margin-left: 2rem;
  position: absolute;
  top: -30px;
}
.drop .not {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
main {
  width: 80%;
  margin: 1rem auto;
}
main .profil {
  display: flex;
  height: auto;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
  border-radius: 15px;
  align-items: center;
  padding: 0 0.6rem;
}
main .profil img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
main .profil .data {
  margin-left: 10px;
}
main .profil .data h3 {
  top: 10px;
  font-size: 1rem;
}
main .profil .data p {
  font-size: 12px;
  margin: 10px 0;
}
.product {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
  border-radius: 15px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.kiri img {
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 10px;
  border-radius: 10px;
  margin-right: 10px;
}
.ket p {
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.514);
}
.ket h5 {
  font-size: 1rem;
}
.kanan p {
  font-size: 0.8em;
  top: -1px;
  color: rgba(0, 0, 0, 0.514);
}
.tombol {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.btns {
  gap: 10px;
  display: flex;
  margin-top: 10px;
  margin-right: 10px;
}
.btn {
  margin-top: 10px;
  width: 9rem;
}
.modal-aside {
  width: 85%;
  margin: 0 auto;
}
.modal-body {
  width: 90%;
  margin: 1rem auto;
  background-color: #eeeeee;
  border-radius: 10px;
}
</style>
