<script>
  import axios from "axios";

  function downloadCV() {
    axios({
      url: '/assets/CV v1.1.4.pdf',
      method: 'GET',
      responseType: 'blob',
      "Cache-Control": "no-cache"
    }).then((response) => {
      if (response.status >= 400 || response.headers["content-type"].includes("html")) {
        alert("File not found! Please contact admin to update it!");
      }
    });
  }
</script>

<a href="#download!" on:click={downloadCV}>Download CV</a>
