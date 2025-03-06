import ShuffleHero from '../../Componentes/UI/CardsHero'


const About = () => {
  return (
    <div data-scroll data-scroll-speed=".4" data-scroll-section className=' mt-[-40] shadow-[0_12px_30px_rgba(0,0,0,0.9)] flex gap-20 flex-col rounded-3xl overflow-hidden'>
        <div className='flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.9)] bg-amber-50 pb-10 mb-16 rounded-3xl '>

          <div className='h-[70vh] flex w-[85vw] mt-10'><ShuffleHero/></div>
          </div>
        <div className=' mt-[-20] w-full py-20 px-10 shadow-[0_12px_30px_rgba(0,0,0,0.9),0_-12px_30px_rgba(0,0,0,0.9)] bg-zinc-100/50 rounded-3xl  '>
            <h1 className='funnel-sans-uniquifier text-gray-900 text-6xl mb-20 mr-20 leading-[3.7vw]'>
              Our whole motive behind this project is to make it easy for people to meet the people that are right for them , we believe world is a small place with a lot of people, yet lonely . So, this is what we came up with.
              This is a premium society.</h1>
        <div className='w-full flex gap-1 border-t-[2px] pt-10 mt-25 border-rose-300'>
            
            <div className='w-1/2 mt-10'>
            <h1 className=' text-gray-900 text-7xl'>Our Approch :</h1>
            <button className='flex items-center gap-10 px-9 py-4 bg-zinc-900 mt-10 rounded-full text-white '>READ MORE
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 mt-12 h-[70vh] bg-red-700 rounded-2xl '>
            
            </div>

        </div>
        </div>

          
    </div>
  )
}

export default About
