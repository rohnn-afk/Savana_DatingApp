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
  const {FindingPotentialMatch,potentialMatch, likePotentialMatch,getMatches} = MatchStore()
  const {selectedPotentialMatch,removeCheckout,selectedPotentialMatchImages,showConfetti ,showHearts} = UIStore()

  
  
  const likeSound = new Howl({ src: ["/791346__loshid__pop-up.m4a"], volume: 1});


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
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Lottie animationData={heartAnimation} style={{ width: 100, height: 145 }} />
        </motion.div>
     )}


  {!potentialMatch ? (
    <div className="w-full h-[60vh] bg-base-300 flex items-center justify-center text-center px-4">
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

<div className="mx-4 md:mx-10 p-10 md:p-28 bg-base-200 rounded-lg min-h-screen shadow-[0_10px_30px_rgba(0,0,0,0.6)]">


<div className="flex flex-col gap-10 md:gap-28 items-center lg:flex-row">
  <div className='flex items-center flex-col justify-center lg:mr-12'>
    <div className='overflow-hidden mx-4 md:mx-16 rounded-2xl'>
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
      <p className='hover:text-zinc-500/50 cursor-none animate-pulse'>Please swipe the picture from right to left</p>
    </div>
  </div>

  <div className='w-full lg:w-2/3 px-4 md:px-10'>
    <div className='w-full flex flex-row justify-between items-center'>
      <h1 className="text-4xl md:text-7xl hkfont pb-5 md:pb-10 leading-none font-bold">
        {selectedPotentialMatch?.name}
      </h1>
      <button onClick={() => {removeCheckout();}} className='text-2xl hover:text-red-500 btn'>x</button>
    </div>
    
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

     
     
      <div className='w-full mt-10'>
        <BarPoll/>
      </div>
    </div>
  )
}

export default UserHome
