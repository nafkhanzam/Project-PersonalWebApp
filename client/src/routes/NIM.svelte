<script>
  import { onHover } from "../utils";
  import { getNIMData } from "../assets";
  import Error from "./components/Error.svelte";
  import Loading from "./components/Loading.svelte";

  let sortIdx = -1;
  function setLoadmoreHover() {
    onHover(".loadmore", "bg-dark text-white", true);
  }
  setLoadmoreHover();

  const LOCAL_STORAGE_NAME = "nafkhanzam-nim-data";
  const LOCAL_STORAGE_VERSION = "nafkhanzam-nim-version";
  let version = "2019";
  let currVersion = localStorage.getItem(LOCAL_STORAGE_VERSION);
  let data;
  const DEFAULT_MAX = 10;
  let max = DEFAULT_MAX;
  let loading = true;
  let value = "";
  let sortDown = true;

  function getSorter() {
    if (sortIdx === -1) {
      return () => Math.random() - 0.5;
    } else {
      return (a, b) => a[sortIdx].localeCompare(b[sortIdx])*(sortDown ? 1 : -1);
    }
  }
  async function getResultAsync() {
    setLoadmoreHover();
    max = DEFAULT_MAX;
    if (!currVersion || currVersion !== version) {
      localStorage.setItem(LOCAL_STORAGE_NAME, await getNIMData());
      localStorage.setItem(LOCAL_STORAGE_VERSION, version);
      currVersion = version;
    }
    data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
    const lowerCaseValue = value.toLowerCase();
    if (!lowerCaseValue) {
      return data.sort(getSorter());
    } else {
      return data
        .filter(student => {
          for (const val of lowerCaseValue.split(" ")) {
            if (
              !(isNaN(val)
                ? student[0].toLowerCase().includes(val)
                : student[1].includes(val) ||
                  (student[2] && student[2].includes(val)))
            ) {
              return false;
            }
          }
          return true;
        })
        .sort(getSorter());
    }
  }
  let resPromise;
  function updateResult(sort) {
    if (sort === sortIdx && sort !== -1) {
      sortDown = !sortDown;
    } else if (sort !== sortIdx) {
      sortDown = true;
    }
    if (typeof sort === "number" && sort >= -1 && sort <= 2) {
      sortIdx = sort;
    }
    resPromise = getResultAsync();
  }
  updateResult();

  function getSortSymbol(idx) {
    return sortIdx === idx ? sortDown ? "↓" : "↑" : "";
  }
</script>

<h1>ITB NIM Finder (ver. {version})</h1>
<input type="text" class="form-control" bind:value on:input={updateResult} />
<div class="mt-3">
  {#if resPromise}
    {#await resPromise}
      <Loading />
    {:then res}
      {#if res}
        <table class="table">
          <thead>
            <tr>
              <th style="width: 15%" scope="col">
                <a href="javascript:void(0)" on:click={() => updateResult(-1)}>
                  #
                </a>
              </th>
              <th style="width: 45%" scope="col">
                <a href="javascript:void(0)" on:click={() => updateResult(0)}>
                  Name {getSortSymbol(0)}
                </a>
              </th>
              <th style="width: 20%" scope="col">
                <a href="javascript:void(0)" on:click={() => updateResult(1)}>
                  NIM TPB {getSortSymbol(1)}
                </a>
              </th>
              <th style="width: 20%" scope="col">
                <a href="javascript:void(0)" on:click={() => updateResult(2)}>
                  NIM {getSortSymbol(2)}
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {#each res.slice(0, max) as student, idx}
              <tr>
                <th style="width: 15%" scope="row">{idx + 1}</th>
                <td style="width: 45%">{student[0]}</td>
                <td style="width: 20%">{student[1]}</td>
                <td style="width: 20%">{student[2]}</td>
              </tr>
            {/each}
            {#if res.length > max}
              <tr class="loadmore" on:click={() => (max += 10)}>
                <th scope="row">...</th>
                <td>Load more...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            {/if}
          </tbody>
        </table>
      {/if}
    {:catch err}
      <Error {err} />
    {/await}
  {:else}
    <Loading />
  {/if}
</div>
