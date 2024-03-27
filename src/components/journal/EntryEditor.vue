<script lang="ts" setup>
  import EmojiField from '@/components/journal/EmojiField.vue';
  import ArrowCircleRight from '@/assets/journal/arrow-circle-right.svg';
  import { ref, computed, type Ref, onMounted, inject } from 'vue';

  import type Emoji from '@/components/journal/types/Emoji.ts';
  import type Entry from '@/components/journal/types/Entry.ts';
  import { userInjectionKey } from './injectionkeys';

  /**
   * Data
   */
  const user = inject(userInjectionKey);
  const body: Ref<string> = ref<string>('');
  let emoji = ref<Emoji | null>(null);
  const length = computed<number>(() => body.value.length);

  const maxLength = 280;

  /**
   * Event handlers.
   * Nice demonstration. But we might do this with the maxLength attriute of textarea.
   */
  const handleClick = (e: Event) => {
    const textArea = e.target as HTMLTextAreaElement;
    if (textArea.value.length <= maxLength) {
      body.value = textArea.value;
    } else {
      body.value = textArea.value = textArea.value.substring(0, maxLength);
    }
  };

  const handleSubmit = () => {
    emit('@create', {
      body: body.value,
      emoji: emoji.value,
      userId: 1,
      createdAt: new Date(),
      id: Math.floor(Math.random() * 100),
    });

    body.value = '';
    emoji.value = null;
  };

  /**
   * template refs
   */
  const textarea = ref<HTMLTextAreaElement | null>(null);
  onMounted(() => textarea.value?.focus());

  /**
   * Emits
   */
  const emit = defineEmits<{
    (e: '@create', entry: Entry): void;
  }>();
</script>

<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
      :placeholder="`New entry for user ${user?.name || 'anonymous'}`"
      :value="body"
      ref="textarea"
      @keyup="handleClick"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ length }} / {{ maxLength }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
