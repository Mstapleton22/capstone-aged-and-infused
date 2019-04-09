<template>
  <div>
    <Banner/>
    <div class="question w3-animate-bottom">Select your booze to infuse.</div>
    <div class="liquors w3-animate-bottom">
      <button
        v-for="liquor in allLiquors"
        :key="liquor.id"
        class="liquor"
        v-on:click="liquorSelect(liquor.name)"
      >
        <router-link class="link" v-bind:to="{ path: `/choice` }">{{liquor.name}}</router-link>
      </button>
    </div>
  </div>
</template>

<script>
// , params: { selectedLiquor: liquor.name}
import store from "@/store/index.js";
import Banner from "@/components/Banner.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Liquor",
  data() {
    return {
      selectedLiquor: ""
    };
  },
  methods: {
    liquorSelect(value) {
      console.log(value);
      store.commit("setSelectedLiquor", value);
    },
    ...mapActions(["fetchLiquor"])
  },
  computed: mapGetters(["allLiquors"]),
  created() {
    this.fetchLiquor();
  },
  components: {
    Banner
  }
};
</script>

<style scoped >
.liquor {
  margin: 2%;
  padding: 10%;
  background-color: #303d4a;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: bold;
}
.question {
  padding-top: 10%;
  font-size: 1.3em;
}
.liquors {
  padding-top: 10%;
}
.link {
  text-decoration: none;
  color: white;
}
</style>