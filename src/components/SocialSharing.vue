<template>
  <div class="hello">
    <!-- <vue-goodshare></vue-goodshare> -->

    <vue-goodshare-facebook
      button_design="outline"
      page_url="https://aged-and-infused-761e3.firebaseapp.com"
      title_social="Facebook"
      has_icon
      has_square_edges
    ></vue-goodshare-facebook>

    <vue-goodshare-twitter
      button_design="gradient"
      page_url="https://aged-and-infused-761e3.firebaseapp.com/"
      has_icon
      has_square_edges
    ></vue-goodshare-twitter>
  </div>
</template>

<script>
// Import vue-goodshare single elements
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshare from "vue-goodshare";

export default {
  name: "HelloSocial",
  components: {
    VueGoodshareTwitter,
    VueGoodshareFacebook,
    VueGoodshare
  }
};
</script>

<style>
</style>
