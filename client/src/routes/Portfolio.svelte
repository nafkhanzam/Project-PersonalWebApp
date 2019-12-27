<script>
  import axios from "axios";
  import { downloadCV } from "../utils";

  let downloading = false;
  let hover = false;
  function handleDownloadCV() {
    downloading = true;
    downloadCV().then(response => {
      if (
        response.status >= 400 ||
        (response.headers["content-type"] &&
          response.headers["content-type"].includes("html"))
      ) {
        alert("File not found! Please contact admin to update it!");
      }
    });
  }
</script>

<style>
  button[disabled] {
    pointer-events: none;
  }
</style>

<button
  type="button"
  class="btn btn-primary"
  on:click={handleDownloadCV}
  disabled={downloading}>
  {downloading ? 'Downloading CV...' : 'Download CV'}
</button>
{#if downloading}
  <a href="javascript:void(0)" on:click={() => (downloading = false)}>Retry</a>
{/if}
