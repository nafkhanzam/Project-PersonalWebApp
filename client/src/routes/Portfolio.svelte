<script>
  async function downloadCV() {
    return await fetch("/assets/CV v1.1.4.pdf");
  }
</script>

<a href="#!" on:click={downloadCV}>Download CV</a>
