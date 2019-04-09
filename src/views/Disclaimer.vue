<template>
  <div class="disclaimer">
    <div class="header">
      <img class="logo" alt="Aged and Infused Logo" src="../assets/AgedandInfused-MainWhite.png">
      <h1 class="headerText">Disclaimer</h1>
    </div>
    <div class="disclaimerNotice w3-animate-bottom">
      Aged and Infused wants to make sure you are properly Aged before continuing through to Infuse! Please
      confirm that you are over the age of 21 years old and are legally able to utilize our site.
    </div>
    <router-link class="link w3-animate-bottom" v-bind:to="{ path: `/DisclaimerFail` }">
      <button class="disclaimerButton">I am not 21</button>
    </router-link>
    <router-link class="link w3-animate-bottom" v-bind:to="{ path: `/introduction` }">
      <button class="disclaimerButton">I am 21 or over</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
.disclaimerButton {
  /* display: flex;
  justify-content: flex-end; */
  padding: 10px;
  /* margin: 3%; */
  background-color: white;
  border: 3px solid #303d4a;
  font-weight: bold;
}
.disclaimerNotice {
  padding-top: 1%;
  margin-left: 10%;
  margin-right: 10%;
  font-weight: bold;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .header {
    /* margin-top: 10%; */
    padding-top: 8%;
    padding-bottom: 8%;
    background-color: #492d1d;
  }
  .disclaimerNotice {
    padding-top: 20%;
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 10%;
    line-height: 1.6;
    font-size: 1.3em;
  }
  .disclaimerButton {
    padding: 10px;
    margin: 3%;
    background-color: white;
    border: 3px solid #303d4a;
    font-weight: bold;
  }
}
</style>

