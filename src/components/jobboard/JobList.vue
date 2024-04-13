<script lang="ts">
  import { PropType, computed } from 'vue';
  import type { Job, OrderedTerm } from './types/Job';
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      jobs: {
        type: Array as PropType<Array<Job>>,
        required: true,
      },
      orderedTerm: {
        type: String as PropType<OrderedTerm>,
        required: true,
      },
    },

    setup(props) {
      const orderedJobs = computed(() =>
        [...props.jobs].sort((i, j) =>
          i[props.orderedTerm] < j[props.orderedTerm]
            ? props.orderedTerm === 'salary'
              ? 1
              : -1
            : props.orderedTerm === 'salary'
              ? -1
              : 1,
        ),
      );
      return { orderedJobs };
    },
  });
</script>

<template>
  <div class="job-list">
    <transition-group
      name="list"
      tag="ul"
    >
      <li
        v-for="job of orderedJobs"
        :key="job.id"
      >
        <h2>{{ job.title }}; {{ job.location }}</h2>
        <div class="salary">
          <img
            src="/jobboard/rupee.svg"
            alt="rupee icon"
          />
          <p>salary: {{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>{{ job.description }}</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<style scoped>
  .job-list {
    max-width: 960px;
    margin: 40px auto;
  }
  .job-list ul {
    padding: 0;
  }
  .job-list li {
    list-style-type: none;
    background: white;
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
  }
  .job-list h2 {
    margin: 0 0 10px;
    text-transform: capitalize;
  }
  .salary {
    display: flex;
  }
  .salary img {
    width: 30px;
  }
  .salary p {
    color: #17bf66;
    font-weight: bold;
    margin: 10px 4px;
  }
  .list-move {
    transition: all 1s;
  }
</style>
