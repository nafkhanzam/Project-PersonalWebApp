<script>
  import { getBlog, toPrettyDate } from "../utils";
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

<a href="/blog">{"<"} Back to blog list</a>
{#await contentPromise}
  <p>Loading...</p>
{:then result}
  {#if !result || result.length < 2 || !result[0] || !result[1]}
    <NotFound {message} />
  {:else}
    <h1>{result[0].title}</h1>
    Posted {toPrettyDate(result[0].date)} by <u>{result[0].author || "nafkhanzam"}</u>
    <hr />
    {@html result[1]}
  {/if}
{/await}