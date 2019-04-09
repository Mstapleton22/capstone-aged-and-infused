<template>
  <div class="introduction">
    <Banner/>
    <template>
      <div class="intros w3-animate-bottom" v-if="!clicked">
        <div class="line">________</div>
        <div class="intro1">
          Hey there, boozey bae!
          It's time to get going on your infusion process.
          A few notes before we begin...
        </div>
        <div class="line">________</div>
        <div class="intro2">
          Now that you're thirsty
          we'd like you to remember that our infusions should be enjoyed responsibly.
        </div>
        <div class="line">________</div>

        <div class="intro3">
          Keep in mind:
          Flavors are meant to be explored! Be conscious of how you blend your infusions together!
        </div>
        <div class="line">________</div>

        <div class="intro4">Happy Infusing!</div>
      </div>
    </template>
    <router-link class="link w3-animate-bottom" v-bind:to="{ path: `/liquor` }">
      <button class="button" v-on:click="this.isClicked" type="button">Lets get infusing</button>
    </router-link>
  </div>
</template>

<script>
import Liquor from "@/components/Liquor.vue";
import Banner from "@/components/Banner.vue";
// import Ingredients from "@/components/Ingredients.vue";
// import Category from "@/components/Category.vue";

export default {
  data() {
    return {
      clicked: false
      // display: false,
    };
  },
  computed: {
    liquor() {
      return this.$store.getters.allLiquors;
    }
  },
  methods: {
    isClicked() {
      this.clicked = !this.clicked;
    }
  },
  components: {
    // Preset,
    Banner,
    Liquor
    // Ingredients,
    // Category
  }
  // props: ["liquor"]
};
</script>

<style scoped>
.intros {
  padding-right: 15%;
  padding-left: 5%;
  /* padding-top: 3%; */
  font-weight: bold;
  font-size: 1em;
  line-height: 1.6;
}
.intro1 {
  margin-bottom: 2%;
}
.intro2 {
  margin-bottom: 2%;

  /* border: 3px solid #ad5e34;
  border-radius: 15%;
  background-color: #ffffff; */
}
.intro3 {
  margin-bottom: 2%;
}
.intro4 {
  margin-bottom: 2%;
}
.button {
  margin-top: 5%;
  padding: 3%;
  background-color: white;
  border: 3px solid #303d4a;
  font-size: 1.1em;
}
.question {
  margin-top: 20%;
}
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  /* .header {
    margin-top: 10%;
    padding-top: 8%;
    padding-bottom: 8%;
    background-color: #492d1d;
  } */
  .disclaimerNotice {
    padding-top: 20%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .intros {
    padding-right: 15%;
    padding-left: 5%;
    /* padding-top: 2%; */
  }
  .intro1 {
    margin-bottom: 2%;
  }
  .intro2 {
    margin-bottom: 2%;
  }
  .intro3 {
    margin-bottom: 2%;
  }
  .intro4 {
    margin-bottom: 2%;
  }
  .button {
    margin-top: 5%;
    margin-left: 35%;
    padding: 3%;
    background-color: white;
    border: 3px solid #303d4a;
    font-size: 1.1em;
  }
}
</style>
