import React from 'react'
import NetflixClone from '../assets/netflix-landing-page-clone.png'
import EcommerceWebsite from '../assets/ecommerce-project.png'
import TodoApp from '../assets/todo-app.png'
import RecipeBook from '../assets/recipe-book-project.jpg'


const Projects = () => {
    const projects = [
        {
            id: 1,
            src: NetflixClone,
            demoUrl: 'https://christianrafols17.github.io/first-project/',
            codeUrl: 'https://github.com/christianrafols17/Projects',
            description: 'A Netflix Landing Page Clone created with Vanilla HTML, CSS, and JavaScript'

        },
        {
            id: 2,
            src: EcommerceWebsite,
            demoUrl: 'https://christianrafols17.github.io/ecommerce-website-project/',
            codeUrl: 'https://github.com/christianrafols17/ecommerce-website-project',
            description: 'An E-commerce Website for buying Donuts!, created with ReactJS and TailwindCSS using Vite'
        },
        {
            id: 3,
            src: TodoApp,
            demoUrl: 'https://christianrafols17.github.io/to-do-app/',
            codeUrl: 'https://github.com/christianrafols17/to-do-app',
            description: 'A simple To-do App made with Angular styled with TailwindCSS.'
        },
        {
            id: 4,
            src: RecipeBook,
            demoUrl: 'https://christianrafols17.github.io/recipe-book/',
            codeUrl: 'https://github.com/christianrafols17/recipe-book',
            description: 'A Recipe Book App made with ReactJS and TailwindCSS utilizing TheMealDB API'
        },
    ]

    const openUrl = (url) => {
        window.open(url);
    };

    return ( 
        <div name="Projects" className='bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-2 sm:px-0'>
                    {projects.map(({ id, src, demoUrl, codeUrl, description }) => (
                        <div key={ id } className='flex flex-col shadow-md shadow-gray-600 rounded-lg h-[280px]'>
                            <img src={src} alt="Project" className='w-full h-2/4 object-cover rounded-md duration-200 hover:scale-105'></img>
                            <p className='flex h-1/4 justify-center pt-1 text-center text-gray-500 text-sm px-1'> {description} </p>
                            <div className='flex items-center justify-center h-1/4'>
                                <button onClick={() => openUrl(demoUrl)} className=' w-1/2 h-1/5 px-6 m-6 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => openUrl(codeUrl)} className=' w-1/2 h-1/5 px-6 m-6 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects