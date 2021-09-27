<h1>PM Pirate</h1>
<div class="flex flex-col sm:flex-row">
  <span class="flex-1 py-2"><a href="./pdf/Further Mech.pdf">Further Mech</a></span>
  <span class="flex-1 py-2"><a href="./pdf/Further Pure Year 1.pdf">Further Pure Year 1</a></span>
  <span class="flex-1 py-2"><a href="./pdf/Further Stats.pdf">Further Stats</a>
  </span>
</div>

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
    measurementId: "G-19MDLJEYQG"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
