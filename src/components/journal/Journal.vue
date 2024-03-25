<script setup lang="ts">
  import '@/assets/journal/journal.css'
  import TheHeader from '@/components/journal/TheHeader.vue'
  import EntryEditor from '@/components/journal/EntryEditor.vue'
  import EntryCard from '@/components/journal/EntryCard.vue'

  import type User from '@/components/journal/types/User.ts'
  import type Entry from '@/components/journal/types/Entry.ts'

  import { userInjectionKey } from '@/components/journal/injectionkeys'
  import { provide, reactive } from 'vue'

  const user: User = reactive({
    id: 1,
    name: 'Frans Jaspers',
    settings: []
  })
  provide(userInjectionKey, user)

  const entries = reactive<Entry[]>([] as Entry[])

  const handleCreateEntry = (entry: Entry) => {
    entries.unshift(entry)
  }
</script>

<template>
  <main id="journal" class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li v-for="entry of entries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
