/* eslint-disable ts-exports/unused-exports */

import Archive from "./Archive.svelte";
import "./common";
// import { dateToString, stringToDate } from "./date";
import memes from "./memes.json";

const archive = new Archive({
  target: document.body,
  props: {
    memes,
    // dateToString,
    // stringToDate,
  },
});

export default archive;
