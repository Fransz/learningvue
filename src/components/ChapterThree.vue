<script lang="ts">
  interface User {
    name: string;
    age: number;
  }

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ChapterThree',

    setup() {},

    data(): { msg: string; user: User } {
      return {
        msg: "I'm chaper 3's vue component",
        user: { name: 'Frans', age: 61 },
      };
    },

    // computed returns a reactive value, dependent on another reactive value.
    computed: {
      reverseMsg(): string {
        return this.msg.split('').reverse().join('');
      },
      lengthMsg(): number {
        return this.reverseMsg.length;
      },
    },

    // watchers react on reactive values, but do not return a reactive value.
    watch: {
      msg(oldValue: string, newValue: string) {
        console.log(oldValue);
        this.user.age = 62;
      },

      // Watchers can be objects with additional attributes: handler, deep, immediate, flush
      user: {
        handler(oldValue, newValue) {
          console.log(
            `User: user ${oldValue.name} changed. We ${newValue ? 'do' : 'dont'} have a new value`,
          );
        },
        deep: true,
        immediate: true,
      },

      // Its better to watch the deeply nested attribute directly.
      'user.age': {
        handler(oldValue, newValue) {
          console.log(
            `User: someone had his birthday, he's now ${newValue} years old`,
          );
        },
      },
    },
  });
</script>

<template>
  <hr />
  <div class="chapter3">
    <div>
      <label for="msg-input">Enter your text</label>
      <input v-model="msg" type="text" />
    </div>
    <h1 class="header">{{ msg }}</h1>
    <h1 class="header">
      {{ reverseMsg }}<span>({{ lengthMsg }})</span>
    </h1>
  </div>
  <hr />
</template>

<style scoped lang="scss">
  .chapter3 {
    h1 {
      font-size: 16px;
      color: blue;
    }
    span {
      margin-left: 1rem;
    }
    input {
      margin-left: 1rem;
      color: white;
    }
  }

  hr {
    height: 3px;
    width: 100%;
    color: #884444;
    background-color: red;
  }
</style>
