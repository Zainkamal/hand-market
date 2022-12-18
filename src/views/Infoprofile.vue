<script setup>
import { useRouter } from "vue-router";

const back = useRouter();
</script>
<template>
  <div class="drop sticky-top zindex-toast">
    <router-link to="/"
      ><img src="../assets/21-removebg-preview.png" alt=""
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
    <div class="right">
      <div class="image"><i class="bi bi-camera"></i></div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nama*</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Nama Lengkap"
        />
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Kota*</option>
        <option value="1">Probolinggo</option>
        <option value="2">situbondo</option>
        <option value="3">Jember</option>
      </select>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">Alamat*</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Contoh: jl.burnik 01/02 Desa.Dhadapan"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label"
          >Nomer Handphone*</label
        >
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
      </div>
      <button type="button" class="btn">Simpan</button>
    </div>
  </div>
</template>
<style scoped>
.drop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: rgb(248, 245, 245);
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
