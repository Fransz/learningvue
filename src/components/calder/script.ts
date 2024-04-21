import { PropType, defineComponent, reactive, ref } from 'vue';
import { useDate } from 'vuetify';

export default defineComponent({
  name: 'ErkeninngItem',

  props: {
    code: { type: String as PropType<string>, required: true },
    description: { type: String as PropType<string>, required: true },
    startDate: { type: Date as PropType<Date>, required: true },
    endDate: { type: Object as PropType<Date>, required: true },
  },

  setup(props) {
    const sDate = reactive(props.startDate);
    const startDateMenuOpen = ref(false);
    return {
      sDate,
      startDateMenuOpen,
    };
  },
});
