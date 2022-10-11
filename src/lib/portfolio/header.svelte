<script>
    let open = false;
</script>
<nav class="py-6 px-2 sm:px-4 fixed w-full z-20 top-0 left-0 border-b border-gray-600 bg-bg">
    <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full text-sm md:text-md lg-text-xl">
    <a href="/" class="flex items-center">
        <span class="self-center font-bold whitespace-nowrap">ZED.CODES</span>
    </a>
    <div class="flex md:order-2">
        <a href="#contact"><button type="button" class="px-6 py-2 bg-primary rounded-md font-bold transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 duration-300">  CONTACT </button></a>
        <button class="text-white cursor-pointer ml-4 border-none focus:outline-none md:hidden" class:open on:click={() => open = !open}>
            <svg width=32 height=24>
                <line id="top" x1=0 y1=2  x2=32 y2=2/>
                <line id="middle" x1=0 y1=12 x2=24 y2=12/>
                <line id="bottom" x1=0 y1=22 x2=32 y2=22/>
          </svg>
      </button>
    </div>
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
      <ul class="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-md">
        <li>
          <a href="#home" class="block py-2 pr-4 pl-3 text-secondary rounded hover:text-selected-text md:p-0 ">HOME</a>
        </li>
        <li>
          <a href="#about" class="block py-2 pr-4 pl-3 text-secondary rounded hover:text-selected-text md:p-0 ">ABOUT</a>
        </li>
        <li>
          <a href="#work" class="block py-2 pr-4 pl-3 text-secondary rounded hover:text-selected-text md:p-0 ">WORK</a>
        </li>
        <li>
          <a href="/blog" class="block py-2 pr-4 pl-3 text-secondary rounded hover:text-selected-text md:p-0 ">BLOG</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  
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