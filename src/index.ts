import { db } from "./common";
import Home from "./Home.svelte";

const home = new Home({
  target: document.body,
  props: {
    db,
  },
});

export default home;
