<script>
  import { getNIMData, classOnHover } from "../utils";

  function setLoadmoreHover() {
    classOnHover(".loadmore", "bg-dark text-white");
  }
  setLoadmoreHover();

  const LOCAL_STORAGE_NAME = "nafkhanzam-nim-data";
  const LOCAL_STORAGE_VERSION = "nafkhanzam-nim-version";
  let version = "1.0";
  let currVersion = localStorage.getItem(LOCAL_STORAGE_VERSION);
  let data;
  const DEFAULT_MAX = 10;
  let max = DEFAULT_MAX;
  let loading = true;
  let value = "";
  async function getResultAsync() {
    setLoadmoreHover();
    max = DEFAULT_MAX;
    data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
    const lowerCaseValue = value.toLowerCase();
    if (!lowerCaseValue) {
      return data;
    } else {
      return data.filter((student) => {
        for (const val of lowerCaseValue.split(" ")) {
          if (!(isNaN(val) ? student[0].toLowerCase().includes(val)
              : student[1].includes(val) || (student[2] && student[2].includes(val))))
              return false;
        }
        return true;
      });
    }
  }
  let resPromise;
  function updateResult() {
    resPromise = getResultAsync();
  }
  if (!currVersion || currVersion !== version) {
    (async function() {
      localStorage.setItem(LOCAL_STORAGE_NAME, await getNIMData());
      localStorage.setItem(LOCAL_STORAGE_VERSION, version);
      updateResult();
    })();
  } else {
    updateResult();
  }
</script>

<h1>ITB NIM Finder</h1>
<input type="text" class="form-control" bind:value={value} on:input={updateResult} />
<div class="mt-3">
  {#if resPromise}
    {#await resPromise}
      <p>Loading...</p>
    {:then res}
      {#if res}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">NIM 1</th>
              <th scope="col">NIM 2</th>
            </tr>
          </thead>
          <tbody>
            {#each res.slice(0, max) as student, idx}
              <tr>
                <th scope="row">{idx+1}</th>
                <td>{student[0]}</td>
                <td>{student[1]}</td>
                <td>{student[2]}</td>
              </tr>
            {/each}
            {#if res.length > max}
              <tr class="loadmore" on:click={() => max += 10}>
                <th scope="row">...</th>
                <td>Load more...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            {/if}
          </tbody>
        </table>
      {/if}
    {/await}
  {/if}
</div>
