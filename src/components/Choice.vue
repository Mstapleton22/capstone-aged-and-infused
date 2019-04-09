<template>
  <div>
    <Banner/>
    <div class="line w3-animate-bottom">________</div>
    <div
      class="presetNotice w3-animate-bottom"
    >As you may already know, Aged and Infused has already done the hard work for you! Taste tested, boozey bae approved, Preset infusions could be yours! Just click "Preset" below.</div>
    <div class="line w3-animate-bottom">________</div>
    <div
      class="presetNotice w3-animate-bottom"
    >If you came to slay for yourself, tap on that customize button like you knew you would</div>
    <router-link class="link w3-animate-bottom" v-bind:to="{ path: `/preset` }">
      <button class="choiceButton">Preset list</button>
    </router-link>
    <router-link class="link w3-animate-bottom" v-bind:to="{ path: `/ingredientcategory` }">
      <button class="choiceButton">Customize that bb</button>
    </router-link>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner
  }
};
</script>

<style>
.choiceButton {
  padding: 3%;
  margin: 3%;
  font-size: 1em;
  font-weight: bold;
  background-color: white;
  border: 3px solid #303d4a;
}
.presetNotice {
  margin-bottom: 10%;
  margin-left: 5%;
  margin-right: 10%;
  line-height: 1.6;
  font-weight: bold;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .presetNotice {
    padding-right: 10%;
    padding-left: 5%;
  }
  .line {
    margin-right: 10%;
  }
}
</style>
