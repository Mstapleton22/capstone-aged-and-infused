<template>
  <div class="home">
    <div class="container">
      <Preset/>
      <Liquor/>
      <Category/>
      <Ingredients/>
    </div>
  </div>
</template>

<script>
import Preset from "@/components/Preset.vue";
import Liquor from "@/components/Liquor.vue";
import Ingredients from "@/components/Ingredients.vue";
import Category from "@/components/Category.vue";

export default {
  name: "home",
  components: {
    Preset,
    Liquor,
    Ingredients,
    Category
  }
};
</script>
