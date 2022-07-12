import "./common";
import Home from "./Home.svelte";
import memes from "./memes.json";

const home = new Home({
  target: document.body,
  props: {
    memes,
  },
});

export default home;
