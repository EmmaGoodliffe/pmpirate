<script lang="ts">
  import {
    compoundDate,
    dateToString,
    getToday,
    separateDate,
  } from "../../functions/src/date";
  import type { Db } from "../../functions/src/types";
  import { firstMemeDate, getMemeOtd, submitMeme } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";
  import Meme from "./Meme.svelte";
  import Switch from "./Switch.svelte";

  export let db: Db;

  const today = getToday();
  const [currentDate, currentMonth, currentYear] = separateDate(today);
  const firstMemePromise = getMemeOtd(db, firstMemeDate);

  let chosenDate: Date | null = null;
  let files: FileList;
  let name = "";
  let email = "";
  let found = false;
  let isLoading = false;
  let message = "";

  const getOptions = async () => {
    const optionSeparator = {
      value: null,
      text: "".padStart(10, "-"),
      available: false,
    };
    const options = (
      await Promise.all(
        new Array(11).fill(0).map(async (_x, i) => {
          const date = compoundDate(
            currentDate + i - 2,
            currentMonth,
            currentYear,
          );
          const option = {
            value: date,
            text: dateToString(date),
            available: !(await getMemeOtd(db, date)),
          };
          return dateToString(option.value) === dateToString(today)
            ? [optionSeparator, option, optionSeparator]
            : option;
        }),
      )
    ).flat();
    chosenDate =
      options.filter(
        option => option.value && option.value >= today && option.available,
      )[0]?.value ?? null;
    return options;
  };

  const optionsPromise = getOptions();

  const schedule = async (e: Event) => {
    e.preventDefault();
    message = "";
    isLoading = true;
    if (!files || !files[0]) {
      message = "Invalid image";
      isLoading = false;
      return;
    }
    const buffer = await files[0].arrayBuffer();
    const fileBase64 = window.btoa(
      String.fromCharCode(...new Uint8Array(buffer)),
    );
    const meme = {
      name,
      email,
      fileBase64,
      found,
    };
    if (!chosenDate) {
      message = "Invalid date";
      isLoading = false;
      return;
    }
    try {
      const response = await submitMeme(chosenDate, meme);
      message = response.data.message;
      isLoading = false;
    } catch (err) {
      isLoading = false;
      if (err && typeof err === "object") {
        const { code } = err as { code: string };
        if (
          code === "functions/invalid-argument" ||
          code === "functions/out-of-range"
        ) {
          message = "That date is unavailable";
          console.warn(err);
          return;
        }
      }
      message = "Something went wrong";
      throw err;
    }
  };

  $: preview = files && files[0] ? URL.createObjectURL(files[0]) : "";
</script>

<Header />
<main>
  <h2>Schedule a Meme</h2>
  {#await optionsPromise}
    <Loader />
  {:then options}
    <form class="flex flex-col">
      <h3>Select a Date</h3>
      <select class="font-mono" bind:value={chosenDate}>
        {#each options as option}
          <option value={option.value} disabled={!option.available}
            >{option.text}</option
          >
        {/each}
      </select>
      <hr />
      <h3>Select an image</h3>
      <input id="file" type="file" bind:files />
      <hr />
      <h3>Preview image</h3>
      <p>It'll get resized to be 400 by 400 pixels</p>
      {#if preview}
        <Meme url={preview} width={400} />
      {:else}
        <p class="epilogue">Waiting for image</p>
      {/if}
      <hr />
      <h3>Give it a very short name</h3>
      <input id="name" type="text" placeholder="Name" bind:value={name} />
      <label for="name">E.g. this one is called "mugs"</label>
      {#await firstMemePromise}
        <Loader />
      {:then firstMeme}
        <Meme url={firstMeme?.url} />
      {/await}
      <hr />
      <h3>Credit</h3>
      <label class="mb-2" for="email">Who are you?</label>
      <input
        id="email"
        type="email"
        placeholder="School email"
        bind:value={email}
      />
      <div class="flex">
        <span
          class="mr-2"
          class:text-dark-fg={found}
          on:click={() => (found = false)}>I made it 🧑‍🎨</span
        >
        <Switch state={found} onUpdate={state => (found = state)} />
        <span
          class="ml-2"
          class:text-dark-fg={!found}
          on:click={() => (found = true)}>🏴‍☠️ I stole it</span
        >
      </div>
      {#if isLoading}
        <Loader />
      {:else}
        <button class="btn px-4 py-2" on:click={schedule}>Schedule</button>
      {/if}
    </form>
    <p class="epilogue">{message}</p>
  {/await}
</main>
<footer />
