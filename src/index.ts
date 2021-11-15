import App from "./App.svelte";
import "./common";
import { dateToString } from "./date";
import memes from "./memes.json";

const app = new App({
  target: document.body,
  props: {
    memes,
    dateToString,
  },
});

export default app;
