<template>
  <div class="home">
    <SigmaSeo title="SigmaWings | The best place for sell your products" description="SigmaWings | we help you in selling products" keywords="hello sigma"/>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SigmaSeo from "../components/Head/Seo.vue"
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    SigmaSeo
  },
};
</script>
