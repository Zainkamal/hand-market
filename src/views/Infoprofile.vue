<script setup></script>
<template>
  <div class="container">
    <div class="left">
      <router-link to="/"> <i class="bi bi-arrow-left-short"></i></router-link>
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
.container {
  display: flex;
  max-width: 45rem;
}
.container .left {
  width: 2rem;
  max-width: 2rem;
  margin-right: 20px;
}
.container .left i {
  font-size: 2rem;
  cursor: pointer;
}
.container .right {
  width: 100%;
  padding: 5px 8px;
}
.container .right .image {
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
.container .right .image i {
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
