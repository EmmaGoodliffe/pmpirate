import { db } from "../common";
import Schedule from "../components/Schedule.svelte";

const schedule = new Schedule({
  target: document.body,
  props: {
    db,
  },
});

export default schedule;
