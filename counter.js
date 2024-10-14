const app = Vue.createApp({
  data() {
    return {
      count: 0,
      name:'kuns rudal'
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

app.mount("#app");
