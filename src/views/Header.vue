<template>
  <header class="sticky-top zindex-toast">
    <div class="drop">
      <div class="left">
        <router-link to="/"
          ><img src="../assets/21-removebg-preview.png" alt=""
        /></router-link>

        <div class="col-auto">
          <div class="input-group">
            <div class="input-group-text" style="height: 1.8rem">🔎</div>
            <input
              type="text"
              class="form-control"
              id="autoSizingInputGroup"
              placeholder="Username"
              style="width: 13rem; height: 1.8rem"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <router-link to="/daftarjual"
          ><a class="icon" href=""><i class="bi bi-blockquote-left"></i></a
        ></router-link>

        <a class="icon" href=""><i class="bi bi-bell-fill"></i></a>
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
            <li>
              <a class="dropdown-item" href="#"
                ><i class="bi bi-box-arrow-right"></i> Keluar</a
              >
            </li>
            <p>Version 3.10</p>
          </ul>
        </div>

        <!-- <button>
          <router-link to="/login" style="color: white"
            ><p><i class="bi bi-arrow-right-circle"></i> Login</p></router-link
          >
        </button> -->
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  background-color: rgb(248, 245, 245);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
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
.right {
  margin-right: 30px;
  display: flex;
}
.right .icon {
  color: black;
  margin: 0 10px;
  font-size: 1.3rem;
}
/* .right button {
  background-color: #7126b5;
  border-radius: 10px;
  font-size: 0.9rem;
  width: 5rem;
  height: 2rem;
  text-align: center;
} */
.dropdown-menu {
  padding: 3px 10px;
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
</style>
