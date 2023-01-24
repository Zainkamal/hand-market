<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import api from "../plugin/Api";
import { useAuthStore } from "../store";

const datauser = reactive({
  full_name: "",
  email: "",
  phone_number: null,
  address: "",
  image: null,
  url_image: null,
  city: "",
});

const getuser = async () => {
  await api
    .get("/auth/user", {
      headers: {
        access_token: useAuthStore().gettoken,
      },
    })
    .then((res) => {
      datauser.full_name = res.data.full_name;
      datauser.email = res.data.email;
      datauser.phone_number = res.data.phone_number;
      datauser.address = res.data.address;
      datauser.image = res.data.image_url;
      datauser.url_image = res.data.image_url;
      datauser.city = res.data.city;
    });
};

const adduser = () => {
  const dataEdit = new FormData();
  dataEdit.append("full_name", datauser.full_name);
  dataEdit.append("email", datauser.email);
  dataEdit.append("phone_number", datauser.phone_number);
  dataEdit.append("address", datauser.address);
  dataEdit.append("image", datauser.image);
  dataEdit.append("city", datauser.city);

  useAuthStore().adduser(dataEdit);
};
const setFile = (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  datauser.image = files[0];
  datauser.url_image = URL.createObjectURL(files[0]);
  console.log(files[0]);
};
onMounted(() => {
  getuser();
});
const back = useRouter();
</script>
<template>
  <div class="drop sticky-top zindex-toast">
    <router-link to="/"
      ><img src="../assets/images-removebg-preview.png" alt=""
    /></router-link>
    <div class="not">
      <div class="title">
        <p>Lengkapi Info akun</p>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="left">
      <a @click="back.back"> <i class="bi bi-arrow-left-short"></i></a>
    </div>
    <form action="" @submit.prevent="adduser">
      <div class="right">
        <div
          v-if="datauser.image"
          class="position-relative"
          style="width: fit-content"
        >
          <span
            v-if="datauser.image"
            @click="
              datauser.image = null;
              datauser.url_image = null;
            "
            type="button"
            style="
              z-index: 100;
              position: absolute;
              right: 0;
              background-color: red;
              color: white;
              padding: 5px;
              font-size: 9px;
              border-radius: 100%;
            "
          >
            ✖
          </span>
          <img :src="datauser.url_image" alt="" width="300" />
        </div>
        <label v-else class="image" for="fotoProfile" type="button">
          <i class="bi bi-camera"></i>
        </label>
        <input
          @change="setFile"
          type="file"
          name="fotoProfile"
          id="fotoProfile"
          class="d-none"
        />
        <!-- full_name -->
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">Nama*</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Nama Lengkap"
            v-model="datauser.full_name"
          />
        </div>
        <!-- Email -->
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Email*</label>
          <input
            type="text"
            v-model="datauser.email"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Contoh: jl.burnik 01/02 Desa.Dhadapan"
          />
        </div>
        <!-- Kota -->
        <div class="mb-3">
          <label for="">City</label>
          <select
            v-model="datauser.city"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="">Kota*</option>
            <option value="Probolinggo">Probolinggo</option>
            <option value="Situbondo">Situbondo</option>
            <option value="Jember">Jember</option>
          </select>
        </div>
        <!-- address -->
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">Alamat*</label>
          <input
            type="text"
            v-model="datauser.address"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Contoh: jl.burnik 01/02 Desa.Dhadapan"
          />
        </div>
        <!-- nohp -->
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label"
            >Nomer Handphone*</label
          >
          <input
            type="number"
            v-model="datauser.phone_number"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input placeholder"
          />
        </div>
        <button type="submit" class="btn">Simpan</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
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
/* .drop .not .title {
  border: 1px solid black;
} */
.box {
  max-width: 45rem;
  margin: 0 auto;
}
.box .left {
  width: 2rem;
  max-width: 2rem;
}
.box .left i {
  font-size: 2rem;
  cursor: pointer;
}
.box .right {
  width: 100%;
  padding: 5px 8px;
}
.box .right .image {
  width: 96px;
  height: 96px;
  margin: 0 auto;
  top: 0.7rem;
  background: #e2d4f0;
  border-radius: 12px;
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
}
.box .right .image i {
  margin: 0 auto;
  font-size: 1.5rem;
}
button {
  width: 100%;
  background: #7126b5;
  border-radius: 16px;
  color: white;
}
button:hover {
  background-color: #531192;
  color: white;
}
</style>
