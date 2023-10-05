import React from 'react'
function Home() {
  return (
    <div>
      <div className='bg-[url("/images/image53.svg")] h-screen bg-no-repeat bg-cover text-white flex flex-col gap-20 p-20'> 
        <h1 className='text-8xl font-bold'>You got the travel plans, we got the travel vans.</h1>
        <p className='text-4xl'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button className='p-4 w-full bg-orange-500 border border-orange-500 rounded-md font-semibold'>Find your van</button>
      </div>
    </div>
  )
}

export default Home
