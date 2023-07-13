<template>
  <q-layout view="hHh lpR fFf">
    <SigmaHeader
      @toggle-drawer="toggleLeftDrawer"
      @toggle-theme="toggleTheme"
      :icon="icon"
    />
    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <SigmaFooter /> -->
  </q-layout>
</template>

<script>
import { ref, watch } from "vue";
// import SigmaFooter from "./Footer.vue";
import SigmaHeader from "./Header.vue";
export default {
  components: {
    // SigmaFooter,
    SigmaHeader,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const iconStatus = ref(false);
    const icon = ref("light_mode");

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };
    const toggleTheme = () => {
      iconStatus.value = !iconStatus.value;
    };
    watch(iconStatus, () => {
      iconStatus.value
        ? (icon.value = "light_mode")
        : (icon.value = "nightlight");
    });
    return {
      //variables
      leftDrawerOpen,
      iconStatus,
      icon,
      //functions
      toggleLeftDrawer,
      toggleTheme,
    };
  },
};
</script>
