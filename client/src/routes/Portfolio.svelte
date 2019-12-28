<script>
  import axios from "axios";
  import { getCVBlob } from "../assets";

  let downloading = false;
  let hover = false;
  function handleDownloadCV() {
    downloading = true;
    getCVBlob().then(data => {
      if (!data) {
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
