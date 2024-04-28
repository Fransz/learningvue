<script lang="ts">
  import { PropType, defineComponent } from 'vue';
  export default defineComponent({
    name: 'FancyList',
    props: {
      url: { type: String as PropType<string>, required: true },
      perPage: { type: Number as PropType<number>, required: true },
    },
    setup(props) {
      // Do some thing with url and perPage;
      console.log(`Props url: ${props.url}`);
      console.log(`Props url: ${props.perPage}`);
      const items = [
        { tile: 'Book1', author: 'Author1' },
        { tile: 'Book2', author: 'Author2' },
        { tile: 'Book3', author: 'Author3' },
        { tile: 'Book4', author: 'Author4' },
        { tile: 'Book5', author: 'Author5' },
      ];

      return {
        items,
      };
    },
  });
</script>

<!--
  With the v-bind we pass an object as the props; All keys become a prop;
  @see https://vuejs.org/guide/components/props.html#prop-passing-details
-->
<template>
  <ul>
    <li v-for="item of items">
      <slot
        name="item"
        v-bind="item"
      />
    </li>
  </ul>
</template>
