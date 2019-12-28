<script>
  let value = "";

  function handleSend() {
    alert("You're in a bruh moment rn..");
  }

  $: isBruhMoment = () => {
    return value.toLowerCase().includes("bruh");
  };
</script>

<style>
  button[disabled] {
    pointer-events: none;
  }
  textarea {
    resize: none;
  }
</style>

<footer class="page-footer font-small blue pt-4 bg-dark text-white mt-5">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5>
          <u>Contact me!</u>
        </h5>
        Phone: +6285815805174
        <br />
        Email: nafkhanalzamzami@gmail.com
        <br />
        LINE: embozam
      </div>
      <div>
        <textarea class="form-control" bind:value />
        <button
          type="button"
          class="btn btn-primary my-3"
          on:click={handleSend}
          disabled={!isBruhMoment() ? 'disabled' : null}>
          {isBruhMoment() ? 'bruh moment' : 'not bruh moment'}
        </button>
      </div>
    </div>
  </div>
</footer>
