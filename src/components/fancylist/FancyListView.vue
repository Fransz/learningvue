<script lang="ts">
  import { defineComponent } from 'vue';
  import FancyList from './FancyList.vue';

  export default defineComponent({
    components: { FancyList },
    setup() {
      const url = 'https://somedmain.org';
      const perPage = 10;
      return {
        url,
        perPage,
      };
    },
  });
</script>
<template>
  <FancyList
    :per-page="perPage"
    :url="url"
    #item="props"
  >
    {{ props.tile }} {{ props.author }}
  </FancyList>
</template>
