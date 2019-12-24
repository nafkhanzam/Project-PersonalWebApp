<script>
  import { getJSON, toPrettyDate } from "../utils";
  import Loading from "./components/Loading.svelte";

  let blogsPromise = getBlogs();
  async function getBlogs() {
    blogsPromise = await Promise.all((await getJSON("/assets/blogs.json")).data
      .map(async (val) => {
        const blogData = await getJSON(`/assets/blogs/${val}.json`);
        return { url: val, ...blogData };
      }).sort(data => data.date));
  }
</script>

<h1>Blogs</h1>
<hr />
{#await blogsPromise}
  <Loading />
{:then list}
  <ul>
    {#each list as blog}
      {#if blog && blog.title}
        <li>
          <a href={`/blog/${blog.url}`}>[{toPrettyDate(blog.date)}] {blog.title} [by {blog.author}]</a>
        </li>
      {/if}
    {/each}
  </ul>
{/await}