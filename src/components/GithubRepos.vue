<script lang="ts">
  import { defineComponent } from 'vue';
  import { useGithubFetch } from '@/composables/UseGithubFetch';

  export default defineComponent({
    setup() {
      const { loading, error, data: repos } = useGithubFetch('Fransz');
      return {
        repos,
        loading,
      };
    },
  });
</script>

<template>
  <h2>Repos</h2>
  <ul v-if="!loading">
    <li
      v-for="repo in repos"
      :key="repo.id"
    >
      <article>
        <header>
          {{ repo.name }}
        </header>
        <p>{{ repo.description }}</p>
      </article>
    </li>
  </ul>
  <div v-if="loading">loading</div>
</template>
