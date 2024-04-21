<script lang="ts">
  import { defineComponent } from 'vue';
  import ErkenningItem from './ErkenningItem.vue';

  export default defineComponent({
    components: { ErkenningItem },
    setup() {
      return {};
    },
  });
</script>
<template>
  <ErkenningItem
    code="ANA-B1-P1-W1"
    :startDate="new Date()"
    :endDate="new Date('2024-05-30')"
    description="Bereidt Analyses voor - zorgt voor materialen."
  />
</template>
