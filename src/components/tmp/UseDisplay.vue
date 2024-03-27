<script setup lang="ts">
  import { ComputedRef } from "vue";
  import { onMounted } from "vue";
  import { useDisplay } from "vuetify";

  onMounted(() => {
    Object.entries(useDisplay().platform.value).forEach(([k, v]) =>
      console.log(`useDisplay.platform[${k}] = ${v}`),
    );
  });
</script>

<template>
  <v-btn>Button</v-btn>
</template>
