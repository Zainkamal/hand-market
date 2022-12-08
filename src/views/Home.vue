<script setup></script>
<template>
  <main>
    <div class="car">
      <div class="image">
        <img src="../assets/images.jpg" alt="" />
      </div>
      <div class="image">
        <img src="../assets/images.jpg" alt="" />
      </div>
      <div class="image">
        <img src="../assets/images.jpg" alt="" />
      </div>
    </div>
  </main>
  <aside>
    <h3>Telusuri Katagori</h3>
    <div class="filter">
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
      <button>🔍 Semua</button>
    </div>
    <div class="box">
      <div class="card" style="max-width: 181.33px; height: auto">
        <img src="../assets/jam tangan.jfif" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3>Jam tangan Casio</h3>
          <p class="card-text">Aksesoris</p>
          <h3>Rp 230.000</h3>
        </div>
      </div>
    </div>
  </aside>
</template>
<style scoped>
main .car {
  display: flex;
  justify-content: center;
  align-items: center;
}
main img {
  width: 30rem;
  margin-top: 20px;
}
aside {
  width: 85%;
  margin: 20px auto;
  height: auto;
}
aside .filter {
  margin-top: 10px;
}
aside .filter button {
  padding: 5px 15px;
  margin-right: 10px;
  border-radius: 12px;
  color: black;
  background-color: #e2d4f0;
}
aside .filter button:hover {
  background-color: #7126b5;
  color: white;
}
aside .box {
  margin: 10px 15px;
  display: flex;
  width: 100%;
}
aside .box .card {
  margin-right: 15px;
  display: flex;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.432);
}
aside .box .card img {
  width: 100%;
  height: 150px;
  cursor: pointer;
  transition: 400ms;
}
.card-body h3 {
  font-size: 16px;
}
</style>
