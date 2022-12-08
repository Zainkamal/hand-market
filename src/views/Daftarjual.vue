<script setup></script>
<template>
  <div class="container">
    <header>
      <h3>Daftar Jual</h3>
    </header>
    <main>
      <div class="profil">
        <img src="../assets/images.jpg" alt="" />
        <div class="data">
          <h3>Nama Penjual</h3>
          <p>Alan Masyhuri prayono</p>
        </div>
      </div>
      <button>Edit</button>
    </main>
    <aside>
      <nav class="nav flex-column">
        <h5 style="margin-left: 15px">katagori</h5>
        <a class="nav-link active" aria-current="page" href="#"
          ><i class="bi bi-box-fill"></i> Semua katagori
          <i class="bi bi-arrow-right-circle"></i
        ></a>
        <a class="nav-link" href="#"
          ><i class="bi bi-heart-fill"></i> Diminati
          <i class="bi bi-arrow-right-circle"></i
        ></a>
        <a class="nav-link" href="#"
          ><i class="bi bi-currency-dollar"></i> Diminati
          <i class="bi bi-arrow-right-circle"></i
        ></a>
      </nav>
      <div class="right">
        <div class="box">
          <div class="card" style="max-width: 181.33px; height: auto">
            <img
              src="../assets/jam tangan.jfif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3>Jam tangan Casio</h3>
              <p class="card-text">Aksesoris</p>
              <h3>Rp 230.000</h3>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card" style="max-width: 181.33px; height: auto">
            <img
              src="../assets/jam tangan.jfif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3>Jam tangan Casio</h3>
              <p class="card-text">Aksesoris</p>
              <h3>Rp 230.000</h3>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card" style="max-width: 181.33px; height: auto">
            <img
              src="../assets/jam tangan.jfif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3>Jam tangan Casio</h3>
              <p class="card-text">Aksesoris</p>
              <h3>Rp 230.000</h3>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card" style="max-width: 181.33px; height: auto">
            <img
              src="../assets/jam tangan.jfif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3>Jam tangan Casio</h3>
              <p class="card-text">Aksesoris</p>
              <h3>Rp 230.000</h3>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card" style="max-width: 181.33px; height: auto">
            <img
              src="../assets/jam tangan.jfif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3>Jam tangan Casio</h3>
              <p class="card-text">Aksesoris</p>
              <h3>Rp 230.000</h3>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="card" style="max-width: 181.33px; height: auto">
            <img
              src="../assets/jam tangan.jfif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3>Jam tangan Casio</h3>
              <p class="card-text">Aksesoris</p>
              <h3>Rp 230.000</h3>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>
<style scoped>
header {
  width: 100%;
  padding: 15px 0 0 0;
}
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
}
main .profil {
  display: flex;
  align-items: center;
}
main .profil img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
main .profil .data {
  margin-left: 10px;
}
main .profil .data h3 {
  font-size: 18px;
}
main .profil .data p {
  font-size: 13px;
}
main button {
  border-radius: 10px;
}
aside {
  display: flex;
  margin-top: 10px;
}
aside .nav {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
  width: 13rem;
  padding: 15px 3px 30px 3px;
  max-height: 14rem;
}

aside .nav .nav-link {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.295);
}
aside .right {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 15px;
}
aside .box {
  margin: 10px 15px;
  display: flex;
}
aside .box .card {
  margin-right: 15px;
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
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
