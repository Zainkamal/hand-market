<script setup></script>
<template>
  <div class="container d-flex">
    <div class="left">
      <router-link to="/"> <i class="bi bi-arrow-left-short"></i></router-link>
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
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Saya tertarik
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="width: 20rem">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Masukkan Harga Tawarmu
                </h5>
                <button
                  type="button"
                  class="btn-close btn-outline-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  style="width: 1rem"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Harga tawaranmu akan diketahui penual, jika penjual cocok kamu
                  akan segera dihubungi penjual.
                </p>
              </div>
              <div
                class="bottom d-flex"
                style="height: 3rem; margin-left: 15px; top: -20px"
              >
                <img
                  src="../assets/Among_Us_Background_Keren-removebg-preview.png"
                  alt=""
                  style="width: 2rem; height: 2rem"
                />
                <div class="nama">
                  <h5>Alan Bin Suroso</h5>
                  <p>Bali</p>
                </div>
              </div>
              <div class="mb-3 m-3" style="top: -8px">
                <label for="exampleFormControlInput1" class="form-label"
                  >Harga Tawaran</label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Nominal"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">Kirim</button>
              </div>
            </div>
          </div>
        </div>
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
  height: auto;
  padding: 5px 12px;
}
.word .top button {
  width: 100%;
  margin-top: 10px;
  background-color: #7126b5;
  border-radius: 10px;
  border: #7126b5;
  margin-bottom: 10px;
  color: white;
}
.word .top button:hover {
  background-color: #431172;
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
