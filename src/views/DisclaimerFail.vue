<template>
  <div class="disclaimerFail">
    <div class="header">
      <img class="logo" alt="Aged and Infused Logo" src="../assets/AgedandInfused-MainWhite.png">
      <h1 class="headerText">Hey! You're not 21...</h1>
    </div>
    <div
      class="disclaimerNotice w3-animate-left"
    >We're sorry about that. Please come back when your I.D. is horozontal.</div>
    <img
      class="stop w3-animate-left"
      alt="Aged and Infused Logo"
      src=" https://www.freeiconspng.com/uploads/stop-sign-png-8.png"
    >
    <div class="disclaimerNotice w3-animate-left">We will be waiting!</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  /* margin-top: 10%; */
  /* padding-top: 4%; */
  padding-bottom: 4%;
  background-color: #492d1d;
}
.headerText {
  color: #ffffff;
  font-size: 1.3em;
}
.logo {
  width: 100vw;
}
.stop {
  width: 50vw;
}
.disclaimerButton {
  padding: 10px;
  margin: 5%;
}
.disclaimerNotice {
  padding-top: 1%;
  margin-left: 10%;
  margin-right: 10%;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 1.6;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .header {
    padding-top: 8%;
    padding-bottom: 8%;
    background-color: #492d1d;
  }
  .disclaimerNotice {
    padding-top: 20%;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>