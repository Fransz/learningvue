import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {},
  setup() {
    const show = ref<boolean>(true);
    const toggleShow = () => (show.value = !show.value);
    return {
      show,
      toggleShow,
    };
  },
});
