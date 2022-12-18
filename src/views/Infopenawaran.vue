<script setup></script>
<template>
  <header class="sticky-top zindex-toast">
    <div class="drop">
      <div class="left">
        <router-link to="/"
          ><img src="../assets/21-removebg-preview.png" alt=""
        /></router-link>
        <p>Info Penawaran</p>
      </div>
    </div>
  </header>
</template>
<style scoped>
.drop {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: rgb(248, 245, 245);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.315);
}
.drop .left {
  display: flex;
  justify-content: first baseline;
  margin-left: 50px;
  align-items: center;
}
.drop .left img {
  padding: 10px 0;
  width: 6rem;
  height: 5rem;
}
.drop .left p {
  color: black;
  margin-left: 30rem;
}
</style>
