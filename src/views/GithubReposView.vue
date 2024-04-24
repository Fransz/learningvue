<script lang="ts">
  import { defineComponent } from 'vue';
  import GithubRepos from '../components/GithubRepos.vue';
  export default defineComponent({
    components: {
      GithubRepos,
    },
    setup() {
      return {};
    },
  });
</script>
<template>
  <div class="github-repos">
    <h1>GithubRepos</h1>
    <GithubRepos />
  </div>
</template>

<style></style>
