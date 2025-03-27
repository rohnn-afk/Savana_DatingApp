import FloatingPhn from '../../Componentes/UI/FloatingPhn'

const Journey = () => {
  return (
    <div>
      <div className='w-[96vw] mb-2 h-[88vh]  bg-zinc-900 flex flex-row rounded-sm justify-between p-10 items-center'>
              
             
      <div className='w-1/2 h-full flex items-center justify-center'>
              <FloatingPhn/>

</div>

              <div className='w-3/4 h-full flex flex-col gap-8 items-center justify-center'>

                <h1 className='text-6xl text-zinc-100'>
                      journey

                </h1>
                <h1 className='text-2xl text-rose-500'>
                      savana

                </h1> 
                <h1 className='text-lg text-zinc-100'>
                    download the app now.
                </h1>

                <div className='h-44 w-44 rounded-lg bg-white'></div>


              </div>

            </div>
    </div>
  )
}

export default Journey
