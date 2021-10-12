import App from "./App.svelte";
import memes from "./memes.json"

const app = new App({
  target: document.body,
  props: {
    memes
  },
});

export default app;
