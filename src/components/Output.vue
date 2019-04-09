<template>
  <div>
    <Banner/>
    <div class="output">This is your output!</div>
    <div class="custom">{{this.customLiquor}}</div>
    <img class="blueberry" alt="Aged and Infused Logo" src="../assets/DSC_0304.jpg">
    <div class="custom">{{this.customCategory}}</div>
    <div class="custom" v-for="item in customIngredients" :key="item.id">{{item}}</div>
  </div>
</template>

<script>
import Preset from "@/store/modules/Preset.js";
import store from "@/store/index.js";
import Category from "@/store/modules/Category.js";
import Banner from "@/components/Banner.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Output",
  data() {
    return {
      ingredientType: null,
      getCategoryID: 0,
      getCategoryName: ""
      // customLiquor: "",
      // customCategory: "",
      // customIngredients: ""
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
    Banner
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
</style>
