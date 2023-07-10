<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleDrawerEmits" />
      <q-btn :icon="icon" flat @click="toggleThemeEmits" />
      <q-toolbar-title> Sigma-Wings </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "SigmaHead",
  emits: ["toggleDrawer", "toggleTheme"],
  props: ["icon"],
  setup(props, context) {
    const toggleDrawerEmits = (e) => {
      context.emit("toggleDrawer", e.target.value);
    };
    const toggleThemeEmits = (e) => {
      context.emit("toggleTheme", e.target.value);
    };
    return {
      toggleDrawerEmits,
      toggleThemeEmits,
    };
  },
};
</script>
