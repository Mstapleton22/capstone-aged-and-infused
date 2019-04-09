<template>
  <div>
    <Banner/>

    <div class="preset">
      <button v-for="preset in allPresets" :key="preset.id" class="preset">
        <a class="btn" href="http://www.agedandinfused.com/shop" target="_blank">{{preset.name}}</a>
      </button>
    </div>
  </div>
</template>

<script>
import Preset from "@/store/modules/Preset.js";
import Banner from "@/components/Banner.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Preset",

  methods: {
    ...mapActions(["fetchPreset"])
  },
  computed: mapGetters(["allPresets"]),
  created() {
    this.fetchPreset();
  },
  components: {
    Banner
  }
};
</script>

<style scoped>
.preset {
  margin: 5%;
  padding: 3%;
  background-color: #303d4a;
  color: #ffffff;
  box-shadow: 6px 4px 20px 6px rgba(0, 0, 0, 0.2), 6px 6px 10px 6px rgba(0, 0, 0, 0.19);
}
.btn {
  text-decoration: none;
  font-size: 1.5em;
}
</style>
