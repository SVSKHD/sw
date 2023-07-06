<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
    <meta name="keywords" :content="keywords" />
  </Head>
</template>

<script>
import { Head } from "@vueuse/head";
export default {
  name: "SigmaSeo",
  components: {
    Head,
  },
  props: ["title", "description", "keywords", "keyphrases"],
};
</script>
