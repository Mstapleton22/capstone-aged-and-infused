<template>
  <div class="welcome">
    <img class="logo" alt="Aged and Infused Logo" src="../assets/AgedandInfused-MainWhite.png">
    <router-link class="link" v-bind:to="{ path: `/disclaimer` }">
      <button class="welcomeButton">Let's get that Booze</button>
    </router-link>
    <div class="blueberryImg">
      <img class="blueberry" alt="Aged and Infused Logo" src="../assets/blueberry.png">
      <img class="blueberry" alt="Aged and Infused Logo" src="../assets/lemon.png">
      <img class="blueberry" alt="Aged and Infused Logo" src="../assets/grapefruit.png">
    </div>
  </div>
</template>

<script>
export default {
  // name: "Welcome"
};
</script>

<style scoped>
.welcome {
  background-color: #303d4a;
  background-position: cover;
  height: 100vh;
}
.logo {
  padding-top: 20%;
  /* height: 20vh; */
  width: 100vw;
}
.welcomeButton {
  padding: 10px;
  margin: 5%;
  width: 80vw;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  font-size: 1.5em;
  font-weight: 400;
}
.welcomeButton:focus {
  background-color: white;
  color: black;
  font-weight: bold;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .logo {
    /* padding-top: 40%; */
    margin-top: 50%;

    height: 20vh;
    width: 100vw;
  }
  .blueberry {
    width: 20vw;
    padding: 3%;
    color: white;
  }
}
</style>
