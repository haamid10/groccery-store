import React from 'react'

const Main = () => {
  return (
      <div className='  '>
           <h1 className=' mt-10 mx-8 text-2xl font-bold tracking-wide mx-10'>Some Fresh fruits that we have this weekend </h1>
      <section id='content' className='mt-10 mx-8 flex gap-4  shadow-md shadow-gray-400  p-12 rounded-md bg-gray-100'>
         
          
      <div id='card' className=' shadow bg-white w-80 h-84 relative rounded-md '>
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
        <button  className='font-bold '>Buy</button>
    </div>



    </div>
    
<section >
    <div id='card' className=' shadow bg-white w-80   relative rounded-md '>
    <div className='m-3'>
        <img className=' mx- max-h-60  ' src='./aple.jpg' alt="product item" />

    </div>
    <div  className='px-3 my-3'>
        <h1 className=' text-2xl tracking-wider font-bold text-green-500'>Banana</h1>
        <p className='text-sm  text-gray-500'>wa qoraal qeexaya product  wa qoraal qeexaya product</p>
    </div>
    <div className=' bg-green-500 inline-block text-white rounded-md px-1 py-1 absolute    top-1  left-0 '>
        <span className='text-lg font-bold tracking-wide'>3.99</span>

    </div>
    <div className='  bg-green-500 py-50 text-center font-bold text-2xl text-white rounded-b-md'>
        <button className='font-bold '>Buy</button>
    </div>



    </div>
    </section>
   
      
<section >
    <div id='card' className=' shadow bg-white w-80 relative rounded-md '>
    <div className='m-3'>
        <img className=' mx- max-h-60  ' src='./grape.jpg' alt="product item" />

    </div>
    <div  className='px-3 my-3'>
        <h1 className=' text-2xl tracking-wider font-bold text-green-500'>grape</h1>
        <p className='text-sm  text-gray-500'>wa qoraal qeexaya product  wa qoraal qeexaya product</p>
    </div>
    <div className=' bg-green-500 inline-block text-white rounded-md px-1 py-1 absolute    top-1  left-0 '>
        <span className='text-lg font-bold tracking-wide'>3.99</span>

    </div>
    <div className='  bg-green-500 py-50 text-center font-bold text-2xl text-white rounded-b-md'>
        <button className='font-bold '>Buy</button>
    </div>



    </div>
    </section>
   
    </section>
    </div>


    
   
  )
}

export default Main