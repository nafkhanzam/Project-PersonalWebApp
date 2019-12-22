<script>
  let value = "Halo camcam!";

  function handleSend() {
    
  }
</script>

<footer class="page-footer font-small blue pt-4 bg-dark text-white mt-5">
  <div class="container-fluid text-center text-md-left">
    <div class="text-center py-3">ini footer btw</div>
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5><u>Contact me!</u></h5>
        Phone: +6285815805174<br />
        Email: nafkhanalzamzami@gmail.com
      </div>
      <div>
        <textarea class="form-control" bind:value={value} />
        <button type="button" class="btn btn-primary my-3" on:click={handleSend}>Send</button>
      </div>
    </div>
  </div>
</footer>
