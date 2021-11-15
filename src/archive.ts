/* eslint-disable ts-exports/unused-exports */

import Archive from "./Archive.svelte";
import "./common";
import memes from "./memes.json";

const archive = new Archive({
  target: document.body,
  props: {
    memes,
  },
});

export default archive;
