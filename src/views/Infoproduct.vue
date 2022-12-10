<script setup></script>
<template>
  <div class="container">
    <div class="left">
      <router-link to="/daftarjual">
        <i class="bi bi-arrow-left-short"></i
      ></router-link>
    </div>
    <div class="right">
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"
          >Nama Product*</label
        >
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Nama Product"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label"
          >Harga Product*</label
        >
        <input
          type="number"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Harga Product"
        />
      </div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Pilih Katagori*</option>
        <option value="1">Samsung</option>
        <option value="2">Oppo</option>
        <option value="3">Vivo</option>
      </select>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Descripsi*</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Descripsi"
        ></textarea>
      </div>
      <div class="image"><i class="bi bi-plus"></i></div>
      <div class="tombol">
        <button type="button" class="btn">Perview</button>
        <button type="button" class="btn">Terbitkan</button>
      </div>
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
  background: white;
  border: 1px dashed #d0d0d0;
  border-radius: 12px;
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
}
.container .right .image i {
  margin: 0 auto;
  font-size: 2.5rem;
}
.tombol {
  display: flex;
  gap: 2rem;
}
button {
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  color: black;
  border: 0.9px solid #531192;
  margin-top: 15px;
}
button:hover {
  background-color: #531192;
  color: white;
}
</style>
