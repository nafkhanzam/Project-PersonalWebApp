<script>
  import NotFound from "./notFound.svelte";
  import Calculator from "./apps/Calculator.svelte";
  import routes from "../routes";

  export let appName;
  appName = appName.toLowerCase();
  let message = `App "${appName}" can't be found!`;
  let appMap = {
    calculator: Calculator
  };
</script>

<a href={routes.apps}>{'<'} Back to app list</a>
<br />
{#if appMap[appName]}
  <svelte:component this={appMap[appName]} />
{:else}
  <NotFound {message} />
{/if}
