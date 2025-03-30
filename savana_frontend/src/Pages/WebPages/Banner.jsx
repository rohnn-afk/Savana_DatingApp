import { AnimatePresence } from "framer-motion"

const Banner = () => {



  return (
    <div className=" bg-gradient-to-br from-black via-[#004D40] to-[#2DAA9E]" >
      <div className="w-full flex bg-red-800 items-center justify-center">
      <h1 className="text-zinc-900 text-bold text-[2.6rem] pt-2  subpixel-antialiased prata-regular outfit-uniquifier tracking-widest">SAVANA</h1>
      </div>
      <AnimatePresence>

        <div data-scroll data-scroll-speed="0.5" data-scroll-section className='w-full h-[120vh] bg-zinc-800 rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center '>
            <h1 className='text-[185px] py-6  text-green-300 leading-none underline tracking-tighter'>READY</h1>
            <h1 className='text-[185px] py-6 text-green-300 leading-none underline tracking-tighter'>TO START</h1>
            <h1 className='text-[185px] py-6 text-green-300 leading-none underline tracking-tighter'>A NEW</h1>
            <h1 className='text-[185px] py-6 text-green-300 leading-none underline tracking-tighter'>DATING LIFE ?</h1>
        </div>
      
      </AnimatePresence>
    </div>
  )
}

export default Banner

