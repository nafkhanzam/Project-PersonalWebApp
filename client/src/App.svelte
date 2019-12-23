<script>
  import { Router, Route } from "svelte-navaid";
  import Home from "./routes/Home.svelte";
  import Portfolio from "./routes/Portfolio.svelte";
  import Blog from "./routes/Blog.svelte";
  import Blogs from "./routes/Blogs.svelte";
  import NIM from "./routes/NIM.svelte";
  import notFound from "./routes/notFound.svelte";
  import NavBar from "./routes/components/NavBar.svelte";
  import Footer from "./routes/components/Footer.svelte";

  let navigate;
</script>

<div style="display: flex; flex-direction:column; width: 100%; height: 100vh;">
  <NavBar />
  <div class="container" style="padding: 1em; flex: 1;">
    <Router bind:navigate>
      <Route exact path="/home" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route exact path="/blog" component={Blogs} />
      <Route path="/blog/:blog" let:params><Blog blog={params.blog} /></Route>
      <Route path="/nim" component={NIM} />
      <Route path="/">{navigate("/home")}</Route>
      <Route path="/api/*"></Route>
      <Route component={notFound} />
    </Router>
  </div>
  <Footer />
</div>
