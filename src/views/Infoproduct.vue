<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store";
import kategori from "../plugin/Api";

const data = reactive({
  kategori: [],
});
const formseller = reactive({
  name: "",
  description: "",
  base_price: null,
  category_ids: [],
  location: "",
  image: null,
  url_image: null,
});

// form binari aplud img
const doaddseller = () => {
  const formData = new FormData();
  formData.append("name", formseller.name);
  formData.append("description", formseller.description);
  formData.append("base_price", formseller.base_price);
  formData.append("category_ids", formseller.category_ids);
  formData.append("image", formseller.image);
  formData.append("location", formseller.location);
  useAuthStore().addseller(formData);
};

const setFile = (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  formseller.image = files[0];
  formseller.url_image = URL.createObjectURL(files[0]);
  console.log(files[0]);
};

const getkategori = async () => {
  await kategori.get("/seller/category").then((response) => {
    data.kategori = response.data;
  });
};

onMounted(() => {
  getkategori();
});
const back = useRouter();
</script>
<template>
  <div class="container">
    <div class="left">
      <a @click="back.back"> <i class="bi bi-arrow-left-short"></i></a>
    </div>
    <form class="right" @submit.prevent="doaddseller">
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"
          >Nama Product*</label
        >
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          v-model="formseller.name"
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
          v-model="formseller.base_price"
          id="formGroupExampleInput2"
          placeholder="Harga Product"
        />
      </div>
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="formseller.category_ids"
        multiple
      >
        <option selected>Pilih Katagori*</option>
        <option :value="item.id" v-for="(item, index) in data.kategori">
          {{ item.name }}
        </option>
      </select>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">location*</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          v-model="formseller.location"
          placeholder="Nama Product"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Descripsi*</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="formseller.description"
          placeholder="Descripsi"
        ></textarea>
      </div>
      <input
        type="file"
        name="foto"
        id="fotoProduct"
        class="d-none"
        @change="setFile"
      />
      <img
        v-if="formseller.image"
        :src="formseller.url_image"
        alt=""
        width="100"
      />

      <label v-else class="image" for="fotoProduct" type="button">
        <i class="bi bi-plus"></i>
      </label>
      <button
        @click="
          formseller.image = null;
          formseller.url_image = null;
        "
      >
        Batal
      </button>
      <div class="tombol">
        <button type="button" class="btn">Perview</button>
        <button type="submit" class="btn">Terbitkan</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  max-width: 45rem;
  margin-top: 20px;
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
@media screen and (max-width: 414px) {
  .container {
    display: block;
  }
}
</style>
