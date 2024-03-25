<script setup lang="ts">
  /*
    Setting up bootstrap 5 with vue 3.
    @see https://stackoverflow.com/questions/65547199/using-bootstrap-5-with-vue-3

    Andere oplossingen: [bootstrap-vue-next](https://bootstrap-vue-next.github.io)
    - Ze zeggen zelf dat ze een alpha versie zijn.
    - Voor de setup moet je vite.config.js aanpassen, en je main script.
  */
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'

  import type { Ref } from 'vue'
  import { ref } from 'vue'

  interface Crebo {
    naam: string
    erkenningen: Erkenning[]
  }
  interface Erkenning {
    naam: string
  }

  const erkenning1 = { naam: 'erkenning1' }
  const erkenning2 = { naam: 'erkenning2' }
  const erkenning3 = { naam: 'erkenning3' }
  const erkenning4 = { naam: 'erkenning4' }
  const erkenning5 = { naam: 'erkenning4' }
  const erkenning6 = { naam: 'erkenning4' }
  const erkenning7 = { naam: 'erkenning4' }
  const erkenning8 = { naam: 'erkenning4' }
  const erkenning9 = { naam: 'erkenning4' }
  const erkenning10 = { naam: 'erkenning4' }
  const erkenning11 = { naam: 'erkenning4' }
  const erkenning12 = { naam: 'erkenning4' }
  const erkenning13 = { naam: 'erkenning4' }
  const erkenning14 = { naam: 'erkenning4' }
  const erkenning15 = { naam: 'erkenning4' }
  const erkenning16 = { naam: 'erkenning4' }
  const erkenning17 = { naam: 'erkenning4' }
  const erkenning18 = { naam: 'erkenning4' }
  const erkenning19 = { naam: 'erkenning4' }
  const erkenning20 = { naam: 'erkenning4' }
  const erkenning21 = { naam: 'erkenning4' }
  const erkenning22 = { naam: 'erkenning4' }
  const erkenning23 = { naam: 'erkenning4' }
  const erkenning24 = { naam: 'erkenning4' }
  const erkenning25 = { naam: 'erkenning4' }
  const erkenning26 = { naam: 'erkenning4' }
  const erkenning27 = { naam: 'erkenning4' }
  const erkenning28 = { naam: 'erkenning4' }
  const erkenning29 = { naam: 'erkenning4' }

  const creboos: Ref<Crebo[]> = ref([
    {
      naam: 'Crebo1',
      erkenningen: [erkenning1, erkenning2, erkenning3, erkenning4, erkenning5, erkenning6]
    },
    {
      naam: 'Crebo2',
      erkenningen: [erkenning11, erkenning12, erkenning13, erkenning14, erkenning15, erkenning16]
    },
    {
      naam: 'Crebo3',
      erkenningen: [
        erkenning1,
        erkenning2,
        erkenning3,
        erkenning4,
        erkenning5,
        erkenning6,
        erkenning7,
        erkenning8,
        erkenning9,
        erkenning10,
        erkenning11,
        erkenning12,
        erkenning13,
        erkenning14,
        erkenning15,
        erkenning16,
        erkenning17,
        erkenning18,
        erkenning19,
        erkenning20,
        erkenning21,
        erkenning22,
        erkenning23,
        erkenning24,
        erkenning25,
        erkenning26,
        erkenning27,
        erkenning28,
        erkenning29
      ]
    }
  ])
</script>

<template>
  <div id="mainwrapper">
    <h1>Hello we're back</h1>
    <div id="creboAccordion">
      <div v-for="(creboItem, creboIdx) in creboos" :key="creboIdx" class="accordion-item">
        <h2 class="" id="">
          <button
            aria-expanded="false"
            class="accordion-button"
            data-bs-toggle="collapse"
            type="button"
            :aria-controls="`#collapse${creboIdx}`"
            :data-bs-target="`#collapse${creboIdx}`"
          >
            {{ creboItem.naam }}
          </button>
        </h2>
        <div
          aria-labelledby="`collapse${creboIdx}`"
          class="accordion-collapse collapse"
          data-bs-parent="#creboAccordion"
          :id="`collapse${creboIdx}`"
        >
          <div class="erkenning-items accordion-body">
            <div v-for="(erkenningItem, erkenningIdx) of creboItem.erkenningen" :key="erkenningIdx">
              <input
                type="checkbox"
                :id="`erkenning_${creboIdx}_${erkenningIdx}`"
                :value="`${erkenningItem.naam}`"
              />
              <label :for="`erkenning_${creboIdx}_${erkenningIdx}`">{{ erkenningItem.naam }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap';
  $accordion-bg: green;
  $accordion-button-active-bg: tint-color($component-active-bg, 90%);

  #mainwrapper {
    display: flex;
    flex-direction: column;

    h1 {
      color: $accordion-bg;
    }
  }
  #creboAccordion {
    .accordion-item {
      display: flex;
      flex-flow: row nowrap;

      width: 40vw;
      margin: 0.5em 1em;
      border: 1px solid gray;
      padding: 0.5em 1em;

      h2 {
        margin-right: auto;
      }

      .erkenning-items {
        background-color: 'orange';
        display: flex;
        flex-flow: row wrap;

        div {
          display: flex;
          input[type='checkbox'] {
            margin: 0em 0.5em 0em 1em;
          }
        }
      }
    }
  }
</style>
