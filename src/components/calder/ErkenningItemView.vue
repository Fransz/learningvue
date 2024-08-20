<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ErkenningItem from './ErkenningItem.vue';

  interface Item {
    code: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
  }
  const arr1: Item[] = [
    {
      code: 'ANA-B1-P1-W1',
      startDate: new Date(),
      endDate: new Date('2024-05-30'),
      description: 'Bereidt Analyses voor - zorgt voor materialen.',
    },
    {
      code: 'ANA-B1-P1-W2',
      startDate: new Date(),
      endDate: new Date('2024-05-30'),
      description: 'Bereidt Analyses voor - zorgt voor materialen.',
    },
    {
      code: 'ANA-B1-P1-W3',
      startDate: new Date(),
      endDate: new Date('2024-05-30'),
      description: 'Bereidt Analyses voor - zorgt voor materialen.',
    },
  ];

  const arr2: Item[] = [
    {
      code: 'BMB-B1-P1-W1',
      startDate: new Date(),
      endDate: new Date('2024-05-30'),
      description: 'Mengt materialen',
    },
    {
      code: 'BMB-B1-P1-W2',
      startDate: new Date(),
      endDate: new Date('2024-05-30'),
      description: 'Mengt materialen',
    },
    {
      code: 'BMB-B1-P1-W3',
      startDate: new Date(),
      endDate: new Date('2024-05-30'),
      description: 'Mengt materialen',
    },
  ];

  export default defineComponent({
    components: { ErkenningItem },
    setup() {
      const nietToegekendArray = ref<Item[]>(arr1);
      const toegekendArray = ref<Item[]>(arr2);

      const sDate = ref<Date>(arr1[0].startDate);
      return {
        nietToegekendArray,
        toegekendArray,
        sDate,
      };
    },
  });
</script>
<template>
  <div>StartDate: {{ nietToegekendArray[0].startDate }}</div>
  <ErkenningItem
    :model-value="sDate"
    :end-date="nietToegekendArray[0].endDate"
    :code="nietToegekendArray[0].code"
    :description="nietToegekendArray[0].description" />
</template>
