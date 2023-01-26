<script setup>
import { useAuthStore } from "../store/useAuth";
import { search } from "../store/index";
import { onMounted, watchEffect } from "vue";
import router from "../router";

const store = useAuthStore();

const pergiKe = (item) => {
  useAuthStore().pathnotifcation(item.id);
  if (item.notification_type === "seller") {
    if (item.status === "bid") {
      router.push("/infopenawaran/" + item.order_id);
    } else if (item.status === "create") {
      router.push("/halaman/" + item.product_id);
    } else {
      alert("notification tidak dikenali");
    }
  } else if (item.notification_type === "buyer") {
    router.push("/tawaransaya");
  } else {
    alert("notification tidak dikenali");
  }
  console.log(item);
};

const onlogout = () => {
  store.logout();
};
watchEffect(() => {
  useAuthStore().getuser();
});
onMounted(() => {
  useAuthStore().getnotification();
});
</script>
<template>
  <header class="sticky-top zindex-toast">
    <div class="drop">
      <div class="left">
        <router-link to="/"
          ><img src="../assets/images-removebg-preview.png" alt=""
        /></router-link>
        <form action="">
          <input
            type="text"
            class="form-control"
            placeholder="🔎 search"
            v-model="search"
          />
        </form>
      </div>
      <div class="right">
        <div class="d-flex" v-if="store.gettoken">
          <router-link to="/daftarjual"
            ><a class="icon" href=""><i class="bi bi-blockquote-left"></i></a
          ></router-link>
          <div class="dropdown">
            <a
              class="icon"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-bell-fill"></i>
            </a>
            <div class="notif">
              <span class="notif_number">{{ useAuthStore().notif }}</span>
            </div>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
              style="width: 400px; max-height: 300px; overflow: auto"
            >
              <div class="boox">
                <div class="hed">
                  <h5 style="margin-left: 5px">notification</h5>
                </div>
                <div
                  class="boxs d-flex"
                  v-for="item in useAuthStore().notification"
                  :key="item.id"
                  @click="pergiKe(item)"
                >
                  <span v-if="!item.read">belom dibaca</span>

                  <div class="box">
                    <img :src="item.image_url" alt="" />
                  </div>
                  <div class="ket" style="width: 100%; padding: 0 5px">
                    <div class="pinggir d-flex justify-content-between">
                      <p>
                        {{ item.notification_type }}
                      </p>
                      <p v-if="item.status == 'create'">
                        product berhasil di terbitkan
                      </p>
                      <p v-if="item.status == 'bid'">penawaran product</p>
                      <p v-if="item.status == 'accepted'">Penawaran diterima</p>
                      <p v-if="item.status == 'diclined'">penawaran ditolak</p>

                      <p>{{ item.updatedAt }}</p>
                    </div>
                    <h5>{{ item.product_name }}</h5>
                    <div class="harga d-flex gap-1">
                      <div class="" v-if="item.notification_type == 'seller'">
                        <p v-if="item.status == 'create'">
                          {{ item.base_price }}
                        </p>
                        <div
                          class="bid d-flex gap-1"
                          v-if="item.status == 'bid'"
                        >
                          <del>Rp.{{ item.base_price }}</del>
                          <p>Ditawar</p>
                          <p>Rp.{{ item.bid_price }}</p>
                        </div>
                      </div>
                      <div class="" v-if="item.notification_type == 'buyer'">
                        <div
                          class="bid d-flex gap-1"
                          v-if="item.status == 'accepted' || 'diclined'"
                        >
                          <del>Rp.{{ item.base_price }}</del>
                          <p>Ditawar</p>
                          <p>Rp.{{ item.bid_price }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <a
              class="icon"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                :src="useAuthStore().user.image_url"
                alt=""
                class="profile"
              />
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <span>Akun Saya</span>
              <li>
                <router-link to="/">
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-houses"></i> Home</a
                  >
                </router-link>
              </li>
              <li>
                <router-link to="/profil">
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-person-fill"></i> Profile</a
                  >
                </router-link>
              </li>

              <li>
                <router-link to="/infoprofile">
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-pencil"></i> Ubah Akun</a
                  >
                </router-link>
              </li>
              <li>
                <router-link to="/tawaransaya">
                  <a class="dropdown-item" href="#" FG
                    ><i class="bi bi-bookmark"></i> Daftar penawaran</a
                  ></router-link
                >
              </li>
              <li>
                <router-link to="/wishlist">
                  <a class="dropdown-item" href="#" FG
                    ><i class="bi bi-box2-heart"></i> wishlist</a
                  ></router-link
                >
              </li>

              <li @click="onlogout" type="button">
                <a class="dropdown-item"
                  ><i class="bi bi-box-arrow-right"></i> Keluar</a
                >
              </li>
              <p class="dropdown-item">Version 3.10</p>
            </ul>
          </div>
        </div>

        <button v-else>
          <router-link to="/login" style="color: white"
            ><p><i class="bi bi-arrow-right-circle"></i> Login</p></router-link
          >
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  background-color: #3c88ca;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.315);
}
.drop {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
}
.drop .left {
  display: flex;
  margin-left: 50px;
  align-items: center;
}
.drop .left img {
  padding: 10px 0;
  width: 6rem;
  height: 5rem;
}
.form-control {
  height: 1.9rem;
  font-size: 0.8rem;
  width: 15rem;
}
.right {
  margin-right: 30px;
  display: flex;
}
.right .icon {
  color: white;
  margin: 0 10px;
  font-size: 1.3rem;
}
.right button {
  border-radius: 10px;
  font-size: 0.9rem;
  width: 5rem;
  height: 2rem;
  text-align: center;
  background-color: rgb(0, 10, 95);
}
.boxs {
  border-top: 1px solid black;
  padding: 5px 0;
  margin-top: 5px;
}
.box {
  width: 100px;
  height: 80px;
  margin-left: 5px;
}
.box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ket .pinggir p {
  font-size: 0.7rem;
}
.ket h5 {
  font-size: 1.2rem;
}
.ket .harga del,
p {
  font-size: 0.8rem;
}
.profile {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.dropdown-menu .kiri img {
  width: 4.5rem;
  border-radius: 10px;
  margin-right: 5px;
}
.dropdown-menu .tengah {
  width: 7.5rem;
}
.dropdown-menu .tengah p {
  font-size: 0.8em;
  top: -1px;
}
.dropdown-menu .tengah h5 {
  font-size: 1rem;
  top: -15px;
  margin-left: 10px;
}
.dropdown-menu .kanan p {
  font-size: 0.8em;
  top: -1px;
}
.dropdown-menu span {
  margin-left: 15px;
}
.dropdown-menu li {
  border-bottom: 1px solid rgba(0, 0, 0, 0.212);
  font-size: 0.9rem;
}
.dropdown-menu p {
  text-align: center;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.603);
}
.dropdown-menu li i {
  color: blue;
}
.notif {
  position: absolute;
  background-color: red;
  padding: 1px 6px;
  font-size: 0.7rem;
  border-radius: 50%;
  left: 18px;
  top: -3px;
  box-shadow: 1px 1px 2px wheat;
}
@media screen and (max-width: 414px) {
  .drop {
    height: 2rem;
  }
  .drop .left img {
    /* padding: 10px 0;
    width: 6rem;
    height: 5rem; */
    display: none;
  }
  .form-control {
    height: 1.4rem;
    font-size: 0.6rem;
    width: 10rem;
    left: -40px;
  }
  .right {
    margin-right: 10px;
  }
  .right .icon {
    margin: 0 3px;
    font-size: 1rem;
  }
  .right button {
    background-color: #1b1485;
    border-radius: 10px;
    font-size: 0.7rem;
    height: 1.5rem;
    text-align: center;
  }
  .dropdown-menu {
    padding: 1px 1px;
  }
  .dropdown-menu .kiri img {
    width: 3rem;
    border-radius: 10px;
  }
  .dropdown-menu .tengah {
    width: 4rem;
  }
  .dropdown-menu .tengah p {
    font-size: 0.5em;
  }
  .dropdown-menu .tengah h5 {
    font-size: 0.6rem;
    top: -15px;
  }
  .dropdown-menu .kanan p {
    font-size: 0.5em;
    top: -1px;
  }
  .dropdown-menu span {
    margin-left: 15px;
    font-size: 0.8rem;
  }
  .dropdown-menu li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.212);
    font-size: 0.6rem;
  }
  .dropdown-menu p {
    text-align: center;
    font-size: 0.5rem;
    color: rgba(0, 0, 0, 0.603);
  }
  .dropdown-menu li i {
    color: blue;
  }
  .notif {
    width: 10px;
    height: 10px;
    font-size: 0.5rem;
    left: 10px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile {
    width: 20px;
    height: 20px;
  }
}
</style>
