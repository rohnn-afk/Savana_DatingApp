import { AnimatePresence, motion } from 'framer-motion'


const Marquee = ({color,text}) => {
    
  return (
    <div data-scroll data-scroll-speed=".2" data-scroll-section className='flex  overflow-hidden'>
        <div className={`w-full z-[999] py-14 ${color} rounded`}>
            <div className='text border-t-2 border-b-2 border-zinc-300  text-red-100 whitespace-nowrap flex uppercase leckerli-one-regular'>
                <AnimatePresence> 
                <motion.h1 key={'1'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:15}} className='text-[13vw] py-5 leading-none pr-[100px] ml-4'>{`${text}`}</motion.h1>
                <motion.h1 key={'2'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:15}} className='text-[13vw] py-5 leading-none  pr-[100px] ml-4'>{`${text}`}</motion.h1>
                <motion.h1 key={'3'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:15}} className='text-[13vw] py-5 leading-none  pr-[100px] ml-4'>{`${text}`}</motion.h1>
                <motion.h1 key={'4'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:15}} className='text-[13vw] py-5 leading-none  pr-[100px] ml-4'>{`${text}`}</motion.h1>
                <motion.h1 key={'5'} initial={{x:0}} animate={{x:'-100%',}} transition={{ease:'linear',repeat:Infinity,duration:15}} className='text-[13vw] py-5 leading-none  pr-[100px] ml-4'>{`${text}`}</motion.h1>
                </AnimatePresence>
            </div>
        </div>
      
    </div>
  )
}

export default Marquee
