<script>
  import { classOnHover } from "../utils";
  classOnHover(".menu", "shadow");
  let menus = [
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Apps",
    },
    {
      title: "NIM Finder",
      href: "/nim",
    },
  ]
</script>

{#each menus as menu}
  <div class="menu media position-relative mt-3 p-2 border rounded">
    <img class="mr-3" height="128" width="128" src={menu.img || "/favicon.png"} alt={menu.imgAlt || menu.title || "Unknown image"}>
    <div class="media-body">
      <h5 class="mt-0">{menu.title || ""}</h5>
      {menu.desc || ""}
      <a href={menu.href} class="stretched-link">{""}</a>
    </div>
  </div>
{/each}
