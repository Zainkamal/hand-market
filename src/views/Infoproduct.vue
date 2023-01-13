<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store";
import kategori from "../plugin/Api";
import * as Yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import api from "../plugin/Api";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("nama wajib di isi")
    .typeError("data harap di sesuaikan"),
  base_price: Yup.number()
    .required("nama wajib di isi")
    .typeError("data harap di sesuaikan"),
  location: Yup.string()
    .required("nama wajib di isi")
    .typeError("data harap di sesuaikan"),
  description: Yup.string()
    .required("nama wajib di isi")
    .typeError("data harap di sesuaikan"),
  foto: Yup.string()
    .required("nama wajib di isi")
    .typeError("data harap di sesuaikan"),
});

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
const idDetailItem = useRoute().params.id;
const getdata = async () => {
  await api
    .get("/seller/product/" + idDetailItem, {
      headers: {
        access_token: useAuthStore().gettoken,
      },
    })
    .then((res) => {
      formseller.name = res.data.name;
      formseller.description = res.data.description;
      formseller.base_price = res.data.base_price;
      for (let i in res.data.Categories) {
        formseller.category_ids.push(res.data.Categories[i].id);
      }
      formseller.location = res.data.location;
      formseller.url_image = res.data.image_url;
      formseller.image = res.data.image_name;
    })
    .catch((error) => {
      console.log(error);
    });
};
// form binari aplud img
const doaddseller = () => {
  const formData = new FormData();
  formData.append("name", formseller.name);
  formData.append("description", formseller.description);
  formData.append("base_price", formseller.base_price);
  formData.append("category_ids", formseller.category_ids);
  formData.append("image", formseller.image);
  formData.append("location", formseller.location);
  if (idDetailItem) {
    useAuthStore().editproduct(idDetailItem, formData);
  } else {
    useAuthStore().addproduct(formData);
  }
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
  if (idDetailItem) {
    getdata();
  }
});
const back = useRouter();
</script>
<template>
  <div class="container">
    <div class="left">
      <a @click="back.back"> <i class="bi bi-arrow-left-short"></i></a>
    </div>
    <div
      v-if="useAuthStore().loading"
      class="lds-ellipsis"
      style="margin: 0 auto"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Form
      v-else
      class="right"
      @submit="doaddseller"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"
          >Nama Product*</label
        >
        <Field
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          v-model="formseller.name"
          placeholder="Nama Product"
          name="name"
          :class="{ 'is-invalid': errors.name }"
        />
        <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label"
          >Harga Product*</label
        >
        <Field
          type="number"
          class="form-control"
          v-model="formseller.base_price"
          id="formGroupExampleInput2"
          placeholder="Harga Product"
          name="base_price"
          :class="{ 'is-invalid': errors.base_price }"
        />
        <ErrorMessage name="base_price" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label class="form-label">Kategori*</label>
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
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">location*</label>
        <Field
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          v-model="formseller.location"
          placeholder="Nama Product"
          name="location"
          :class="{ 'is-invalid': errors.location }"
        />
        <ErrorMessage name="location" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Descripsi*</label
        >
        <Field
          as="textarea"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="formseller.description"
          placeholder="Descripsi"
          name="description"
          :class="{ 'is-invalid': errors.description }"
        />
        <ErrorMessage
          name="description"
          class="invalid-feedback"
        ></ErrorMessage>
      </div>
      <div
        v-if="formseller.image"
        class="position-relative"
        style="width: fit-content"
      >
        <span
          v-if="formseller.image"
          @click="
            formseller.image = null;
            formseller.url_image = null;
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
        <img :src="formseller.url_image" alt="" width="300" />
      </div>
      <label v-else class="image" for="fotoProduct" type="button">
        <i class="bi bi-plus"></i>
      </label>
      <Field
        type="file"
        name="foto"
        id="fotoProduct"
        class="d-none"
        v-model="formseller.image"
        @change="setFile"
        :class="{ 'is-invalid': errors.foto }"
      />
      <ErrorMessage name="foto" class="invalid-feedback"></ErrorMessage>

      <div class="tombol">
        <button type="button" class="btn">Perview</button>
        <button type="submit" class="btn">Terbitkan</button>
      </div>
    </Form>
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
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(0, 0, 0);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

@media screen and (max-width: 414px) {
  .container {
    display: block;
  }
}
</style>
