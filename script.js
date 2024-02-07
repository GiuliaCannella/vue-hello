// controllo vue
const { createApp } = Vue;

// vue
const app = createApp({
  data() {
    return {
      foto:'img/benvenuto.jpg',
      text: "",
      traccia: "inserisci un messaggio",
    };
  },
});

// stampa vue
app.mount("#app");
