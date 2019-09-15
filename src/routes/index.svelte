<style>
  .word-list {
    display: grid;
    grid-column-gap: 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

</style>

<script>
  import words from '../words';
  import { onMount } from 'svelte';

  let mounted = false;
  let matches = [];
  let hints = [];
  let letters = '';
  $: disabled = (matches.length === 0) ? 'disabled' : '';
  $: distinct_letters = distinctLetters(letters);

  function resetAll() {
    hints = [];

    if (letters.length) {
      const re = new RegExp(`^[${letters}]*${letters[0]}[${letters}]*$`, 'i');

      matches = words.filter((word) => {
        if (word.length <= 3) {
          return false;
        }
        return re.test(word);
      });
    } else {
      matches = [];
    }
  }

  function showOneWord() {
    const next_hint = matches.shift();
    matches = matches;
    hints = hints.concat([next_hint]);
  }

  function showAllWords() {
    hints = hints.concat(matches);
    matches = [];
  }

  function distinctLetters(letters) {
    const uniq = {};
    letters.split('').forEach((letter) => {
      if (!letter.match(/^[a-z]$/i)) {
        return;
      }
      uniq[letter.toUpperCase()] = true;
    });


    const distinct = Object.keys(uniq);
    const required = distinct.shift();

    return [required].concat(distinct.sort());
  }

  onMount(() => {
    resetAll();

    mounted = true;
  });
</script>

<svelte:head>
	<title>Spelling Bee cheater</title>
</svelte:head>

<h2>Spelling Bee Cheater</h2>
<p>A simple tool to help with (or cheat at) <a href="https://www.nytimes.com/puzzles/spelling-bee">NYT's spelling bee puzzle</a>.</p>
<p>Built to play with <a href="https://sapper.svelte.dev">Sapper</a>. View the <a href="https://github.com/elliotf/spelling-bee-cheater">source code</a></p>

{#if mounted}
  <p>Enter letters for which you'd like hints. The first letter will be required to exist in all words</p>
  <input bind:value={letters} type="text" on:keyup={resetAll}/>
  <button {disabled} on:click={showOneWord}>Show one word</button>
  <button {disabled} on:click={showAllWords}>Show all words</button>
  <br />
  {#if letters.length}
    <p>{hints.length + matches.length} words found for letters "{distinct_letters}"</p>
  {/if}
  <br />
  <div class="word-list">
  {#each hints as hint, i}
    <div>{i + 1}. {hint}</div>
  {/each}
  </div>
{:else}
  <h2>Loading...</h2>
{/if}
