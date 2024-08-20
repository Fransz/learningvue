<script lang="ts">
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'HelloGreeter',
    setup() {
      const greeting = ref<string>('test');

      return {
        greeting,
      };
    },
  });
</script>

<template>
  <div id="wrapper">
    <h1>{{ greeting }}</h1>
    <v-combobox
      v-model="greeting"
      label="greeting"
      :items="['world', 'welt', 'wereld']">
    </v-combobox>
  </div>
</template>

<style lang="scss">
  #combobox {
    width: 10em;
  }
</style>
