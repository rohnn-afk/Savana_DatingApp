import { useEffect } from 'react'
import { UserAuthStore } from '../../Store/UserAuth'
import { ProfileStore } from '../../Store/ProfileStore'
import { AnimatedTestimonials } from '../../Componentes/UI/AnimatedTestimonials'
import BarPoll from '../../Componentes/UI/BarPoll'
import { MatchStore } from '../../Store/MatchStore'
import { UIStore } from '../../Store/UIStore'
import {motion} from "framer-motion"
import { ArrowUpDown, GraduationCap, Heart, Quote, Users2 } from 'lucide-react'
import Confetti from "react-confetti";
import Lottie from "lottie-react";
import { Howl } from "howler";
import heartAnimation from "../../assets/heart.json.json";

const UserHome = () => {
  
  const {checkAuth} = UserAuthStore()
  const {fetchData} = ProfileStore()
  const {FindingPotentialMatch,potentialMatch, likePotentialMatch,getMatches,matches} = MatchStore()
  const {selectedPotentialMatch,removeCheckout,selectedPotentialMatchImages,showConfetti ,showHearts,likeCount} = UIStore()


  
  const likeSound = new Howl({ src: ["/791346__loshid__pop-up.m4a"], volume: 0.4});


  const handleLike = () => {

    likeSound.play();
    window.scrollTo({ top: 0, behavior: "smooth" }) 
    likePotentialMatch(selectedPotentialMatch)
   
  };


  useEffect(() => {

    fetchData()
    FindingPotentialMatch()
    getMatches()

  }, [checkAuth,fetchData,FindingPotentialMatch,getMatches,likePotentialMatch])



  return (
<div className="min-h-screen px-2 bg-base-100 flex flex-col items-center justify-center">

  
{showConfetti && <Confetti numberOfPieces={150} recycle={false} />}


{showHearts && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <Lottie animationData={heartAnimation} style={{ width: 100, height: 145 }} />
        </motion.div>
     )}


  {!potentialMatch ? (
    <div className="w-full h-[60vh] mt-20 bg-base-300 flex items-center justify-center text-center px-4">
      <p>Please, go to profile, enter your details for Savana to show you your preference profiles</p>
    </div>
  ) : potentialMatch.length === 0 ? (
    <div className="w-full h-[60vh] bg-base-300 flex items-center justify-center text-center px-4">
      <p>You have liked every potential match as of yet</p>
    </div>
  ) : (
    <div className={`w-full ${showHearts ? (''):('mt-16 pt-20')}  flex justify-center`}>
      <AnimatedTestimonials testimonials={potentialMatch} />
    </div>
  )}


  
    { selectedPotentialMatch   &&

<div className="mx-4 md:mx-10 p-10  bg-base-200 rounded-lg min-h-screen mt-10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
<div className='w-full justify-end items-end flex'>

<button onClick={() => {removeCheckout();}} className='text-3xl hover:text-red-500 btn'> x </button>
</div>

<div className="flex flex-col gap-10 md:px-28 md:py-20  md:gap-28 items-center lg:flex-row">
  <div className='flex items-center flex-col  justify-center lg:mr-12'>
    <div className='overflow-hidden mx-4  md:mx-16 rounded-2xl'>
      <div className="carousel rounded-2xl w-full md:w-[26vw] h-[50vh] md:h-[70vh]">
        {selectedPotentialMatchImages && 
          Object.values(selectedPotentialMatchImages)
            .filter(value => typeof value === 'object' && value !== null && value.image)
            .map((image, index) => (
              <div key={index} className="carousel-item w-full">
                <img src={image?.image} className="w-full h-full object-cover" alt="" />
              </div>
        ))}
      </div>
    </div>
    <div className='p-2 text-center'>
      <p className='hover:text-zinc-500/30 text-xs cursor-none animate-pulse'>Please swipe the picture from right to left</p>
    </div>
  </div>

  <div className='w-full lg:w-2/3 px-4 md:px-10'>


      <h1 className="text-4xl md:text-7xl hkfont pb-5 md:pb-10 leading-none font-bold">
        {selectedPotentialMatch?.name}
      </h1>
    
    <div className="p-1 px-2 newfont flex flex-wrap gap-2 md:gap-4 items-center">
      <p className="text-md">{selectedPotentialMatch?.age}</p>
      <p>|</p>
      <p className="text-md">{selectedPotentialMatch?.gender}</p>
      <p>|</p>
      <p className="text-md">{selectedPotentialMatch?.location}</p>
      <p>|</p>
      <p className="text-md">Straight</p>
    </div>

    <div className="flex flex-row items-center px-2 gap-2 md:gap-4 pt-6 md:pt-8">
      <ArrowUpDown size={18} />
      <p className="text-sm">{selectedPotentialMatch?.height}</p>
    </div>

    <div className="flex flex-row items-center px-2 gap-2 md:gap-4 py-3">
      <Users2 size={18} />
      <p className="text-sm">{selectedPotentialMatch?.preference}</p>
    </div>

    <div className="flex flex-row items-center px-2 gap-2 md:gap-4 pb-4">
      <GraduationCap size={18} />
      <p className="text-sm">{selectedPotentialMatch?.education}</p>
    </div>

    <div className="flex flex-wrap items-center gap-2 md:gap-4 py-4 px-2 mb-6">
      <Heart size={18} />
      {selectedPotentialMatch?.interests && Object.keys(selectedPotentialMatch?.interests).map((key, index) => (
        <div key={index} className='rounded newfont p-2 flex items-center justify-center'>
          <p className="text-sm pr-2">{key}</p>
        </div>
      ))}
    </div>

    <motion.div className="flex flex-row gap-3 items-start mt-1">
      <Quote size={20} />
      <p className="text-lg text-wrap break-words newfont text-rose-900 min-h-[50px] max-h-[64px] max-w-full md:max-w-[370px] truncate">
        {selectedPotentialMatch?.bio}
      </p>
    </motion.div>

    <p className="py-6 newfont">Prompt :</p>
    <div className='newfont mt-6 md:mt-16 flex flex-col md:flex-row gap-4'>
      <button onClick={() => handleLike()} className="btn btn-primary hover:text-rose-500 w-full md:w-auto">Like</button>
      <button className="btn btn-primary w-full md:w-auto">More</button>
    </div>
  </div>
</div>
</div>

      }

      <hr className='h-0.5 w-[88vw] mt-32  bg-red-300'/>
<div className='w-full my-20 flex items-center justify-center'>
  <motion.h1 
     initial={{ opacity: 0, y: 50 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.4, ease: "easeOut", delay: 0.1}}
     viewport={{ once: false }} 
  className='text-3xl'>You Have : </motion.h1>

</div>
<div className="w-5/6 mb-20 p-10 flex flex-col justify-between  font-semibold gap-6 py-14 ">
<motion.div 
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, ease: "easeOut", delay: 0.1}}
viewport={{ once: false }} 
className="flex min-w-[120px] max-w-[300px] text-base p-3 space-x-6 flex-row chat-bubble-primary rounded-2xl justify-center shadow-xl">
  <h1>Likes</h1><h1>:</h1> 
  <h1>{likeCount}</h1> 
  </motion.div>
  <motion.div 
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.4, ease: "easeOut", delay: 0.1}}
   viewport={{ once: false }} 
  className="flex min-w-[120px] max-w-[300px] text-base p-3 space-x-6 flex-row chat-bubble-secondary rounded-2xl justify-center shadow-xl">
  <h1>Hearts</h1><h1>:</h1> 
  <h1>{likeCount} </h1> 
  </motion.div>

  <motion.div
   initial={{ opacity: 0, y: 50 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5, ease: "easeOut", delay: 0.1}}
   viewport={{ once: false }} 
  className="flex min-w-[120px] max-w-[300px] text-base py-3 space-x-6 justify-center flex-row chat-bubble-accent rounded-2xl  shadow-xl">
  <h1>Matches</h1><h1>:</h1> 
  <h1>{matches?.length} </h1> 
</motion.div>
</div>
<hr className='h-0.5 w-[88vw] mb-10  bg-red-300'/>

<div className='w-full p-14 flex mb-32 flex-col'>
  <div className='w-full flex items-center justify-start px-40'>
    <motion.h1
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.4, ease: "easeOut", delay: 0.1}}
       viewport={{ once: false }} 
     className='text-3xl'>
      What's New :
    </motion.h1>

  </div>


</div>

     

     
      <div className='w-full mt-10'>
        <BarPoll/>
      </div>
    </div>
  )
}

export default UserHome
