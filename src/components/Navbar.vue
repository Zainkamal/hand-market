<script setup></script>
<template>
  <nav class="nav flex-column">
    <h5 style="margin-left: 15px">katagori</h5>
    <div class="link">
      <router-link to="daftarjual">
        <a class="nav-link active" aria-current="page" href="#"
          ><i class="bi bi-box-fill"> Semua Product</i>
          <i class="bi bi-arrow-right-circle"></i
        ></a>
      </router-link>
      <router-link to="diminati">
        <a class="nav-link" href="#"
          ><i class="bi bi-heart-fill"> Diminati</i>
          <i class="bi bi-arrow-right-circle"></i></a
      ></router-link>
      <router-link to="terjual">
        <a class="nav-link" href="#"
          ><i class="bi bi-currency-dollar"> Terjual</i>
          <i class="bi bi-arrow-right-circle"></i
        ></a>
      </router-link>
      <router-link to="statistik">
        <a class="nav-link" href="#"
          ><i class="ri-pie-chart-fill"> statistik</i>
          <i class="bi bi-arrow-right-circle"></i
        ></a>
      </router-link>
    </div>
  </nav>
</template>
<style scoped>
.nav {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
  width: 16rem;
  height: auto;
  padding: 15px 3px 30px 3px;
  max-height: 13rem;
  display: block;
  margin-right: 2rem;
}
.link {
  display: block;
  width: 100%;
}

.nav .nav-link {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.295);
}
@media screen and (max-width: 414px) {
  .nav {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.637);
    width: 100%;
    height: auto;
    padding: 0 5px;
    display: flex;
    margin-bottom: 10px;
  }
  .link {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .nav .nav-link {
    display: block;
    justify-content: space-between;
    font-size: 0.6rem;
    gap: 4px;
    margin-bottom: 9px;
    box-shadow: 0 0 2px black;
  }
}
</style>
