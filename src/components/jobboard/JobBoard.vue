<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import JobList from './JobList.vue';
  import { Job, OrderedTerm } from './types/Job';
  import { reactive } from 'vue';

  export default defineComponent({
    components: { JobList },
    setup() {
      const jobs = reactive<Array<Job>>([
        {
          id: 1,
          title: 'software engineer',
          location: 'meander, Arnhem',
          salary: 30000,
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        },
        {
          id: 2,
          title: 'stagemanager',
          location: 'velperbinnensingel, Arnhem',
          salary: 25000,
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        },
        {
          id: 3,
          title: 'teacher',
          location: 'dijksestraat, Didam',
          salary: 40000,
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        },
        {
          id: 4,
          title: 'facilty employee',
          location: 'molenkamp, Oldenzaal',
          salary: 20000,
          description:
            'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        },
      ]);

      let orderedTerm = ref<OrderedTerm>('title');
      const handleClick = (term: OrderedTerm) => {
        orderedTerm.value = term;
      };

      return { jobs, orderedTerm, handleClick };
    },
  });
</script>

<template>
  <header>
    <div class="title">
      <img
        src="/jobboard/heart.svg"
        alt="site logo"
      />
      <h1>JobBoard</h1>
    </div>
    <div class="order">
      <button
        class="order-button"
        @click="handleClick('title')"
      >
        title
      </button>
      <button
        class="order-button"
        @click="handleClick('location')"
      >
        location
      </button>
      <button
        class="order-button"
        @click="handleClick('salary')"
      >
        salary
      </button>
    </div>
  </header>
  <JobList
    :ordered-term="orderedTerm"
    :jobs="jobs"
  />
</template>

<style scoped>
  header {
    text-align: center;
  }

  header .order {
    margin-top: 20px;
  }

  button {
    margin: 0 10px;
    color: #1195c9;
    border: 3px solid #1195c9;
    background: #d5f0ff;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  header .title {
    display: flex;
    justify-content: center;
  }

  header img {
    width: 60px;
    margin-right: 20px;
  }

  header h1 {
    font-size: 3em;
  }
</style>
