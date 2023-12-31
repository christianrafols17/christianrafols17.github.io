import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import { BsArrowRightSquare } from "react-icons/bs"
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className='px-4 h-screen w-full bg-gradient-to-b from-black via-black to-gray-900'>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className=' text-3xl sm:text-6xl font-bold text-white'>
                    Hi, I'm Christian Rafols
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Creative and Technical Web Developer
                </p>
                <div>
                    <Link to="Projects" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-800 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300 ml-2'>
                            <BsArrowRightSquare />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my-profile-picture" className=' rounded-2xl mx-auto w-2/3 md:w-full max-w-md'/>
            </div>
        </div>
    </div>
  )
}

export default Home