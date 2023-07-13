<template>
  <!-- <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleDrawerEmits" />
      <q-btn :icon="icon" flat @click="toggleThemeEmits" />
      <q-toolbar-title> Sigma-Wings </q-toolbar-title>
    </q-toolbar>
  </q-header> -->
  <q-header bordered class="bg-grey-1">
    <q-tabs no-caps class="text-black ">
      <q-route-tab v-for="menu, index of menuItems" :key='index' :to="menu.path" exact replace :label="menu.label"/>
    </q-tabs>
    <!-- <q-toolbar>
      <q-toolbar-title class="text-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>
        Quasar Framework
      </q-toolbar-title>
    </q-toolbar> -->
  </q-header>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SigmaHead",
  emits: ["toggleDrawer", "toggleTheme"],
  props: ["icon"],
  setup(props, context) {
    const menuItems = ref([
      {
        label: 'Home',
        path: '/home'
      },
      {
        label: 'categories',
        path: '/categories'
      },
      {
        label: 'About',
        path: '/about'
      }
    ])

    const toggleDrawerEmits = (e) => {
      context.emit("toggleDrawer", e.target.value);
    };
    const toggleThemeEmits = (e) => {
      context.emit("toggleTheme", e.target.value);
    };
    function navDelay(e, go) {
      e.preventDefault() // we cancel the default navigation

      // console.log('triggering navigation in 2s')
      setTimeout(() => {
        // console.log('navigating as promised 2s ago')
        go()
      }, 2000)
    }

    function navCancel(e) {
      e.preventDefault() // we cancel the default navigation
    }

    function navRedirect(e, go) {
      e.preventDefault() // we cancel the default navigation

      // call this at your convenience
      go({
        to: { query: { tab: '2', noScroll: true } },
        // replace: boolean; default is what the tab is configured with
        // returnRouterError: boolean; default is false
      })
      // .then(vueRouterResult => { /* ... */ })
      // .catch(vueRouterError => {
      //   /* ...will not reach here unless returnRouterError === true */
      // })
    }

    function navPass() { }
    return {
      toggleDrawerEmits,
      toggleThemeEmits,
      navDelay, navCancel, navRedirect, navPass,
      menuItems
    };
  },
};
</script>
