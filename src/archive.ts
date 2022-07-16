import Archive from "./Archive.svelte";
import { db } from "./common";

const archive = new Archive({
  target: document.body,
  props: {
    db,
  },
});

export default archive;
