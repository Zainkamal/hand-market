<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../store";

const formLogin = reactive({
  email: "",
  password: "",
});

const doLogin = () => {
  const data = {
    email: formLogin.email,
    password: formLogin.password,
  };
  useAuthStore().login(data);
};
</script>
<template>
  <main>
    <div class="left">
      <!-- <img src="../assets/buku.webp" alt="" /> -->
      <h3>HAND MARKET</h3>
    </div>
    <div class="right">
      <form @submit.prevent="doLogin">
        <h3>Masuk</h3>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder=" Email"
            v-model="formLogin.email"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder=" Password"
            v-model="formLogin.password"
          />
          <button type="submit">Masuk</button>
          <p>
            Belum punyak akun.?
            <router-link to="/register">Daftar disini</router-link>
          </p>
        </div>
      </form>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 80%;
  display: flex;
  margin: 25px auto;
  box-shadow: 1px 10px 9px black;
}
.left {
  width: 50%;
  height: 80vh;
  background-image: linear-gradient(
      360deg,
      #ba8be7af 50%,
      rgba(160, 110, 206, 0)
    ),
    url(../assets/buku2.webp);
  background-size: cover;
}
.left h3 {
  width: 154px;
  height: 72px;
  left: 80px;
  top: 200px;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 40px;
  line-height: 36px;
  color: white;
}
.right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 60%;
}
form button {
  margin-top: 15px;
  width: 100%;
  text-align: center;
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
}
p {
  margin-top: 10px;
  text-align: center;
}
@media screen and (max-width: 414px) {
  main {
    width: 90%;
    margin: 20px auto;
    box-shadow: 1px 2px 9px black;
  }
  .left {
    width: 50%;
    height: 80vh;
    background-image: linear-gradient(
        360deg,
        #ba8be7af 50%,
        rgba(160, 110, 206, 0)
      ),
      url(../assets/buku2.webp);
    background-size: cover;
  }
  .left h3 {
    left: 10px;
    top: 150px;
    font-weight: 500;
    font-size: 2rem;
    line-height: 26px;
    color: white;
  }
  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 90%;
    font-size: 0.7rem;
  }
  form input {
    font-size: 0.7rem;
  }
  form button {
    font-size: 1rem;
    border-radius: 20px;
  }
  p {
    margin-top: 5px;
  }
}
</style>
