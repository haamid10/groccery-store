import React from 'react'

const Main = () => {
  return (
      <section id='content' className='mt-10 mx-8 flex gap-4'>
      <div id='card' className=' shadow bg-white w-80 relative rounded-md '>
    <div className='m-3'>
        <img className=' mx-10 max-h-60  ' src='./banana.jpg' alt="product item" />

    </div>
    <div  className='px-3 my-3'>
        <h1 className=' text-2xl tracking-wider font-bold text-green-500'>Banana</h1>
        <p className='text-sm  text-gray-500'>wa qoraal qeexaya product  wa qoraal qeexaya product</p>
    </div>
    <div className=' bg-green-500 inline-block text-white rounded-md px-1 py-1 absolute    top-1  left-0 '>
        <span className='text-lg font-bold tracking-wide'>2.99</span>

    </div>
    <div className=' bg-green-500 py-50 text-center font-bold text-2xl text-white rounded-b-md'>
        <button className='font-bold '>Buy</button>
    </div>



    </div>

    <div id='card' className=' shadow bg-white w-80 relative rounded-md '>
    <div className='m-3'>
        <img className=' mx-3 max-h-72  ' src='./aple.jpg' alt="product item" />

    </div>
    <div  className='px-3 my-3'>
        <h1 className=' text-2xl tracking-wider font-bold text-green-500'>Banana</h1>
        <p className='text-sm  text-gray-500'>wa qoraal qeexaya product  wa qoraal qeexaya product</p>
    </div>
    <div className=' bg-green-500 inline-block text-white rounded-md px-1 py-1 absolute    top-1  left-0 '>
        <span className='text-lg font-bold tracking-wide'>3.99</span>

    </div>
    <div className=' bg-green-500 py-50 text-center font-bold text-2xl text-white rounded-b-md'>
        <button className='font-bold '>Buy</button>
    </div>



    </div>


    
    </section>
  )git 
}

export default Main