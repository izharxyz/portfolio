<script>
// @ts-nocheck
import Typewriter from "svelte-typewriter";
</script>
<div class="container mt-40 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full" id="about">
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <img src="images/about.svg" alt="" class="w-full mt-2 md:mt-60 lg:mt-28 md:relative md:bottom-0 lg:lrft-0 -z-[1]">
        </div>
            
        <div class="flex flex-nowrap lg:ml-20 justify-start max-w-2xl mt-0 md:my-36">
            <div>
                <h3 class="text-lg md:text-2xl lg:text-3xl text-center md:text-left mx-1 text-primary2">About.</h3>
                <h1 class="font-extrabold text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
                    <Typewriter mode=loop interval=150 unwriteInterval=150 --cursor-color=#ff9f3f --cursor-width=10px>
                        <span>Student</span>
                        <span>Developer</span>
                        <span>Designer</span>
                        <span>Enthusiast</span>
                    </Typewriter>
                </h1>
                <p class="text-lg lg:text-2xl md:text-left mx-1 text-secondary-text mt-4">
                    I'm a student based in India, currently pursuing bachelor's in 
                    Computer Science at Ajeenkya DY Patil University, concentrating 
                    on Mobile, UX Design, Web Development and Security. My skills 
                    include <span class="text-dimwhite"> Linux, SvelteKit, MongoDB, PostgreSQL, Typescript, C/C++ and Django. </span>
                    <br>
                    I also like sharing content related to the stuff that i have
                    learned over the years in Software Development so it can help
                    other peoples of Dev Community.You can find my blogs <a href="/blog" class="text-primary2">here</a>. 
                    Feel free to connect or follow
                    me on my <a href="/" class="text-primary2">Linkedin</a>. <br>
                    I'm open to Internships and remote Job opportunities where I 
                    can contribute, learn and grow. If you have good opportunity
                    that matches my skills and experience then
                    dont hesitate to <a href="#contact" class="text-primary2">contact</a> me.
                </p>
            </div> 
        </div>         
    </div>
</div>
