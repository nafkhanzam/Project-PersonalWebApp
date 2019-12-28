<script>
  import Router from "svelte-navaid/Router.svelte";
  import Route from "svelte-navaid/Route.svelte";
  import Home from "./routes/Home.svelte";
  import Portfolio from "./routes/Portfolio.svelte";
  import Blog from "./routes/Blog.svelte";
  import Blogs from "./routes/Blogs.svelte";
  import NIM from "./routes/NIM.svelte";
  import Apps from "./routes/Apps.svelte";
  import App from "./routes/App.svelte";
  import Admin from "./routes/Admin.svelte";
  import notFound from "./routes/notFound.svelte";
  import NavBar from "./routes/components/NavBar.svelte";
  import Footer from "./routes/components/Footer.svelte";
  import routes from "./routes";
</script>

<div style="display: flex; flex-direction:column; width: 100%; height: 100vh;">
  <NavBar />
  <div class="container" style="padding: 1em; flex: 1;">
    <Router>
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.portfolio} component={Portfolio} />
      <Route exact path={routes.blogs} component={Blogs} />
      <Route path={routes.blog(":blog")} let:params>
        <Blog blog={params.blog} />
      </Route>
      <Route path={routes.nim} component={NIM} />
      <Route path={routes.apps} component={Apps} />
      <Route path={routes.app(":appName")} let:params>
        <App appName={params.appName} />
      </Route>
      <Route path={routes.admin} component={Admin} />
      <Route path="/">{location.replace(routes.home)}</Route>
      <Route component={notFound} />
    </Router>
  </div>
  <Footer />
</div>
