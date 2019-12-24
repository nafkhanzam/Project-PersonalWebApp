<script>
  import NotFound from "./notFound.svelte";
  import Calculator from "./apps/Calculator.svelte";

  export let appName;
  appName = appName.toLowerCase();
  let message = `App "${appName}" can't be found!`;
  let appMap = {
    calculator: Calculator
  };
</script>

<a href="/app">{'<'} Back to app list</a>
<br />
{#if appMap[appName]}
  <svelte:component this={appMap[appName]} />
{:else}
  <NotFound {message} />
{/if}
