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
  <div class="col-lg-2 col-md-3 col-sm-6 col-6">
    <div class="card">
      <img :src="image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 v-for="item in Categories" :key="item.id">
          {{ item.name }}
        </h5>
        <p>{{ location }}</p>

        <p>Rp.{{ base_price }}</p>
        <p>{{ description }}</p>
      </div>
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
