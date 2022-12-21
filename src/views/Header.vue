<script setup>
import { useAuthStore } from "../store/useAuth";

const store = useAuthStore();

const onlogout = () => {
  store.logout();
};
</script>
<template>
  <header class="sticky-top zindex-toast">
    <div class="drop">
      <div class="left">
        <router-link to="/"
          ><img src="../assets/blog-removebg-preview.png" alt=""
        /></router-link>
        <form action="">
          <input type="text" class="form-control" placeholder="🔎 search" />
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
              <a class="icon" href=""><i class="bi bi-bell-fill"></i></a>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li class="d-flex">
                <div class="kiri">
                  <img src="../assets/jam tangan.jfif" alt="" />
                </div>
                <div class="tengah">
                  <p>Penawaran Product</p>
                  <h5>Jamtangan Sepeda</h5>
                  <h5>Ditawar 200.000</h5>
                </div>
                <div class="kanan" style="width: 5rem">
                  <p>24 mart,14.00</p>
                </div>
              </li>
            </ul>
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
              <i class="bi bi-person-heart"></i>
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
                <router-link to="/infoprofile">
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-pencil"></i> Ubah Akun</a
                  >
                </router-link>
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="bi bi-gear"></i> Pengaturan Akun</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#"
                  ><i class="bi bi-bookmark"></i> Daftar Simpan</a
                >
              </li>
              <li @click="onlogout" type="button">
                <a class="dropdown-item"
                  ><i class="bi bi-box-arrow-right"></i> Keluar</a
                >
              </li>
              <p>Version 3.10</p>
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
  background-color: #023b6d;
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
  background-color: #7126b5;
  border-radius: 10px;
  font-size: 0.9rem;
  width: 5rem;
  height: 2rem;
  text-align: center;
}
.dropdown-menu {
  padding: 3px 10px;
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
  top: 10px;
  color: rgba(0, 0, 0, 0.603);
}
.dropdown-menu li i {
  color: blue;
}
@media screen and (max-width: 414px) {
  header {
    width: 100%;
    background-color: rgb(248, 245, 245);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.315);
  }
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
    background-color: #7126b5;
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
    top: 10px;
    color: rgba(0, 0, 0, 0.603);
  }
  .dropdown-menu li i {
    color: blue;
  }
}
</style>
