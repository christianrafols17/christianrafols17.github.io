import React from 'react'
import NetflixClone from '../assets/NetflixLandingPageClone.jpg'
import Sample1 from '../assets/sample1.jpg'
import Sample2 from '../assets/sample2.jpg'
import Sample3 from '../assets/sample3.jpg'



const Projects = () => {
    const projects = [
        {
            id: 1,
            src: NetflixClone,
            demoUrl: 'https://google.com',
            codeUrl: 'https://www.youtube.com'

        },
        {
            id: 2,
            src: Sample1,
            demoUrl: 'https://google.com',
            codeUrl: 'https://www.w3schools.com'
        },
        {
            id: 3,
            src: Sample2,
            demoUrl: 'https://google.com',
            codeUrl: 'https://www.youtube.com'
        },
        {
            id: 4,
            src: Sample3,
            demoUrl: 'https://google.com',
            codeUrl: 'https://www.youtube.com'
        },
    ]

    const openUrl = (url) => {
        window.open(url);
    };

    return ( 
        <div name="Projects" className='bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-2 sm:px-0'>
                    {projects.map(({ id, src, demoUrl, codeUrl }) => (
                        <div key={ id } className='flex flex-col shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="netflix-landing-page-clone" className='w-full h-full object-cover rounded-md duration-200 hover:scale-105'></img>
                            <div className='flex items-center justify-center '>
                                <button onClick={() => openUrl(demoUrl)} className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => openUrl(codeUrl)} className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects