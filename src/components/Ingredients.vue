<template>
  <div>
    <Banner/>
    <div
      class="question w3-animate-bottom"
    >Choose 3 ingredients you'd love to spice up your life; you spice girl, you.</div>
    <div class="ingredients w3-animate-bottom">
      <!-- <h1 class="ingredientType" v-for="type in allSeparateIngredients"></h1> -->

      <!-- <div>
        There are this many ingredients:
        {{specificIngredients}}
      </div>-->
      <button
        v-for="ingredient in specificIngredients"
        :key="ingredient.id"
        v-on:click="ingredientSelect(ingredient.name)"
        class="ingredient"
      >
        {{ingredient.name}}
        <br>
        <img :src="ingredient.image">
      </button>
      <!-- <div>{{this.getCategoryID}}</div> -->
    </div>
    <button>
      <router-link class="link" v-bind:to="{ path: `/output`}">Check that custom infusion</router-link>
    </button>
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
    // getImage(ingredient) {
    //   return require("./public/" + ingredient.image);
    // },
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
        // return separate.includes(ingredient.id);
        if (separate.includes(ingredient.id)) {
          return this.specificIngredients.push(ingredient);
        }
      });
      console.log("ingredient", ingredient);
      console.log("separate", separate);
    }
  },
  computed: mapGetters(["allIngredients", "allSeparateIngredients"]),
  created() {
    this.fetchIngredients();
    this.fetchIngCategory();
    this.getCategoryID = this.$route.params.id;
    // this.getCategoryName = this.$route.params.categoryName;
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
</style>