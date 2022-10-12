<script>
    import { onMount } from "svelte";
    import Header from "$lib/portfolio/header.svelte";
    import Hero from "$lib/portfolio/hero.svelte";
    import About from "$lib/portfolio/about.svelte";
    import Works from "$lib/portfolio/works.svelte";
    import Contact from "$lib/portfolio/contact.svelte";
    import "../app.css";

    let mounted = false;
    onMount(() => mounted = true);
</script>

<title>ZED.CODES</title>

<div class="text-white font-inter pb-12">
    {#if mounted}
        <Header/>
        <Hero/>
        <About/>
        <Works/>
        <Contact/>
    {/if}
</div>



    
  
