import { useState } from "react"
import { FocusCards } from "../../Componentes/UI/Focus-cards"
import {motion} from 'framer-motion'
import { Camera, CheckCircle, Pen } from "lucide-react"
import { IconMoodEmpty } from "@tabler/icons-react"
import InfoTooltip from "../../Componentes/UI/InfoToolTip"
import { ProfileStore } from "../../Store/ProfileStore"
import toast from "react-hot-toast"




const Pictures = () => {


  const {updateImages,updatingimages,userImages} = ProfileStore()



  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)
  const [image5,setImage5] = useState(false)
  const [image6,setImage6] = useState(false)

  const [title1data,setTitle1data] = useState('')
  const [title2data,setTitle2data] = useState('')
  const [title3data,setTitle3data] = useState('')
  const [title4data,setTitle4data] = useState('')
  const [title5data,setTitle5data] = useState('')
  const [title6data,setTitle6data] = useState('')

  const [activeTitle,setActiveTitle] = useState(null)


  
  const handleImageSave = async (e) =>{

    e.preventDefault()


    if(!image1 && !image2 && !image3 && !image4 && !image5 && !image6){
    
    toast.error('please select images')
     return 
    }


    const imageData = {}

    for(let i = 1 ; i <= 6 ; i++){
      const image = eval(`image${i}`)
      const title = eval(`title${i}data`)

      
      if (image) {
        imageData[`newimage${i}`] = {
          image: image,
          title: title || "",
        };
      }     
    }
    
  
    const formData = new FormData()

    Object.keys(imageData).forEach((key) => {
      formData.append(`${key}[image]`, imageData[key].image);
      formData.append(`${key}[title]`, imageData[key].title);
    });

    updateImages(formData)

  }




  const titleFunction = (titledata)=>{

    switch(titledata){
  
      case 'title1' : {return    (<div className="w-full p-4 px-6 py-6  mb-10">
                                   <p className="py-2 p-1">Image - Title 1</p>
                                   <textarea  name="title1"  className="w-full  h-full  overflow-hidden resize-none p-2  rounded-md break-words"  onInput={(e) => {e.target.style.height = "" , e.target.style.height = `${e.target.scrollHeight}px`}} value={title1data} placeholder="enter title for first image , if u want" onChange={(e)=>setTitle1data(e.target.value)} type="text"></textarea>
                                   <button className="p-1 px-4 hover:text-red-500" onClick={()=>setActiveTitle(null)}>close</button>
                                   </div>)}
                   
                  
                   
      case 'title2' : {return    ( <div className="w-full p-4 px-6">
                                    <p className="py-2 p-1">Image - Title 2</p>
                                    <textarea  name="title2"  className="w-full  h-full  overflow-hidden resize-none p-2  rounded-md break-words"  onInput={(e) => {e.target.style.height = "" , e.target.style.height = `${e.target.scrollHeight}px`}} value={title2data} placeholder="enter title for first image , if u want" onChange={(e)=>setTitle2data(e.target.value)} type="text"></textarea>
                                    <button className="p-1 hover:text-red-500" onClick={()=>setActiveTitle(null)}>close</button>
                                    </div>)}

      case 'title3' : {return     (<div className="w-full p-4 px-6">
                                    <p className="py-2 p-1">Image - Title 3</p>
                                     <textarea  name="title3"  className="w-full  h-full  overflow-hidden resize-none p-2  rounded-md break-words"  onInput={(e) => {e.target.style.height = "" , e.target.style.height = `${e.target.scrollHeight}px`}} value={title3data} placeholder="enter title for first image , if u want" onChange={(e)=>setTitle3data(e.target.value)} type="text"></textarea>
                                      <button className="p-1 hover:text-red-500" onClick={()=>setActiveTitle(null)}>close</button>
                                   </div>)}       
                                   
                                   
      case 'title4' : {return      (<div className="w-full p-4 px-6">
                                      <p className="py-2 p-1">Image - Title 4</p>
                                          <textarea  name="title4"  className="w-full  h-full  overflow-hidden resize-none p-2  rounded-md break-words"  onInput={(e) => {e.target.style.height = "" , e.target.style.height = `${e.target.scrollHeight}px`}} value={title4data} placeholder="enter title for first image , if u want" onChange={(e)=>setTitle4data(e.target.value)} type="text"></textarea>
                                         <button className="p-1 hover:text-red-500" onClick={()=>setActiveTitle(null)}>close</button>
                                    </div>)}


      
      case 'title5' : {return        (<div className="w-full p-4 px-6">
                                        <p className="py-2 p-1">Image - Title 5</p>
                                         <textarea  name="title5"  className="w-full  h-full  overflow-hidden resize-none p-2  rounded-md break-words"  onInput={(e) => {e.target.style.height = "" , e.target.style.height = `${e.target.scrollHeight}px`}} value={title5data} placeholder="enter title for first image , if u want" onChange={(e)=>setTitle5data(e.target.value)} type="text"></textarea>
                                          <button className="p-1 hover:text-red-500" onClick={()=>setActiveTitle(null)}>close</button>
                                       </div>) }

      case 'title6' : {return        (<div className="w-full p-4 px-6">
                                           <p className="py-2 p-1">Image - Title 6</p>
                                             <textarea  name="title6"  className="w-full  h-full  overflow-hidden resize-none p-2  rounded-md break-words"  onInput={(e) => {e.target.style.height = "" , e.target.style.height = `${e.target.scrollHeight}px`}} value={title6data} placeholder="enter title for first image , if u want" onChange={(e)=>setTitle6data(e.target.value)} type="text"></textarea>
                                           <button className="p-1 hover:text-red-500" onClick={()=>setActiveTitle(null)}>close</button>
                                      </div>)}

      default:   return null;

                  
                  
                  }
  }
    



  const cards = [
    {
      title: userImages.image1?.title || "",
      src: userImages.image1?.image || "",
    },
    {
      title: userImages.image2?.title || "",
      src: userImages.image2?.image || "",
    },
     {
      title: userImages.image3?.title || "",
      src: userImages.image3?.image || "",
    },
    {
      title: userImages.image4?.title || "",
      src: userImages.image4?.image || "",
    },
    {
      title: userImages.image5?.title || "" ,
      src: userImages.image5?.image || "",
    },
    {
      title: userImages.image6?.title || "",
      src: userImages.image6?.image || "",
    },
   
  ];





  return (
    <div className="min-h-screen  pb-16">
    <div className="min-h-screen   w-full flex">
    <div className="min-h-screen p-6 pt-10 w-3/5 ">
      <FocusCards cards={cards}/>
    </div>
    
    <div className="min-h-screen flex flex-col w-2/5 ">
    
    <div className="w-full h-[10vh] flex py-12 mt-6 flex-row items-center gap-6">
      <InfoTooltip text={'here u can update profile , images , On right part of page u see diffrent image options , u cna upload 6 images , just click on them , select and click save to upload , you can also add title to your images by clicking on the pen at right most part '}/>
            <h1 className="text-4xl font-semibold leckerli-one-regular leading-none capitalize">
                     Profile Pictures
            </h1>
            <motion.hr className="w-1/9 h-0.5 bg-zinc-900 " initial={{ width: "0%" }}  animate={{ width: "40%" }}  transition={{ duration: 5, ease: "easeInOut" }} />
    </div>

    <div className=" w-7/8 rounded-lg flex py-10 px- pr-28 gap-3 flex-col">

    <label
        htmlFor="image1"
        className="p-2 px-4 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105  rounded-lg  shadow-md w-full max-w-lg mx-auto"
      >
        <div className="rounded-full transition-all duration-200 bg-white flex items-center justify-center w-12 h-12 overflow-hidden">
          {image1 ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src={URL.createObjectURL(image1)}
              alt="Uploaded"
            />
          ) : (
            userImages.image1?.image ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={userImages.image1?.image}
                alt="User uploaded"
              />
            ) : (
              <Camera className="w-5 h-5 text-gray-500" />
            )
          )}
          <input
            type="file"
            id="image1"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage1(e.target.files[0])}
            disabled={updatingimages}
          />
        </div>
        <p className="text-sm md:text-base">Image - 1</p>
        {userImages.image1?.image || image1 ? (
          <CheckCircle className="text-green-500" size={22} />
        ) : (
          <IconMoodEmpty size={22} className="text-red-500" />
        )}
        <button
          onClick={() => setActiveTitle(activeTitle === 'title1' ? null : 'title1')}
          className="px-4 hover:text-rose-700"
        >
          {title1data ? <Pen size={18} className="text-green-500" /> : <Pen size={18} />}
        </button>
      </label>

      <label
        htmlFor="image2"
        className="p-2 px-4 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105  rounded-lg  shadow-md w-full max-w-lg mx-auto"
      >
        <div className="rounded-full transition-all duration-200 bg-white flex items-center justify-center w-12 h-12 overflow-hidden">
          {image2 ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src={URL.createObjectURL(image2)}
              alt="Uploaded"
            />
          ) : (
            userImages.image2?.image ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={userImages.image2?.image}
                alt="User uploaded"
              />
            ) : (
              <Camera className="w-5 h-5 text-gray-500" />
            )
          )}
          <input
            type="file"
            id="image2"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage2(e.target.files[0])}
            disabled={updatingimages}
          />
        </div>
        <p className="text-sm md:text-base">Image - 2</p>
        {userImages.image2?.image || image2 ? (
          <CheckCircle className="text-green-500" size={22} />
        ) : (
          <IconMoodEmpty size={22} className="text-red-500" />
        )}
        <button
          onClick={() => setActiveTitle(activeTitle === 'title2' ? null : 'title2')}
          className="px-4 hover:text-rose-700"
        >
          {title2data ? <Pen size={18} className="text-green-500" /> : <Pen size={18} />}
        </button>
      </label>

      <label
        htmlFor="image3"
        className="p-2 px-4 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105  rounded-lg  shadow-md w-full max-w-lg mx-auto"
      >
        <div className="rounded-full transition-all duration-200 bg-white flex items-center justify-center w-12 h-12 overflow-hidden">
          {image3 ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src={URL.createObjectURL(image3)}
              alt="Uploaded"
            />
          ) : (
            userImages.image3?.image ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={userImages.image3?.image}
                alt="User uploaded"
              />
            ) : (
              <Camera className="w-5 h-5 text-gray-500" />
            )
          )}
          <input
            type="file"
            id="image3"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage3(e.target.files[0])}
            disabled={updatingimages}
          />
        </div>
        <p className="text-sm md:text-base">Image - 3</p>
        {userImages.image3?.image || image3 ? (
          <CheckCircle className="text-green-500" size={22} />
        ) : (
          <IconMoodEmpty size={22} className="text-red-500" />
        )}
        <button
          onClick={() => setActiveTitle(activeTitle === 'title3' ? null : 'title3')}
          className="px-4 hover:text-rose-700"
        >
          {title3data ? <Pen size={18} className="text-green-500" /> : <Pen size={18} />}
        </button>
        </label>


        <label
        htmlFor="image4"
        className="p-2 px-4 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105  rounded-lg  shadow-md w-full max-w-lg mx-auto"
      >
        <div className="rounded-full transition-all duration-200 bg-white flex items-center justify-center w-12 h-12 overflow-hidden">
          {image4 ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src={URL.createObjectURL(image4)}
              alt="Uploaded"
            />
          ) : (
            userImages.image4?.image ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={userImages.image4?.image}
                alt="User uploaded"
              />
            ) : (
              <Camera className="w-5 h-5 text-gray-500" />
            )
          )}
          <input
            type="file"
            id="image4"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage4(e.target.files[0])}
            disabled={updatingimages}
          />
        </div>
        <p className="text-sm md:text-base">Image - 4</p>
        {userImages.image4?.image || image4 ? (
          <CheckCircle className="text-green-500" size={22} />
        ) : (
          <IconMoodEmpty size={22} className="text-red-500" />
        )}
        <button
          onClick={() => setActiveTitle(activeTitle === 'title4' ? null : 'title4')}
          className="px-4 hover:text-rose-700"
        >
          {title4data ? <Pen size={18} className="text-green-500" /> : <Pen size={18} />}
        </button>
      </label>

      <label
        htmlFor="image5"
        className="p-2 px-4 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105  rounded-lg  shadow-md w-full max-w-lg mx-auto"
      >
        <div className="rounded-full transition-all duration-200 bg-white flex items-center justify-center w-12 h-12 overflow-hidden">
          {image5 ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src={URL.createObjectURL(image5)}
              alt="Uploaded"
            />
          ) : (
            userImages.image5?.image ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={userImages.image5?.image}
                alt="User uploaded"
              />
            ) : (
              <Camera className="w-5 h-5 text-gray-500" />
            )
          )}
          <input
            type="file"
            id="image5"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage5(e.target.files[0])}
            disabled={updatingimages}
          />
        </div>
        <p className="text-sm md:text-base">Image - 5</p>
        {userImages.image5?.image || image5 ? (
          <CheckCircle className="text-green-500" size={22} />
        ) : (
          <IconMoodEmpty size={22} className="text-red-500" />
        )}
        <button
          onClick={() => setActiveTitle(activeTitle === 'title5' ? null : 'title5')}
          className="px-4 hover:text-rose-700"
        >
          {title5data ? <Pen size={18} className="text-green-500" /> : <Pen size={18} />}
        </button>
      </label>
    

      <label
        htmlFor="image6"
        className="p-2 px-4 flex items-center justify-between cursor-pointer transition-transform duration-300 hover:scale-105  rounded-lg  shadow-md w-full max-w-lg mx-auto"
      >
        <div className="rounded-full transition-all duration-200 bg-white flex items-center justify-center w-12 h-12 overflow-hidden">
          {image6 ? (
            <img
              className="w-full h-full object-cover rounded-full"
              src={URL.createObjectURL(image6)}
              alt="Uploaded"
            />
          ) : (
            userImages.image6?.image ? (
              <img
                className="w-full h-full object-cover rounded-full"
                src={userImages.image6?.image}
                alt="User uploaded"
              />
            ) : (
              <Camera className="w-5 h-5 text-gray-500" />
            )
          )}
          <input
            type="file"
            id="image6"
            className="hidden"
            accept="image/*"
            onChange={(e) => setImage6(e.target.files[0])}
            disabled={updatingimages}
          />
        </div>
        <p className="text-sm md:text-base">Image - 6</p>
        {userImages.image6?.image || image6 ? (
          <CheckCircle className="text-green-500" size={22} />
        ) : (
          <IconMoodEmpty size={22} className="text-red-500" />
        )}
        <button
          onClick={() => setActiveTitle(activeTitle === 'title6' ? null : 'title6')}
          className="px-4 hover:text-rose-700"
        >
          {title6data ? <Pen size={18} className="text-green-500" /> : <Pen size={18} />}
        </button>
      </label>
   


      
    </div>
    {updatingimages ? (<div className="w-full bg-base-100 p-2 animate-pulse flex justify-center"> <p>Updating images ...</p> </div>) : (<div className="w-full bg-base-100 py-6 text-green-500 text-xs animate-pulse flex justify-center"> <p>please scroll down ...</p> </div>) }

    <div>{titleFunction(activeTitle)}</div>


    </div>

  </div>
  <div className="w-full py-4 flex">

    <button onClick={handleImageSave} className={`btn w-[94vw] hover:text-green-500 hover:bg-base-300 ${updatingimages ? "animate-pulse pointer-events-none" : ""} mx-auto p-3 `}>save</button>
  </div>
{ updatingimages ?
    (<div className="w-full py-4 flex justify-center">
    <p>Please load the page after to them updated..</p>
    </div>) : null
    }
    </div>
  )
}

export default Pictures


