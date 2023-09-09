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
            <p className=' text-sm pt-4 md:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis nostrum nisi ipsum ipsam illum magnam quas eos. Ullam, vero? Velit inventore soluta minima eaque magni dolorum totam qui fugit rem. Quod enim, dicta nihil porro repellat saepe atque? Placeat, ratione vero perspiciatis repudiandae iusto reiciendis neque provident maiores dolores.
            </p>
            <br />
            <p className=' text-sm pt-4 md:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, omnis nostrum nisi ipsum ipsam illum magnam quas eos. Ullam, vero? Velit inventore soluta minima eaque magni dolorum totam qui fugit rem. Quod enim, dicta nihil porro repellat saepe atque? Placeat, ratione vero perspiciatis repudiandae iusto reiciendis neque provident maiores dolores.
            </p>
        </div>
    </div>
  )
}

export default About