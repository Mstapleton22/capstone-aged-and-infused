<template>
  <div>
    <Banner/>
    <div class="message">
      Congratulations
      <br>You've just created you personal infusion!
    </div>

    <div class="prompt">Liquor of Choice: {{this.customLiquor}}</div>
    <!-- <div class="custom">{{this.customLiquor}}</div> -->
    <img class="infusionPic" alt="Aged and Infused Logo" src="../assets/DSC_0304.jpg">
    <div class="prompt">Taste: {{this.customCategory}}</div>
    <!-- <div class="custom">{{this.customCategory}}</div> -->
    <div class="prompt">Ingredients to infuse:</div>
    <div class="custom" v-for="item in customIngredients" :key="item.id">{{item}}</div>

    <div class="steps">
      <div class="question">What do we do now?</div>
      <p>Now that you've chosen your ingredients, it's time to combine them with {{this.customLiquor}}.</p>
      <ol>
        <li>Wait! 7 - 10 days of infusing is what we recommend.</li>
        <li>Serve as you please!</li>
        <li>A few of our recommended cocktails can be found below.</li>
        <li>Don't forget to share your experience below!</li>
      </ol>
    </div>
    <div class="cocktails" v-for="cocktail in allLiquor" :key="cocktail">{{this.cocktail}}</div>
    <HelloSocial></HelloSocial>
  </div>
</template>

<script>
import HelloSocial from "@/components/SocialSharing.vue";
import Preset from "@/store/modules/Preset.js";
import store from "@/store/index.js";
import Category from "@/store/modules/Category.js";
import Banner from "@/components/Banner.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Output",
  data() {
    return {
      // ingredientType: null,
      // getCategoryID: 0,
      // getCategoryName: ""
    };
  },
  methods: {},
  computed: mapGetters(["allCustom"]),
  created() {
    this.customLiquor = store.getters.allCustom.selectedLiquor;
    this.customCategory = store.getters.allCustom.selectedCategory;
    this.customIngredients = store.getters.allCustom.selectedIngredients;
  },
  components: {
    Banner,
    HelloSocial
  }
  // mounted() {
  // this.mapIngredients();
  // }
};
</script>

<style scoped>
.ingredient {
  margin: 2%;
  padding: 6%;
  background-color: #303d4a;
  border: 5px solid #ad5e34;
  color: #ffffff;
  font-size: 1.2em;
}
img {
  height: 50%;
  width: 10vw;
}
.question {
  padding-top: 20%;
  margin-right: 2%;
  margin-left: 2%;
  margin-bottom: 10%;
  font-size: 1.3em;
  font-weight: bold;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 512px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .infusionPic {
    width: 60vw;
    border: 10px solid #303d4a;
    margin: 3%;
    padding: 3%;
  }
  .message {
    padding: 5%;
    font-weight: bold;
    line-height: 1.6;
    font-size: 1.3em;
    background-color: #ad5e34;
    border-bottom: 5px solid #303d4a;
    border-top: 5px solid #303d4a;
    color: white;
  }
  .prompt {
    flex-direction: column;
    margin-left: 5%;
    font-weight: bold;
    line-height: 1.6;
    font-size: 1.2em;
  }

  .custom {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    line-height: 1.6;
    font-size: 1.2em;
  }
  .question {
    margin-bottom: 10%;
    font-size: 1.3em;
    font-weight: bold;
    padding-top: 8%;
    padding-bottom: 8%;
    background-color: #492d1d;
    color: white;
  }
}
</style>
