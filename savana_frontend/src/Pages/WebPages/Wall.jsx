import CardComponent from "../../Componentes/UI/CardComponent";
import InfoTooltip from "../../Componentes/UI/InfoToolTip";
import { ParallaxScroll } from "../../Componentes/UI/ParallaxScroll";
import { UIStore } from "../../Store/UIStore";

const Wall = () => {

  const {iswallProfile}=UIStore()


  return (
    <div className="fixed top-10 left-0 w-full h-screen flex  rounded-lg">
      
      {/* Left Side - Scrollable Parallax */}
      <div className="w-[60vw] h-screen pb-60 overflow-y-auto rounded-lg p-0 mx-2  parallax-container scrollbar-hide">
        <ParallaxScroll />
      </div>
  
      {/* Right Side - Fixed Details */}
      <div className="w-1/3 h-screen flex flex-row items-start justify-between p-6 pt-10  text-white">
      <div className="flex  h-full i items-center flex-col  ">

        <InfoTooltip text={'this page is the wall of your account , here we shows the top weekly picks for you accourting to your prefrences , peronality and traits .'}/>
        <p className="my-10 label-text leckerli-one-regular leading-none text-xl">Wall</p>
      <hr className="w-0.5  border-none h-4/6 bg-base-300"/>
      </div>

      <div className="w-full h-full flex items-start justify-center mx-11 px-3">

        {
          iswallProfile ? ( <CardComponent/>) : (<div className="text-black"> click on card</div>)
        } 

      </div>
      </div>
  
    </div>
  )}

export default Wall
