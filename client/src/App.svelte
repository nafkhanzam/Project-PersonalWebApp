<script>
  import { Router, Route, Link, navaidHash } from "svelte-navaid";
  import index from "./routes/index.svelte";
  import notFound from "./routes/notFound.svelte";

  let navigate;
</script>

<Router bind:navigate>
  <Route path="/home" component={index} />
  <Route path="/">{navigate("/home")}</Route>
  <Route component={notFound} />
</Router>