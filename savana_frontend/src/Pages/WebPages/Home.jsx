import { motion } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { UIStore } from '../../Store/UIStore';

const Home = () => {

      const { setshowJourney} = UIStore()

    return (
    <div data-scroll data-scroll-speed="-.8" data-scroll-section className='w-full h-screen b border-t-1'>
        <div className='textstructure pt-40 px-20'>
            <div className='masker flex mb-8'>
                <h1 className=' gowun-dodum-regular text-9xl  tracking-tighter'>FEELING BORDED?</h1>
            </div>
            <div className='masker  flex flex-row'>
                <motion.div initial={{width:0}} animate={{width:'20vw'}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}}  className=' m-2 ml-2 w-[30vw] h-20 bg-red-800'></motion.div>
                <h1 className=' gowun-dodum-regular text-8xl tracking-tighter'>MEET NEW PEOPLE</h1>
            </div>
            <div className='masker'>
                <h1 className=' gowun-dodum-regular text-8xl tracking-tighter'>ONLINE .</h1>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-40 flex justify-between items-center text-lg lexend-exa-uniquifier py-10 px-20'>
            {
                ['Relationships / Hookups','Connect verified people only'].map((item,index)=>(
                    <motion.div   whileHover={{scale: 1.1,transition: { duration: 0.3 },}} className=' text-md font-light tracking-tight hover:underline cursor-pointer' key={index}>{item}</motion.div>))
            }
            <button onClick={()=>{setshowJourney()}} className='start flex flex-row gap-2 cursor-pointer items-center'>
            <div className='px-5 py-2  rounded-full font-light'>Start the Journey</div>
            <div className='w-11 h-11 flex justify-center items-center rounded-full '><MdArrowOutward/></div>
            </button>

        </div>
      
    </div>
  )
}

export default Home 
