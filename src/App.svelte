<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

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
  const analytics = getAnalytics(app);
</script>

<header class="my-8 flex">
  <img
    class="inline-block"
    style="height: 2.5em;"
    src="./favicon.png"
    alt="Logo"
  />
  <h1 class="text-3xl font-bold inline-block ml-4">Physics & Maths Pirate</h1>
</header>
<div class="flex flex-col sm:flex-row">
  <span class="flex-1 py-2"
    ><a href="./pdf/Further Mech.pdf">Further Mech</a></span
  >
  <span class="flex-1 py-2"
    ><a href="./pdf/Further Pure Year 1.pdf">Further Pure Year 1</a></span
  >
  <span class="flex-1 py-2"
    ><a href="./pdf/Further Stats.pdf">Further Stats</a></span
  >
</div>
<p class="mt-12">
  The pure and stats are dodgy older versions but I'll fix them soon.
</p>
