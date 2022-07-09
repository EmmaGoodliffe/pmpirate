import "./common";
import { dateToString } from "./date";
import Home from "./Home.svelte";
import memes from "./memes.json";

const home = new Home({
  target: document.body,
  props: {
    memes,
    dateToString,
  },
});

export default home;
