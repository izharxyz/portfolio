<script>
    function messageSentAlert(){
        alert("message sent successfully!");
    }
</script>
<div class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="contact">
    <section class="w-full">
        <h2 class="text-xl lg:ml-28 md:text-2xl lg:text-3xl text-center md:text-left  text-primary">Hire me.</h2>
        <p class="text-xl lg:ml-28 lg:text-2xl md:text-left  text-secondary-text mt-4"> Feel free to contact me any time using any method given below.</p>
        <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">  
            <div class="space-y-12 lg:ml-28">
                <div>
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="text-dimwhite block mb-6 mt-5 text-xl font-bold">Name</label>
                    <input type="text" class="w-full border border-input-border bg-input px-4 py-4"/>
                </div>
                <div>
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="text-dimwhite block mb-6 mt-5 text-xl font-bold">Email</label>
                    <input type="email" class="w-full border border-input-border bg-input px-4 py-4"/>
                </div>
                <div>
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="text-dimwhite block mb-6 mt-5 text-xl font-bold">Message</label>
                    <textarea type="email" rows="8" class="w-full border border-input-border bg-input px-4 py-4"/>
                </div>
                <button class="px-6 py-2 bg-primary text-white font-bold rounded-md drop-shadow-md transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300"
                on:click={messageSentAlert}>
                Send it!</button>
            </div>
            <div class="mt-12">
                <a href="mailto:zed.codes@proton.me" class="text-secondary underline mt-12 text-2xl">zed.codes@proton.me</a>
                <div class="flex mt-12 space-x-6">
                    <a href="https://github.com/zzedddd">
                        <img src="icons/gh.svg" alt="github" class="h-20 w-20 drop-shadow-md  transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-izhar-alam-670128227">
                        <img src="icons/li.svg" alt="linkedin" class="h-20 w-20 drop-shadow-md  transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">
                    </a>
                </div>
            </div>
        </div> 
    </section>
</div>
