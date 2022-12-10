<script setup></script>
<template>
  <div class="container d-flex">
    <div class="left">
      <router-link to="/daftarjual">
        <i class="bi bi-arrow-left-short"></i
      ></router-link>
    </div>
    <div class="card">
      <img src="../assets/jam tangan.jfif" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the
          card title and make up the bulk of the card's content.Some quick
          example text to build on the card title and make up the bulk of the
          card's content.Some quick example text to build on the card title and
          make up the bulk of the card's content.Some quick example text to
          build on the card title and make up the bulk of the card's
          content.Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
      </div>
    </div>
    <div class="word">
      <div class="top">
        <h5>Jam Tangan casio</h5>
        <p>Aksesoris</p>
        <h5 style="top: -8px">Rp 250.000</h5>
        <button>Terbitkan</button><br />
        <button>Edit</button>
      </div>
      <div class="bottom d-flex">
        <img
          src="../assets/Among_Us_Background_Keren-removebg-preview.png"
          alt=""
          style="width: 3rem; height: 3rem"
        />
        <div class="nama">
          <h5>Alan Bin Suroso</h5>
          <p>Bali</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin: 15px auto;
  width: 80%;
}
.left {
  font-size: 2rem;
  margin-right: 8rem;
}
.card {
  width: 40%;
}

.word {
  margin-left: 15px;
  width: 60%;
}
.word .top {
  box-shadow: 0 0 4px black;
  max-width: 18rem;
  height: 13rem;
  padding: 5px 12px;
}
.word .top button {
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
}
.word .top button:hover {
  background-color: #7126b5;
}
.bottom {
  margin-top: 10px;
  box-shadow: 0 0 4px black;
  padding: 0 15px;
  height: 3.5rem;
  justify-content: flex-start;
  align-items: center;
  max-width: 18rem;
}
.bottom img {
  border-radius: 50%;
  box-shadow: 0 0 4px black;
  border: 1px solid black;
  margin-right: 10px;
}
.bottom h5 {
  font-size: 15px;
  top: 0.8rem;
}
</style>
