<script setup>
import { string } from "yup";

defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  Categories: {
    type: Array,
    required: true,
  },
  base_price: {
    type: String,
    required: true,
  },
  description: {
    type: string,
    required: true,
  },
});
</script>
<template>
  <div class="card">
    <img :src="image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5>{{ name }}</h5>
      <p v-for="item in Categories" :key="item.id">
        {{ item.name }}
      </p>
      <p>{{ description }}</p>
      <p>Rp.{{ base_price }}</p>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin-top: 10px;
  width: 100%;
  display: flex;
  height: 18rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
}
.card img {
  width: 100%;
  height: 8rem;
  object-fit: cover;
  cursor: pointer;
  transition: 400ms;
}
.card-body h5,
p {
  font-size: 0.9rem;
}
@media screen and (max-width: 414px) {
  .card {
    margin-top: 10px;
    width: 100%;
    display: flex;
    height: 15rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
  }
  .card img {
    width: 100%;
    height: 6.5rem;
    object-fit: cover;
    cursor: pointer;
    transition: 400ms;
  }
  .card-body h5,
  p {
    font-size: 0.7rem;
  }
}
</style>
