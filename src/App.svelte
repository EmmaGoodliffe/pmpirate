<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

  export let memes: { otd: Record<string, string> };

  const firebaseConfig = {
    apiKey: "AIzaSyDfGaweLVDXcfxJDZ4ztoMoilhU9fv4uXU",
    authDomain: "pmpirate.firebaseapp.com",
    projectId: "pmpirate",
    storageBucket: "pmpirate.appspot.com",
    messagingSenderId: "198590478768",
    appId: "1:198590478768:web:3d10abd6d006c0a0b93e75",
    measurementId: "G-19MDLJEYQG",
  };

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const otdCode = `${year}-${month}-${date}`;
  const otdSrc = `memes/${memes.otd[otdCode]}`;
</script>

<header class="my-8 flex">
  <img
    class="inline-block"
    style="height: 2.5em;"
    src="./favicon.png"
    alt="Logo"
  />
  <h1 class="inline-block ml-4">Physics & Maths Pirate</h1>
</header>
<main>
  <h2>Textbooks</h2>
  <div class="flex flex-col sm:flex-row">
    <span class="flex-1 py-2"
      ><a href="pdf/Further Mech.pdf">Further Mech</a></span
    >
    <span class="flex-1 py-2"
      ><a href="pdf/Further Pure Year 1.pdf">Further Pure Year 1</a></span
    >
    <span class="flex-1 py-2"
      ><a href="pdf/Further Stats.pdf">Further Stats</a></span
    >
  </div>
  <p class="mt-12">
    The pure and stats are dodgy older versions but I'll fix them soon.
  </p>
</main>
<footer class="mt-48 mb-4">
  <h2>Meme of the Day</h2>
  <img
    class="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto"
    src={otdSrc}
    alt="Meme"
  />
</footer>
