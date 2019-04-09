<template>
  <div>
    <Banner/>
    <!-- <div class="liquor">{{this.selectedLiquor}}</div> -->
    <div
      class="question w3-animate-right"
    >Tongue tied on flavors? Choose a flavor palette to help ease your tastebuds</div>
    <div class="categories w3-animate-right">
      <button
        v-for="category in allCategories"
        :key="category.id"
        :getCategoryID="category"
        class="category"
        @click="categorySelect(category.name)"
      >
        <router-link
          class="link"
          v-bind:to="{ name: 'Ingredients', params: {id: category.id}}"
        >{{category.name}}</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import Category from "@/store/modules/Category.js";
import store from "@/store/index.js";
import Banner from "@/components/Banner.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categories",
  data() {
    return {
      id: null
    };
  },
  methods: {
    ...mapActions(["fetchCategories", "getCategory"]),
    categorySelect(value) {
      console.log(value);
      // this.selectCategory = value;
      store.commit("setSelectedCategory", value);
    }
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  },
  components: {
    Banner
  }
  // log($event) {
  //   console.log("getCategory(category.id)");
  // }
};
</script>

<style scoped >
.category {
  margin: 2%;
  padding: 10%;
  background-color: #303d4a;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
}
.question {
  padding-top: 3%;
  margin-bottom: 10%;
  font-size: 1.3em;
  font-weight: bold;
}
.link {
  text-decoration: none;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 512px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait) {
  .category {
    margin: 2%;
    padding: 10%;
    background-color: #303d4a;
    color: #ffffff;
    text-decoration: none;
    font-size: 1.2em;
  }
  .question {
    margin-bottom: 10%;
    font-size: 1.3em;
    font-weight: bold;
  }
}
</style>