<script>
    import { onMount } from "svelte";
    import { scale, fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import "../app.css";

    let pageLoaded = false;
    onMount(() => pageLoaded = true);

    let texts = [
        "HELLO!",
        "Mohamed Izhar",
        "a developer",
        "a designer",
        "an enthusiast"
    ]
    let i = 0;
    $: hello = true;

    setInterval(() => {
        hello = false;
        i += 1;
        if (i == 5){
            i = 0;
            hello = true;
        }
    }, 2000)

    $: text = texts[i];
    
</script>

<div class="relative h-screen w-screen bg-jetblack">
    
    <div class="absolute top-10 left-60 h-fit w-fit">
        <h1 class="text-[20px] font-inter font-extrabold text-fontwhite"> ZED CODES </h1>
    </div>
    <div class="absolute top-10 right-60 h-fit w-fit grid grid-cols-3">
        <h1 class="text-[20px] font-inter font-light text-fontwhite"> ABOUT </h1>
        <h1 class="text-[20px] font-inter font-light text-fontwhite"> WORK </h1>
        <h1 class="text-[20px] font-inter font-light text-fontwhite"> CONTACT </h1>
    </div>
    
    <div class="absolute inset-0 h-screen w-screen grid place-items-center justify-center place-content-center text-clip text-center">
        {#if pageLoaded} 
            
            {#if hello}
                    <h1
                    in:scale={{ delay: 250, duration: 500, easing: quintOut}} 
                        
                    class="font-inter font-bold text-fontwhite mx-4"
                    style="font-size: 200px">
                    { text }
                    </h1>
            {:else}
                <h3
                in:scale={{ delay: 0, duration: 500, easing: quintOut}}  
                class="font-inter font-bold text-white text-7xl"> 
                I am 
                </h3>
                {#key text}
                    <h1
                    in:scale={{ delay: 500, duration: 500, easing: quintOut}} 
                    class="font-inter font-bold text-white text-[100px]">
                    { text }
                    </h1>
                {/key}
            {/if}   
            
        {/if} 
    </div>
    <div class="absolute right-10 inset-y-0 w-16 grid grid-row place-items-center justify-center place-content-center">
        <div>
            <button class="drop-shadow-lg hover:drop-shadow-2xl bg-inherit"> <img class="py-2 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" src="github.png" alt="github"> </button>
            <button class="drop-shadow-lg hover:drop-shadow-2xl bg-inherit"> <img class="py-2 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" src="linkedin.png" alt="linkedin"> </button>
            <button class="drop-shadow-lg hover:drop-shadow-2xl bg-inherit"> <img class="py-2 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300" src="twitter.png" alt="twitter"> </button>
        </div>
    </div>
   
    <div class="absolute bottom-40 h-fit w-screen grid place-items-center justify-center place-content-center">
        <button class="bg-neonblue rounded-full drop-shadow-lg hover:drop-shadow-2xl text-fontwhite font-inter font-light text-[20px] px-16 py-2 transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">LETS CREATE SOMETHING</button>
    </div>
</div>

