<script>
  let defaultTitle = "nafkhanzam's web";
  export let title = defaultTitle;
  export let headTitle = defaultTitle;
</script>

<svelte:head>
  <title>{headTitle}</title>
</svelte:head>

<nav class="navbar sticky-top navbar-dark bg-dark">
  <a class="navbar-brand" href="/home">{title}</a>
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link text-white" href="/admin">Admin ></a>
    </li>
  </ul>
</nav>