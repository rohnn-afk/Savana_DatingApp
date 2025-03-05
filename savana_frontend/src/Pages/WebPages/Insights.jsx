
const Insights = () => {
    return (
      <div >
          <div className='w-full  h-[100vh] bg-zinc-100 rounded-3xl p-18 rounded-4xl'>
              <h1 className='text-7xl pt-14 underline font-bold pl-16 text-zinc-800 lexend-exa-uniquifier tracking-tighter'>Our Family reviews</h1>
          <div className='w-full h-[70vh] px-10 bg-red-100'></div>
          </div>
  
          {/* {cards} */}
          <div data-scroll data-scroll-speed=".3" data-scroll-section >
  
          <div className='flex items-center justify-center p-10'><h1 className='text-8xl text-zinc-100 uppercase leckerli-one-regular'>COMPANY</h1></div>
          <div className='p-25 w-full h-[70vh] rounded-3xl shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] border-t-1 border-zinc-800 flex flex-row justify-center bg-zinc-100'>
  
              <div className='container mt-10 w-3/4 rounded-xl flex justify-center items-center m-20 bg-zinc-100'>
                  <div className='cards shadow-[0_12px_30px_rgba(0,0,0,0.9)] bg-zinc-800 rounded-xl relative  h-full w-full flex items-center justify-center'>
                  <h1 className='text-7xl subpixel-antialiased prata-regular outfit-uniquifier tracking-widest text-rose-400'>SAVANA</h1>
                  <button className='absolute left-10 bottom-10 text-xl px-3  border-2 rounded-full hover:text-white hover:bg-red-300 transition duration-300 ease-in-out text-red-300'><span className='text-md'>©</span>2025 savana.co</button>
                  </div> 
              </div>
              <div className='container mt-10  w-3/4 m-8 flex flex-row gap-8 '>
                  <div className='cards shadow-[0_12px_30px_rgba(0,0,0,0.9)] rounded-xl w-1/2 overflow-hidden relative h-110 bg-rose-900'>
                  <img src='/istockphoto-909568522-612x612.jpg'></img>
                  <div className="w-full h-[33vh] flex items-center justify-center">
                  <h1 className='text-5xl gowun-dodum-regular tracking-tighter '>Ratings</h1>
                  </div>
                  </div>
                  <div className='cards relative w-1/2 flex items-center justify-center object-cover object-center  overflow-hidden rounded-xl h-110  bg-gradient-to-br from-[#3a3a3a] via-[#5a5a5a] to-[#2a2a2a] shadow-[0_12px_30px_rgba(0,0,0,0.9)]'>
                  <img src='/Untitleddesign (1).png' className='w-3-4 h-3/4 rounded-xl'></img>
                  <button className='absolute left-23 bottom-3 text-xl px-3  rounded-full hover:text-white hover:bg-white-700 transition duration-300 ease-in-out text-gray-900'><span className='text-md'>©</span>delhiboys.ventuer</button>
                  </div>
              </div>
              
          </div>
  
        
          </div>
      </div>
    )
  }
  
  export default Insights
  