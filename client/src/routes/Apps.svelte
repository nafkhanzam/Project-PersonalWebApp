<script>
  import { onHover } from "../utils";
  import Calculator from "./apps/Calculator.svelte";
  import Loading from "./components/Loading.svelte";

  onHover(".card", "shadow-lg bg-dark");

  let appList = [
    {
      title: "Calculator",
      desc: "It's just a calculator, but it'll give 2 results, javascript's and my eval implementation's result. If you able to find a bug (different result), you'll get a reward.",
      url: "calculator",
      img: "",
      app: Calculator,
    },
    {
      title: "The Sims Simulator",
      desc: "<0,10,0> -> <15,15,15> | You know what to do.",
      // url: "sims_simulator",
    }
  ]
</script>

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>

<h1 class="text-center">Apps</h1>
<hr />
<div class="d-flex flex-wrap justify-content-center">
  {#each appList as item, i}
    <div class="card text-center mx-2 my-2" style="width: 18rem;">
      <div class="card-header">
        <img class="rounded" src={item.img || `https://picsum.photos/352/240?${(new Date()).getTime() + i}`} alt={item.alt || item.title} />
      </div>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.desc}</p>
        {#if item.url}
          <a href={"/app/" + item.url} class="stretched-link">{""}</a>
        {/if}
      </div>
      <div class="card-footer text-muted">
        {#if item.url}
          {item.version || "v0.1"}
        {:else}
          <div style="color: darkorange;">Under construction</div>
        {/if}
      </div>
    </div>
  {/each}
</div>
