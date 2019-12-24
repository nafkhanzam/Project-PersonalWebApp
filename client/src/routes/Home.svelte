<script>
  import { onHover } from "../utils";
  onHover(".addshadow", "shadow-lg");

  let menus = [
    {
      title: "Portfolio"
      // href: "/portfolio",
    },
    {
      title: "Blog",
      href: "/blog"
    },
    {
      title: "Apps",
      href: "/app"
    },
    {
      title: "NIM Finder",
      href: "/nim"
    }
  ];
</script>

{#each menus as menu, i}
  <div
    class={'media position-relative mt-3 p-2 rounded bg-dark' + (menu.href ? ' addshadow' : '')}>
    <img
      class="mr-3"
      height="128"
      width="128"
      src={menu.img || `https://picsum.photos/128/128?${i}`}
      alt={menu.imgAlt || menu.title || 'Unknown image'} />
    <div class="media-body">
      <h5 class="mt-0">{menu.title || ''}</h5>
      {#if menu.href}
        {@html menu.desc || ''}
        <a href={menu.href} class="stretched-link">{''}</a>
      {:else}
        <div style="color: darkorange;">Under construction</div>
      {/if}
    </div>
  </div>
{/each}
