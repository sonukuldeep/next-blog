import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-7xl space-x-2 mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-5 h-40'>
        <h1 className='text-3xl md:text-4xl capitalize'>The daily blog</h1>
        <h2 className='text-xl text-center md:text-left md:text-2xl'>"If <span className='underline decoration-2 decoration-[pink]'>you</span> cannot do <span className='underline decoration-2 decoration-[pink]'>great things</span>, do small things in a <span className='underline decoration-2 decoration-[pink]'>great way.</span>" -Napoleon Hill</h2>
    </div>
  )
}

export default Banner