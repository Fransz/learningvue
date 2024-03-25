<template>
  <hr />
  <div class="chapter3">
    <h1 class="header">{{ msg }}</h1>
    <h1 class="header">({{ lengthMsg }}){{ reverseMsg }}</h1>
    <input v-model="msg" type="text" placeholder="Enter your text">
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ChapterThree',

    setup() { },

    data() {
      return {
        msg: "I'm chaper 3's vue component"
      }
    },

    computed: {
      reverseMsg(): string {
        return this.msg.split('').reverse().join('')
      },
      lengthMsg(): string {
        return this.reverseMsg.length;
      },

    watch: {
      msg(oldValue: string, newValue: string) {
      console.log(oldValue);
        this.length = newValue.length
      }
    },
    },
  })
</script>

<style lang="scss">
  .chapter3 {
    h1 { font-size:24px; color:orange;}
  }

  hr {
    height:6px;
    width: 100%;
    color:red;
    background-color:red;
  }
  .header {
    font-size: 16px;
  }
</style>
