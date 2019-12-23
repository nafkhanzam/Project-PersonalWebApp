<script>
  import { getJSON, toPrettyDate } from "../utils";

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
  <p>Loading...</p>
{:then list}
  <ul>
    {#each list as blog}
      {#if blog && blog.title}
        <li>
          <a href={`/blog/${blog.url}`}>[{toPrettyDate(blog.date)}] {blog.title}</a>
        </li>
      {/if}
    {/each}
  </ul>
{/await}