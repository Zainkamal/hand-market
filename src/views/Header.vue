<template>
  <header class="sticky-top zindex-toast">
    <div class="drop">
      <div class="left">
        <img src="../assets/21-removebg-preview.png" alt="" />

        <div class="col-auto">
          <div class="input-group">
            <div class="input-group-text">🔎</div>
            <input
              type="text"
              class="form-control"
              id="autoSizingInputGroup"
              placeholder="Username"
              style="width: 250px"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <a class="icon" href=""><i class="bi bi-blockquote-left"></i></a>
        <a class="icon" href=""><i class="bi bi-bell-fill"></i></a>
        <a class="icon" href=""><i class="bi bi-person-heart"></i></a>
        <button>
          <router-link to="/login" style="color: white"
            ><p><i class="bi bi-arrow-right-circle"></i> Login</p></router-link
          >
        </button>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  background-color: rgb(248, 245, 245);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
}
.drop {
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  align-items: center;
  height: 84px;
}
.drop .left {
  display: flex;
  left: 50px;
  align-items: center;
}
.drop .left img {
  padding: 10px 0;
  width: 260px;
  height: 100px;
}
.right {
  right: 30px;
}
.right .icon {
  color: black;
  margin: 0 10px;
  font-size: 24px;
}
.right button {
  background-color: #7126b5;
  border-radius: 10px;
  width: 90px;
  height: 30px;
}
</style>
