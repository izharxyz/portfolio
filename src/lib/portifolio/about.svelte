<script>
// @ts-nocheck

    import { slide } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import { quintOut } from 'svelte/easing';
    import Typewriter from 'svelte-typewriter';
    import "../app.css"
    let isInView;
</script>

<div class="relative h-screen w-screen flex flex-auto bg-jetblack">
    <div class="basis-1/3 h-screen grid place-items-center"
    use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
    on:change={({ detail }) => {
        isInView = detail.inView;
    }}>
        {#if isInView}
            <div>
                
                <img
                in:slide={{ delay: 500, duration: 1000, easing: quintOut}} 
                class="w-40 h-40 bg-blackbrown drop-shadow-2xl px-4 py-4 rounded-2xl mx-4 my-10" src="fancy_icons/student.png" alt="">
                <img 
                in:slide={{ delay: 500, duration: 1000, easing: quintOut}}
                class="w-40 h-40 bg-blackbrown drop-shadow-2xl px-4 py-4 rounded-2xl mx-4 my-10" src="fancy_icons/smartphone.png" alt="">            
                <img
                in:slide={{ delay: 500, duration: 1000, easing: quintOut}}
                class="w-40 h-40 bg-blackbrown drop-shadow-2xl px-4 py-4 rounded-2xl mx-4 my-10" src="fancy_icons/cyber-eye.png" alt="">
                
            </div>  
        {/if}
    </div>
    {#if isInView}
        <div class="basis-8/12 h-screen grid place-content-center text-clip text-left bg-jetblack">
            <h1 class="font-inter font-bold text-cyanx text-7xl max-w-[75%] ml-4">
                <Typewriter 
                mode=loop 
                interval=150 
                unwriteInterval=150 
                keepCursorOnFinish=true
                --cursor-color=#e25452 
                --cursor-width=12px>
                    <span> Student </span>
                    <span> Developer </span>
                    <span> Designer </span>
                </Typewriter>
            </h1> <br><br>
            <p 
            in:slide={{ delay: 250, duration: 1000, easing: quintOut}}
            class="font-inter font-light text-white text-3xl max-w-[75%] ml-4">
                I'm a student based in India, currently pursuing bachelor's 
                in Computer Science at Ajeenkya DY Patil University, concentrating on 
                Mobile, UX Design, Web Development and Security. 
                My interests include WASM, Linux, Android, Web Development and Pentesting! <br><br>
                Take a look at my work :D 
            </p>
        </div>
    {/if}
</div>  