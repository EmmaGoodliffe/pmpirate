import { db } from "../common";
import App from "../components/Index.svelte";

const app = new App({
  target: document.body,
  props: {
    db,
  },
});

export default app;
