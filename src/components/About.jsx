import React from 'react'

const About = () => {
  return (
    <div name="About" className=' w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500 p-2'>
                    About
                </p>
            </div>
            <p className=' text-sm pt-4 md:text-xl text-justify'>
                Hello, I'm Christian John Paul Rafols, a tech enthusiast who's been immersed in technology since high school. I proudly hold a Bachelor of Science in Information Technology and aspire to specialize as a web developer. My skill set includes proficiency in HTML5, CSS3, JavaScript, and frameworks like React, Tailwind, and Angular. Additionally, I have a solid foundation in back-end technologies, including SQL, PHP, Pythona and frameworks like Laravel.
            </p>
            <br />
            <p className=' text-sm pt-4 md:text-xl text-justify'>
                My passion lies in crafting engaging web experiences that blend creativity with functionality. I believe in the transformative power of technology to make a positive impact. Let's explore the endless possibilities of the digital world together.
            </p>
        </div>
    </div>
  )
}

export default About