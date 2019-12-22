<script>
  import { getBlog } from "../utils";
  export let blog;

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
  {@html htmlResult}
{/await}