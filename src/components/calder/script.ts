import { PropType, watch, computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ErkeninngItem',

  props: {
    code: { type: String as PropType<string>, required: true },
    description: { type: String as PropType<string>, required: true },
    modelValue: { type: Date as PropType<Date>, required: true },
    endDate: { type: [Object, null] as PropType<Date | null>, required: true },
  },

  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const startSelected = ref<Date>(props.modelValue);
    const endSelected = ref<Date | null>(props.endDate);
    const startDateMenuOpen = ref<boolean>(false);
    const endDateMenuOpen = ref<boolean>(false);
    const formRef = ref<HTMLFormElement | null>(null);

    const items = [
      { title: 'title1', value: 'value1' },
      { props: { title: 'sbb', disabled: true } },
      { title: 'title2', value: 'value2' },
      { title: 'title3', value: 'value3' },
    ];
    const selectItems = ref(items);
    const selectModel = ref<string>('Tada');

    const startFormatted = computed(() => {
      return startSelected.value
        ? startSelected.value.toLocaleDateString()
        : '';
    });

    watch(
      () => props.modelValue,
      (newDate) => (startSelected.value = newDate),
    );

    watch(
      () => startSelected,
      (newDate) => emit('update:modelValue', newDate),
    );

    const endFormatted = computed(() => {
      return endSelected.value
        ? endSelected.value.toLocaleDateString()
        : 'onbeperkt';
    });
    const onClearEnd = () => (endSelected.value = null);
    // watch(props.endDate, (newDate) => (endSelected.value = newDate));

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
      selectItems,
      selectModel,
    };
  },
});
