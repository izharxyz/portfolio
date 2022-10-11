<script>
    let showMenu = false;
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }
    let open = false;
</script>

<div>
<div>
    <nav class="container px-8 py-8 md:px-14 lg:px-24 mx-auto md:flex md:justify-between md:items-center">
    <div class="flex items-center justify-between">
        <a href="/" class="text-lg font-bold text-white md:text-2xl">ZED.CODES</a>
        
        <!-- Mobile menu button -->
        <div on:click={toggleNavbar} class="flex md:hidden">
            <button class="text-white cursor-pointer mr-4 border-none focus:outline-none" class:open on:click={() => open = !open}>
                <svg width=32 height=24>
                    <line id="top" x1=0 y1=2  x2=32 y2=2/>
                    <line id="middle" x1=0 y1=12 x2=24 y2=12/>
                    <line id="bottom" x1=0 y1=22 x2=32 y2=22/>
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
    <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 
        {showMenu ? 'flex-col text-center space-x-9' : 'hidden'}">
        <a class="text-white hover:text-selected-text" href="#home">HOME</a>
        <a class="text-white hover:text-selected-text" href="#about">ABOUT</a>
        <a class="text-white hover:text-selected-text" href="/blog">BLOG</a>
        <a class="text-white" href="#contact"><button class="px-6 py-2 bg-primary rounded-md font-bold transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">CONTACT</button></a>
        
    </div>
    </nav>
</div>
</div>

<!--"just svg animation"-->
<style> 
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	.open svg {
		transform: scale(0.7)
	}
	
	.open #top {
		transform: translate(6px, 0px) rotate(45deg)
	}
	
	.open #middle {
		opacity: 0;
	}
	
    .open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg)
	}
</style>
