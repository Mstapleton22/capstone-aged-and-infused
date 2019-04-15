<template>
  <div>
    <Banner/>
    <div
      class="question w3-animate-bottom"
    >Choose 3 ingredients you'd love to spice up your life; you spice girl, you.</div>
    <div class="ingredients w3-animate-bottom">
      <!-- <h1 class="ingredientType" v-for="type in allSeparateIngredients"></h1> -->

      <button
        v-for="ingredient in specificIngredients"
        :key="ingredient.id"
        v-on:click="ingredientSelect(ingredient.name)"
        class="ingredient"
      >
        {{ingredient.name}}
        <!-- <br> -->
        <img class="icons" :src="ingredient.image">
      </button>
    </div>
    <router-link class="link" v-bind:to="{ path: `/output`}">
      <button class="customButton">Check that custom infusion</button>
    </router-link>
  </div>
</template>

<script>
import Preset from "@/store/modules/Preset.js";
import store from "@/store/index.js";
import Category from "@/store/modules/Category.js";
import Banner from "@/components/Banner.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Ingredients",
  data() {
    return {
      ingredients: [],
      getCategoryID: null,
      specificIngredients: []
      // myList: []
    };
  },
  methods: {
    ...mapActions(["fetchIngredients", "fetchIngCategory"]),
    ingredientSelect(value) {
      if (this.ingredients.length <= 2) {
        this.ingredients.push(value);
        store.commit("setSelectedIngredients", this.ingredients);
      } else if (this.ingredients.length >= 2) {
        alert(
          "You have chosen all of your ingredients! Proceed to see what's good."
        );
      }
    },
    filterIng(arr, category) {
      console.log(store.getters.allSeparateIngredients);
      const separate = store.getters.allSeparateIngredients
        .filter(ingredient => {
          return ingredient.ingredient_category_id === this.getCategoryID;
        })
        .map(ingredient => {
          return ingredient.ingredient_id;
        });
      const ingredient = store.getters.allIngredients.filter(ingredient => {
        if (separate.includes(ingredient.id)) {
          return this.specificIngredients.push(ingredient);
        }
      });
      console.log("ingredient", ingredient);
      console.log("separate", separate);
    }
    // async load() {
    //   // start waiting
    //   this.$wait.start("my list is to load");

    //   this.myList = await new Promise(resolve => {
    //     setTimeout(() => resolve(store.getters.allCustom), 2000);
    //   });

    //   // stop waiting
    //   this.$wait.end("my list is to load");
    // }
  },
  computed: mapGetters(["allIngredients", "allSeparateIngredients"]),
  created() {
    this.fetchIngredients();
    // this.load();
    this.fetchIngCategory();
    this.getCategoryID = this.$route.params.id;
  },
  components: {
    Banner
  },
  mounted() {
    this.filterIng();
  }
};
</script>

<style scoped>
.ingredient {
  margin: 2%;
  padding: 6%;
  background-color: #303d4a;
  color: #ffffff;
  font-size: 1.2em;
  width: 80vw;
  border: 5px solid #303d4a;
  background-color: #59728a;
}
img {
  height: 50%;
  width: 10vw;
}
.question {
  padding-top: 15%;
  margin-right: 2%;
  margin-left: 2%;
  margin-bottom: 10%;
  font-size: 1.3em;
  font-weight: bold;
}
.icons {
  width: 12vw;
  /* background-color: lightgray; */
}
.customButton {
  padding: 10px;
  width: 90vw;
  margin: 3%;
  background-color: white;
  border: 3px solid #303d4a;
  font-weight: bold;
}
</style>