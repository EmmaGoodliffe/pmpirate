import { db } from "../common";
import Archive from "../components/Archive.svelte";

const archive = new Archive({
  target: document.body,
  props: {
    db,
  },
});

export default archive;
