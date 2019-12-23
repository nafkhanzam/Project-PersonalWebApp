<script>
  import { getBlog } from "../utils";
  import NotFound from "./notFound.svelte";
  export let blog;

  let message = `Blog "${blog}" can't be found!`;

  let contentPromise;
  function updateContent() {
    contentPromise = (async function() {
      return await getBlog(blog);
    })();
  }
  updateContent();
</script>

{#await contentPromise}
  <p>Loading...</p>
{:then htmlResult}
  {#if htmlResult === null}
    <NotFound {message} />
  {:else}
    {@html htmlResult}
  {/if}
{/await}