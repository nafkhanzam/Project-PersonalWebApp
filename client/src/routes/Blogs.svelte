<script>
  import { toPrettyDate } from "../utils";
  import { getBlogs, getBlogJson } from "../assets";
  import Loading from "./components/Loading.svelte";

  let tags = new Set();
  let selectedTags = new Set();

  let blogsPromise = getBlogsData();
  async function getBlogsData() {
    blogsPromise = await Promise.all(
      (await getBlogs())
        .map(async val => {
          const blogData = await getBlogJson(val);
          if (!blogData) {
            return null;
          }
          if (blogData.tags) {
            blogData.tags.forEach(tag => tags.add(tag));
          }
          tags = tags;
          return { url: val, ...blogData };
        })
    ).then(data => data
      .filter(val => val)
      .filter(val => {
        return !selectedTags.size || val.tags.some(tag => selectedTags.has(tag));
      })
      .sort(data => {
        return data.date;
      })
    );
  }
</script>

<h1 class="text-center">Blogs</h1>
<hr />
{#await blogsPromise}
  <Loading />
{:then list}
  <div class="row">
    <div class="col-8">
      <ul>
        {#each list as blog}
          {#if blog && blog.title}
            <li>
              <a href={`/blog/${blog.url}`}>
                [{toPrettyDate(blog.date)}] {blog.title} [by {blog.author}]
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
    <div class="col-4">
      <h5 style="display: inline;">Tags:</h5>
      {#if selectedTags.size}
        <a
          href="javascript:void(0)"
          on:click={() => {
            selectedTags.clear();
            selectedTags = selectedTags;
            getBlogsData();
          }}
          class="badge badge-pill badge-primary ml-2">
          Clear &times;
        </a>
      {/if}
      <br />
      <div class="mt-2">
        {#each Array.from(tags) as tag}
          <a
            href="javascript:void(0)"
            on:click={() => {
              if (selectedTags.has(tag)) {
                selectedTags.delete(tag);
              } else {
                selectedTags.add(tag);
              }
              selectedTags = selectedTags;
              getBlogsData();
            }}
            class={`badge badge-pill badge-${selectedTags.has(tag) ? 'warning' : 'dark'} m-1`}>
            {tag}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/await}
