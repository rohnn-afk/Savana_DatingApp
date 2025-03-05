import { Calendar, Camera, Check, Mail, User, Users, Ruler, Globe, Sliders, GraduationCap, MessageSquare, Sparkle   } from 'lucide-react'
import { UserAuthStore } from '../../Store/UserAuth'
import {   useState } from 'react'
import { ProfileStore } from '../../Store/ProfileStore'
import { motion } from "framer-motion";
import { IconAdjustments, IconArticle, IconBrandInstagram, IconEye, IconHome, IconMessageDots, IconNewSection, IconPencil } from '@tabler/icons-react'
import { FloatingDock } from '../../Componentes/UI/FloatingDoc'


const Profile = () => {
  
  const {isUpdatingUser ,authuser ,updateUserImage} = UserAuthStore()
  const {userData,updateProfile,deleteProfile } = ProfileStore()
  
  const [selectedImg,setSelectedImage] = useState(null)
  
  const [deleteModal, setDeleteModal] = useState(false);
  const [isedit,setIsedit] = useState(false)
  

  const handleInterestSelect = (label) => {
    setInterests((prev) => ({
      ...prev,
      [label]: !prev[label], // Toggle selection
    }));
  };


  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
 
    {
      title: "Profile pov",
      icon: (
        <IconEye className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pov",
    },
    {
      title: "Photos",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/pictures",
    },
    {
      title: "Search Preferences",
      icon: (
        <IconAdjustments  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/preferences",
    },
    {
      title: "Prompts",
      icon: (
        <IconMessageDots  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/preferences",
    },
    
 
    {
      title: "Social media",
      icon: (
        <IconBrandInstagram  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/socials",
    },
    {
      title: "Blog",
      icon: (
        <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blog",
    },
  ];

  const interestOptions = [
    { label: "Music" },
    { label: "Gaming" },
    { label: "Travel" },
    { label: "Fitness" },
    { label: "Tech" },
    { label: "Cooking" },
    { label: "Art" },
    { label: "Movies" },
  ];

  // const interestOptions = [
  //   "Music",
  //   "Singing",
  //   "Dancing",
  //   "Playing Guitar",
  //   "Playing Piano",
  //   "DJing",
  //   "Painting",
  //   "Sketching",
  //   "Photography",
  //   "Videography",
  //   "Acting",
  //   "Writing",
  //   "Poetry",
  //   "Blogging",
  //   "Reading",
  //   "Traveling",
  //   "Hiking",
  //   "Camping",
  //   "Cycling",
  //   "Running",
  //   "Swimming",
  //   "Gym & Fitness",
  //   "Yoga",
  //   "Meditation",
  //   "Martial Arts",
  //   "Boxing",
  //   "Gaming",
  //   "Esports",
  //   "Board Games",
  //   "Cooking",
  //   "Baking",
  //   "Gardening",
  //   "Fishing",
  //   "Archery",
  //   "Horse Riding",
  //   "Scuba Diving",
  //   "Surfing",
  //   "Skateboarding",
  //   "Snowboarding",
  //   "Fashion",
  //   "Makeup & Beauty",
  //   "Interior Designing",
  //   "Tech & Coding",
  //   "Robotics",
  //   "Astronomy",
  //   "Astrology",
  //   "Podcasting",
  //   "Stand-up Comedy",
  //   "Public Speaking",
  //   "Social Work",
  //   "Volunteering",
  //   "Politics",
  //   "Collecting Stamps",
  //   "Collecting Coins",
  //   "Origami",
  //   "Bird Watching",
  //   "Anime & Manga",
  //   "Cosplaying",
  //   "K-Pop",
  //   "Vlogging",
  //   "Self-Improvement",
  //   "Stock Market & Investing",
  //   "Entrepreneurship",
  //   "Car & Bike Enthusiast",
  //   "Pet Care",
  //   "Dog Training"
  // ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "non-binary", label: "Non-Binary" },
    { value: "other", label: "Other" },
    { value: "prefer-not-say", label: "Prefer not to say" },
  ];

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Surat", "Jaipur",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad",
    "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi",
    "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Howrah", "Ranchi", "Gwalior",
    "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati",
    "Hubballi-Dharwad", "Mysore", "Thiruvananthapuram", "Salem", "Bhubaneswar", "Bhiwandi", "Guntur", "Warangal",
    "Gorakhpur", "Jalgaon", "Noida", "Kurnool", "Udaipur", "Bellary", "Muzaffarpur", "Imphal", "Bareilly",
    "Moradabad", "Aligarh", "Jalandhar", "Tiruchirappalli", "Bhagalpur", "Bhiwani", "Saharanpur"
  ];

  const relationPrefrence = ["Long-Term Relationship","Casual Dating","Marriage-Oriented","Friends First","Open Relationship","Polyamorous","No Strings Attached (NSA)","Exploring (Not Sure Yet)"]
 
  const educationLevels = [
    "High School",
    "Diploma",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate (PhD)",
    "Postgraduate",
    "Professional Certification",
    "Trade School",
    "Currently Studying",
    "Other"
  ];

  const handleImageUpload = async (e)=>{

    const file = e.target.files[0]

    if(!file) return
    
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    
    
    const formData = new FormData();
    
    file && formData.append('image',file)
    
    await updateUserImage(formData);
  }


   const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [location, setLocation] = useState("");
    const [preference, setPreference] = useState("");
    const [education, setEducation] = useState("");
    const [bio, setBio] = useState("");
    const [interests, setInterests] = useState({});
    const [lookingFor,setLookingFor] = useState('')
  
  
    const handleSave = async (e) => {
      e.preventDefault();
      const formData = {
        name,
        age,
        gender,
        height,
        location,
        preference,
        education,
        bio,
        interests,
        lookingFor
      };
      await updateProfile(formData)
      setIsedit(false)

     
    };

    const handleDelete = async () =>{

     const res = await deleteProfile()

      if(res){
        setDeleteModal(false)
        window.location.reload()
      }
    }


  
  
  
  return  (
    <div className="pb-20 h-[270vh] relative pt-10">
       {deleteModal && (
        <div className="absolute top-0 left-0 w-full h-full z-[999] backdrop-blur-sm flex items-start pt-[50vh] justify-center">
          <motion.div
            className=" p-6 px-16 shadow-2xl rounded-lg text-center "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card bg-neutral-400 hover:bg-neutral-600 text-neutral-content rounded-xl">
  <div className="card-body items-center text-center">
    <h2 className="card-title py-3 ">DELETE ACCOUNT ?</h2>
    <p className='my-3'>Are you sure you want to delete this account , permanently ?</p>
    <p className='my-3'>Dw ! we have made this place to be deleted permanently and securely aswell.</p>
    <div className="card-actions justify-end my-3">
      <button onClick={()=>setDeleteModal(false)} className="btn btn-primary px-5 rounded-lg hover:text-base-300">Cancel</button>
      <button onClick={()=>handleDelete()} className="btn btn-ghost px-5 rounded-lg hover:text-red-600">Delete</button>
    </div>
  </div>
</div>
          </motion.div>
        </div>
      )}
      <div className='flex flex-row'>
      <div className='w-2/3 h-screen ml-[6vw]'>
      <div className="flex items-center justify-center my-3 mt-16 w-full">
      <FloatingDock
        items={links}
      />
      
    </div>

      <div className="max-w-xl mx-auto flex flex-row justify-center px-2  py-8">
      
          

        <div className="bg-base-300 rounded-xl w-full p-6 pt-8 space-y-8">
          <div className="text-center">
            <p className="mt-2">Your account information</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || userData?.userimage || "/bc9fd4bd-de9b-4555-976c-8360576c6708.jpg"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
                />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isUpdatingUser ? "animate-pulse pointer-events-none" : ""}
                  `}
                  >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingUser}
                  />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdatingUser ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg ">
                {authuser?.name}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg">{authuser?.email}</p>
            </div>
          </div>
          <div className=' flex items-center gap-10 pt-4 justify-center'>

      <div className="radial-progress bg-primary text-primary-content border-primary border-4 " style={{ "--value": 20 }} role="progressbar">
               20%
      </div>
      <p>Your profile is 20% completed</p>
      </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{authuser.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full items-center flex justify-center'>

      
      <button className="hover:text-red-600" onClick={() => setDeleteModal(true)}>Delete Permanently</button>
      </div>
    </div>


   {!isedit ? 
   (<div className='w-full  min-h-screen '>
    <div className="max-w-3xl mx-auto flex flex-col gap-7 justify-center pb-14 p-4 py-8">
         <div className="w-full flex flex-row  items-center">

          <motion.hr className="w-full h-0.5 bg-zinc-900 " initial={{ width: "0%" }}  animate={{ width: "140%" }}  transition={{ duration: 2.4, ease: "easeInOut" }} />
          <h1 className="text-4xl font-semibold  w-full pl-4 pt-8 mb-10 leckerli-one-regular leading-none capitalize">
                   Personal Details
          </h1>
         </div>

        <div className="bg-base-300/30 rounded-xl p-6 space-y-8">
        <div className="text-center items-center pb-6 justify-between flex flex-row">
             <div className='w-7'></div>
              <p className="mt-2">Your profile information</p>
              <button onClick={()=>setIsedit(true)} className='mt-2 pr-3 items-center hover:text-rose-500 flex gap-1 flex-row'><p>edit</p><IconPencil size={18} /></button>
  
            </div>
          

          <div className="space-y-6 w-full pb-12">
            <div className="space-y-7 w-full mt-2">
              <div className="text-md px-4 text-base-400  flex justify-between items-center gap-2">
            <div className='flex flex-row items-center gap-4'>

               
                <User className="w-4 h-4 mr-6" />
                Full Name
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
              </div>
              <p className="px-4 mx-4 py-2.5 bg-base-100 shadow-2xl rounded-lg ">
                {userData?.name}</p>
            </div>

            <div className="space-y-7 mt-2">
            <div className="text-md px-4 text-base-400 flex justify-between items-center gap-2">
            <div className='flex flex-row items-center gap-4'>

            <Calendar className="w-4 h-4 mr-6" />
                 Age
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

             </div>
             <p className="px-4 mx-4 py-2.5 bg-base-100 shadow-2xl rounded-lg ">
                {userData?.age}</p>

            
            </div>
            
            <div className="space-y-7">
              <div className="text-md px-4 text-base-400 justify-between flex items-center gap-2">
            <div className='flex flex-row items-center gap-4'>

                <Users className="w-4 h-4 mr-6" />
                Gender
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

              </div>
              <p className="px-4 mx-4 py-2.5 bg-base-100 shadow-2xl rounded-lg ">
              {userData?.gender}</p>
                
            </div>
            
          <div className="space-y-7">
            <div className="text-md px-4 text-base-400 justify-between flex items-center gap-2">
            <div className='flex flex-row items-center justify-between gap-4'>
            <div className='flex flex-row items-center gap-4'>

              <Ruler className="w-4 h-4 mr-6" />
                  Height
            </div>
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

            </div>
            <p className="px-4 mx-4 py-2.5 bg-base-100 shadow-2xl rounded-lg ">
                {userData?.height}</p>
            </div>
            
            <div className="space-y-7">
            <div className="text-md px-4 text-base-400 flex items-center justify-between gap-2">
            <div className='flex flex-row items-center gap-4'>

            <Globe className="w-4 h-4 mr-6" />
                 Location
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

             </div>
             <p className="px-4 mx-4 py-2.5 bg-base-100 shadow-2xl rounded-lg ">
             {userData?.location}</p>   
            </div>

            <div className="space-y-7">
              <div className="text-md px-4 text-base-400 flex items-center justify-between gap-2">
            <div className='flex flex-row items-center gap-4'>

                <Sliders  className="w-4 h-4 mr-6" />
                 Preference
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

              </div>
              <p className="px-4 mx-4 py-2.5 bg-base-100 shadow-2xl rounded-lg ">
              {userData?.preference}</p>

            </div>

            <div className="space-y-7">
            <div className="text-md px-4 text-base-400 flex justify-between items-center gap-2">
            <div className='flex flex-row items-center gap-4'>

                <GraduationCap   className="w-4 h-4 mr-6" />
                 Education
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

              </div>
             <p className="px-4 mx-4 py-2.5 shadow-2xl bg-base-100 rounded-lg ">
                {userData?.education}</p>
            </div>

            <div className="space-y-7 w-full">
              <div className="text-md px-4 text-base-400 flex justify-between items-center gap-2">
            <div className='flex flex-row items-center gap-4'>

                <MessageSquare className=" pt-1 w-4 h-4 mr-6" />
              Bio
            </div>
              <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
              </div>
              <p className="px-4 mx-3 py-2.5 rounded-2xl shadow-2xl  bg-base-100 text-wrap break-words min-h-[50px] max-h-[150px] overflow-auto ">
                {userData?.bio}</p>
            </div>


            <div className="space-y-7">
            <div className="text-md px-4 text-base-400 mb-5 justify-between flex items-center gap-2">
            <div className='flex flex-row items-center gap-4'>

            <Sparkle  className="w-4 h-4  mr-6" />
                 Interests
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>

             </div>
             <p className="px-4 mx-4 py-2.5 shadow-2xl bg-base-100 rounded-lg ">
             {userData?.interests ? (Object.keys(userData?.interests).join(", ")) : (null)}</p>
               
        
            </div>

            <div className="space-y-7  ">
              <div className="text-md px-4 text-base-400 flex items-center justify-between gap-2">
            <div className='flex flex-row items-center gap-4'>

                <Users className="w-4 h-4 mr-6" />
                Looking For
            </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
              </div>
              <p className="px-4 mx-4 py-2.5 shadow-2xl bg-base-100 rounded-lg  ">
                {userData?.lookingfor}</p>

               
            </div>

          </div>
            
        </div>
      </div>

    </div>) 
    : 
    (<div className='w-full  h-screen pb-10 mb-4'>
      <div className="max-w-3xl mx-auto flex flex-col gap-7 justify-center p-4 py-8">
           <div className="w-full flex flex-row  items-center">
  
            <motion.hr className="w-full h-0.5 bg-zinc-900 " initial={{ width: "0%" }}  animate={{ width: "140%" }}  transition={{ duration: 2.4, ease: "easeInOut" }} />
            <h1 className="text-4xl font-semibold  w-full pl-4 pt-8 mb-10 leckerli-one-regular leading-none capitalize">
                     Personal Details
            </h1>
           </div>
  
          <div className="bg-base-300/30 rounded-xl p-6 space-y-8">
            <div className="text-center items-center pb-6 justify-between flex flex-row">
             <div className='w-7'></div>
              <p className="mt-2">Your profile information</p>
              <button onClick={()=>setIsedit(false)} className='mt-2 pr-3 hover:text-rose-500'>cancel</button>
  
            </div>
            
  
            <div className="space-y-6 w-full">
              <div className="space-y-7 w-full mt-2">
                <div className="text-md px-4 text-base-400  flex justify-between items-center gap-2">
              <div className='flex flex-row items-center gap-4'>
  
                 
                  <User className="w-4 h-4 mr-6" />
                  Full Name
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
                </div>
            <input type="text" placeholder="Your username" className="input bg-base-300 input-ghost border-none rounded-sm w-full" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
  
              <div className="space-y-7 mt-2">
              <div className="text-md px-4 text-base-400 flex justify-between items-center gap-2">
              <div className='flex flex-row items-center gap-4'>
  
              <Calendar className="w-4 h-4 mr-6" />
                   Age
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
               </div>
               <select className="select bg-base-300 select-ghost border-none px-12 scrollbar-hide rounded-sm w-1/3" value={age} onChange={(e) => setAge(e.target.value)} >
                     {Array.from({ length: 99 - 18 + 1 }, (_, i) => (
                       <option key={i} value={18 + i}>
                         {18 + i}
                       </option>
                     ))}
               </select>
              </div>
              
              <div className="space-y-7">
                <div className="text-md px-4 text-base-400 justify-between flex items-center gap-2">
              <div className='flex flex-row items-center gap-4'>
  
                  <Users className="w-4 h-4 mr-6" />
                  Gender
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
                </div>
  
                 <div className="grid grid-cols-2 md:grid-cols-3 p-2 gap-2">
                   {genderOptions.map((option) => (
                     <button
                       key={option.value}
                       onClick={() => setGender(option.label)}
                       className={`px-4 py-2 rounded-md text-center transition-all duration-300 border border-gray-700 hover:bg-zinc-700 hover:text-white ${
                         gender === option.label ? "bg-blue-500 text-white" : "bg-base-200 "
                       }`}
                     >
                       {option.label}
                       {gender === option.label && (
                         <Check className="w-4 h-4 inline ml-2 text-white" />
                       )}
                     </button>
                   ))}
                 </div> 
              </div>
              
            <div className="space-y-7">
              <div className="text-md px-4 text-base-400 justify-between flex items-center gap-2">
              <div className='flex flex-row items-center justify-between gap-4'>
              <div className='flex flex-row items-center gap-4'>
  
                <Ruler className="w-4 h-4 mr-6" />
                    Height
              </div>
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
              </div>
              <select className="select bg-base-300 select-ghost border-none px-12 scrollbar-hide rounded-sm w-1/3" value={height} onChange={(e) => setHeight(e.target.value)}>
                    {Array.from({ length: 3 * 12 + 10 + 1 }, (_, i) => {
                      const feet = Math.floor((4 * 12 + i) / 12);
                      const inches = (4 * 12 + i) % 12;
                      return (
                        <option key={i} value={`${feet}'${inches}"`}>
                          {`${feet}'${inches}"`}
                        </option>
                      );
                    })}
                </select>
              </div>
              
              <div className="space-y-7">
              <div className="text-md px-4 text-base-400 flex items-center justify-between gap-2">
              <div className='flex flex-row items-center gap-4'>
  
              <Globe className="w-4 h-4 mr-6" />
                   Location
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
               </div>
               <select className="select bg-base-300 select-ghost border-none px-12 scrollbar-hide rounded-sm w-1/3"  value={location}  onChange={(e) => setLocation(e.target.value)}>
                     {indianCities.map((city, index) => (
                       <option key={index} value={city}>
                         {city}
                       </option>
                     ))}
                </select>            
              </div>
  
              <div className="space-y-7">
                <div className="text-md px-4 text-base-400 flex items-center justify-between gap-2">
              <div className='flex flex-row items-center gap-4'>
  
                  <Sliders  className="w-4 h-4 mr-6" />
                   Preference
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
                </div>
                <select className="select bg-base-300 select-ghost border-none px-12 scrollbar-hide py-1 rounded-sm w-full"  value={preference}  onChange={(e) => setPreference(e.target.value)}>
                     {relationPrefrence.map((city, index) => (
                       <option key={index} value={city}>
                         {city}
                       </option>
                     ))}
                </select> 
              </div>
              <div className="space-y-7">
              <div className="text-md px-4 text-base-400 flex justify-between items-center gap-2">
              <div className='flex flex-row items-center gap-4'>
  
                  <GraduationCap   className="w-4 h-4 mr-6" />
                   Education
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
                </div>
                <select className="select bg-base-300 select-ghost border-none px-12 scrollbar-hide py-1 rounded-sm w-full"  value={education}  onChange={(e) => setEducation(e.target.value)}>
                     {educationLevels.map((city, index) => (
                       <option key={index} value={city}>
                         {city}
                       </option>
                     ))}
                </select> 
              </div>
  
              <div className="space-y-7 w-full">
                <div className="text-md px-4 text-base-400 flex justify-between items-center gap-2">
              <div className='flex flex-row items-center gap-4'>
  
                  <MessageSquare className=" pt-1 w-4 h-4 mr-6" />
                Bio
              </div>
                <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
                </div>
                <input type="text" placeholder="your bio" className="input bg-base-300 input-ghost border-none rounded-sm w-full" value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>
              <div className='w-full rounded-2xl shadow-2xl bg-base-100 my-2 p-3 text-wrap break-words min-h-[50px] max-h-[150px] overflow-auto'>{bio}</div>
  
              <div className="space-y-7">
              <div className="text-md px-4 text-base-400 mb-5 justify-between flex items-center gap-2">
              <div className='flex flex-row items-center gap-4'>
  
              <Sparkle  className="w-4 h-4  mr-6" />
                   Interests
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
  
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                      {interestOptions.map(({ label }) => {
                        const isActive = interests[label];
              
                        return (
                          <motion.button key={label + isActive} 
                            onClick={() => handleInterestSelect(label)}
                            className={`relative flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-700 hover:bg-blue-600 hover:text-white ${
                              isActive ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"
                            }`} whileTap={{ scale: 1.9 }}>
  
                            {label}
                            {isActive && <Check className="w-5 h-5 text-white" />}
                
                            {isActive && (
                              <motion.div
                                key={label + isActive}
                                initial={{ rotate: 0 }}
                                animate={{ rotate: [0, 10, -10, 10, -10, 0] }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute inset-0" />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
              </div>
  
              <div className="space-y-7">
                <div className="text-md px-4 text-base-400 flex items-center justify-between gap-2">
              <div className='flex flex-row items-center gap-4'>
  
                  <Users className="w-4 h-4 mr-6" />
                  Looking For
              </div>
                  <hr className='w-1/6 mx-4 h-0.1 bg-zinc-100'/>
                </div>
  
                 <div className="grid grid-cols-2 md:grid-cols-3 p-2 gap-2">
                   {genderOptions.map((option) => (
                     <button
                       key={option.value}
                       onClick={() => setLookingFor(option.label)}
                       className={`px-4 py-2 rounded-md text-center transition-all duration-300 border border-gray-700 hover:bg-zinc-700 hover:text-white ${
                         lookingFor === option.label ? "bg-blue-500 text-white" : "bg-base-200 "
                       }`}
                     >
                       {option.label}
                       {lookingFor === option.label && (
                         <Check className="w-4 h-4 inline ml-2 text-white" />
                       )}
                     </button>
                   ))}
                 </div> 
              </div>
  
            </div>
            <div className='flex w-full justify-center my-4 py-4'>
  
                   <button onClick={handleSave} className="btn btn-wide bg-base-300 sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary rounded-xl">SAVE</button>
            </div>
              
          </div>
        </div>
  
      </div>)}


    </div>
    </div>
  )
}

export default Profile
