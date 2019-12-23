<script>
  export let message = `Page [${document.URL}] not found!\nI'm sure it should be available!`;
</script>

<h1>Page not found!</h1><br />
<textarea class="form-control mb-3" rows="3" value={message} />
<button type="button" class="btn btn-danger">Send report!</button>
