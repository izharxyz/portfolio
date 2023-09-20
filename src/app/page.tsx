export default function Home() {
return (
<main className="flex min-h-screen items-center justify-center p-20">
  <div className='flex flex-col min-h-screen w-full items-center justify-center bg-violet-200 border-2 border-black'>
    {/* navbar */}
    <div className='w-full border-b-2 border-black flex'>
      <div className='w-full h-28 mx-20 border-x-2 border-black  flex items-center justify-between p-10'>

          <a href="#" className='text-2xl'>MY WORK</a>
          
          <div className='flex flex-row items-center font-bold text-2xl gap-1'>
            <h1>Mohamed</h1> 
            <div className='rounded-3xl w-12 h-6 bg-violet-500'></div> 
            <h1>Izhar</h1>
          </div>
          
          <div className='flex items-center justify-center'>
              <a href="#"
                className='bg-rose-400 px-10 py-2 text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]'>LET'S TALK</a>
          </div>
      </div>
    </div>


    <div className='w-full p-20'>
      <div className='grid grid-cols-2 w-full border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]'>
        <div className='text-left w-full bg-rose-300 p-10 overflow-visible z-10'>
            <p className='text-2xl text-clip'>Hello! I'm Mohamed Izhar.</p>
            <h1 className='font-semibold text-8xl mb-20'>
                I create <br />
                digital experiences <br />
                <span className='font-stroke'>
                  that inspire.
                </span>
            </h1>
            <a href="#" className='bg-teal-400 px-10 py-2 text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]'>
                CONTACT ME
            </a>
        </div>
        <div className='w-full bg-rose-300 relative'>
            <div className='absolute -left-5 top-20 h-48 w-10 bg-purple-500'></div>
            <div className="absolute bottom-20 left-20 h-48 w-48 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] z-10"></div>
            <div className='absolute bottom-10 left-64 h-28 w-64 bg-teal-400'></div>
            <div className='absolute top-20 right-48 text-violet-100'>
              <svg className='h-48 w-48' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17.002 8.79L15.68 6.32L13.208 5l2.473-1.318L17 1.208ZM8 4.333l2.667 5l5 2.667l-5 2.666l-2.666 5l-2.667-5l-5-2.666l5-2.667l2.667-5Zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.666l1.667 3.125l1.666-3.125L22.792 18l-3.125-1.667Z"/></svg>
            </div>
        </div>
      </div>
    </div>
    
    <div className='w-full px-20'>
      <div className='font-bold text-8xl w-fit relative z-20'>
        <span className='font-stroke'>About</span> me
        <div className='absolute -right-10 -bottom-5 bg-teal-400 h-20 w-96 -z-10'>
        </div>
      </div>
    </div>


    <div className='w-full px-20 mt-20'>
      <div className='border-2 border-black w-full p-10 text-2xl bg-teal-400 shadow-[10px_10px_0px_rgba(0,0,0,1)] relative'>
            I am an aspiring student based in India, currently immersed in the world of Computer Science at Ajeenkya DY Patil University. My academic journey revolves around the realms of Mobile Development, UX Design, Web Development, and Security, each a brushstroke on the canvas of my education. <br /> <br />

            Beyond the classroom, I am a storyteller of the digital world. I craft narratives, sharing the wisdom I've gathered on my voyage through the landscape of Software Development. My written reflections aim to illuminate the path for fellow wanderers in the vast Dev Community. You can discover my written expressions <a href="https://poeticcode.xyz" className='text-underline text-blue-700'>here</a>. <br /> <br />

            I extend an invitation to connect with me and traverse this artistic journey together on LinkedIn. It's a stage where I often reveal my musings and partake in profound dialogues. <br /><br />

            In this grand gallery of life, I am now seeking opportunities, both near and far, where I can continue to weave my threads of creativity. If you hold a key to a realm where my skills and experiences may flourish, I encourage you to reach out. I am eager to paint new stories, sketch fresh ideas, and leave my mark on the canvas of innovation.   
            <div className="absolute -top-36 -right-20 text-rose-400">
            <svg className="h-48 w-48" xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M208 144a15.78 15.78 0 0 1-10.42 14.94l-51.65 19l-19 51.61a15.92 15.92 0 0 1-29.88 0L78 178l-51.62-19a15.92 15.92 0 0 1 0-29.88l51.65-19l19-51.61a15.92 15.92 0 0 1 29.88 0l19 51.65l51.61 19A15.78 15.78 0 0 1 208 144Zm-56-96h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16Zm88 32h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16Z"/></svg>
            </div>    
      </div>
    </div>

    <div className='w-full px-20 mt-20'>
      <div className='font-bold text-8xl w-fit relative z-20'>
         My<span className='font-stroke'> Skills</span>
        <div className='absolute -right-10 -bottom-5 bg-orange-300 h-20 w-96 -z-10'>
        </div>
      </div>
    </div>

    <div className='w-full px-20 mt-20'>
      <div className='border-2 border-black w-full p-10 text-2xl bg-orange-300 shadow-[10px_10px_0px_rgba(0,0,0,1)] h-96 mb-20'>

      </div>
    </div>
  </div>
</main>
)
}
