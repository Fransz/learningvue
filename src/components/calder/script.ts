import {
  PropType,
  watch,
  computed,
  defineEmits,
  defineComponent,
  ref,
} from 'vue';
import { useDate } from 'vuetify';

export default defineComponent({
  name: 'ErkeninngItem',

  props: {
    code: { type: String as PropType<string>, required: true },
    description: { type: String as PropType<string>, required: true },
    startDate: { type: Date as PropType<Date>, required: true },
    endDate: { type: Object as PropType<Date | null>, required: true },
  },

  setup(props) {
    const startSelected = ref(props.startDate);
    const endSelected = ref<Date | null>(props.endDate);
    const startDateMenuOpen = ref<boolean>(false);
    const endDateMenuOpen = ref<boolean>(false);
    const formRef = ref<HTMLFormElement | null>(null);

    // const emit = defineEmits('update:modelValue');

    const startFormatted = computed(() => {
      return startSelected ? startSelected.value.toLocaleDateString() : '';
    });

    // watch(props.startDate, (newDate) => (startSelected.value = newDate));

    const endFormatted = computed(() => {
      return endSelected.value
        ? endSelected.value.toLocaleDateString()
        : 'onbeperkt';
    });
    const onClearEnd = () => (endSelected.value = null);

    const rules = {
      startNaEind: () => {
        formRef.value && formRef.value.resetValidation();
        return (
          endSelected.value === null ||
          startSelected.value < endSelected.value ||
          'De startdatum moet voor de einddatum liggen.'
        );
      },
      eindInToekomst: () => {
        formRef.value && formRef.value.resetValidation();
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return (
          endSelected.value === null ||
          endSelected.value > now ||
          'De einddatum moet in de toekomst liggen.'
        );
      },
      eindNaStart: () => {
        formRef.value && formRef.value.resetValidation();
        return (
          endSelected.value === null ||
          startSelected.value < endSelected.value ||
          'De einddatum moet na de startdatum liggen.'
        );
      },
    };

    // watch(props.endDate, (newDate) => (endSelected.value = newDate));

    // watch(startSelected, (newDate) => emit('update:modelValue', newDate));
    return {
      endSelected,
      endFormatted,
      endDateMenuOpen,
      formRef,
      onClearEnd,
      rules,
      startSelected,
      startFormatted,
      startDateMenuOpen,
    };
  },
});
