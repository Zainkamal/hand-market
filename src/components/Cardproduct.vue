<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  location: {
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
});
</script>
<template>
  <div class="box">
    <div class="card" style="width: 10.5rem">
      <img :src="image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 v-for="item in Categories" :key="item.id">
          {{ item.name }}
        </h5>
        <p>{{ location }}</p>
        <p>Rp.{{ base_price }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
aside .box {
  margin: 10px 10px;
  display: flex;
}
aside .box .card {
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
}
aside .box .card img {
  width: 100%;
  max-height: 8rem;
  cursor: pointer;
  transition: 400ms;
}
.card-body h5,
p {
  font-size: 0.9rem;
}
</style>
