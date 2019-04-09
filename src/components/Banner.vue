<template>
  <div class="header">
    <img class="logo" alt="Aged and Infused Logo" src="../assets/AgedandInfused-MainWhite.png">
    <h1 class="headerText"></h1>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style>
.header {
  /* margin-top: 10%; */
  padding-top: 4%;
  padding-bottom: 4%;
  background-color: #492d1d;
}
.headerText {
  color: #ffffff;
}
.logo {
  width: 100vw;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .header {
    /* margin-top: 10%; */
    padding-top: 8%;
    padding-bottom: 8%;
    background-color: #492d1d;
  }
}
</style>
