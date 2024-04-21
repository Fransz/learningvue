<script lang="ts" setup>
  import DateDisplay from './DateDisplay.vue';
  import UseEmojis from '@/composables/journal/UseEmojis';
  import Entry from './types/Entry';
  const { findEmoji } = UseEmojis();
  import { userInjectionKey } from './injectionkeys';
  import { inject } from 'vue';

  const props = defineProps<{ entry: Entry }>();

  const user = inject(userInjectionKey);
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component
        :is="findEmoji(props.entry.emoji)"
        width="75"
      ></component>
      <div class="entry-text">
        {{ props.entry.body }}
      </div>
    </div>
    <div class="entry-footer">
      <DateDisplay
        :date="new Date()"
        class="mr-2"
      />
      |
      <span class="ml-2">{{ user?.name || 'anonymous' }}</span>
    </div>
  </div>
</template>
