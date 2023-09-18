import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php.png'
import sql from '../assets/sql.png'
import python from '../assets/python.png'

import react from '../assets/react.png'
import angular from '../assets/angular.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'

import vscode from '../assets/vscode.png'
import github from '../assets/github.png'
import figma from '../assets/figma.png'

const Skills = () => {
    const languages = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: php,
            title: 'PHP',
            style: 'shadow-violet-400'
        },
        {
            id: 5,
            src: sql,
            title: 'SQL',
            style: 'shadow-cyan-400'
        },
        {
            id: 6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-400'
        }
    ]

    const frameworks = [
        {
            id: 1,
            src: react,
            title: 'ReactJS',
            style: 'shadow-cyan-400'
        },
        {
            id: 2,
            src: angular,
            title: 'Angular',
            style: 'shadow-red-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-600'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        }
    ]

    const others = [
        {
            id: 1,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 2,
            src: vscode,
            title: 'VSCode',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: figma,
            title: 'Figma',
            style: 'shadow-orange-500'
        }
    ]


    return (
        <div name="Skills" className=' bg-gradient-to-b from-gray-900 to-black w-full h-auto pt-28'>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                    <p className=' py-6'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-8 px-12 sm:px-0'>
                    <div className='w-full grid grid-cols-1 auto-rows-min'>
                        <h1> Languages </h1>
                        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8 px-2 sm:px-0'>
                            {languages.map(({ id, src, title, style }) => (
                                <div key={id} className={'flex flex-col h-[116px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+' '+style}>
                                    <div className="flex-grow flex flex-col justify-center items-center">
                                        <img src={src} alt="" className='w-14 py-auto mx-auto'/>
                                    </div>
                                    <div className="mt-auto">
                                        <p className='mt-4 text-sm md:text-lg'>{title}</p>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-1 auto-rows-min'>
                        <h1> Frameworks/Libraries </h1>
                        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8 px-2 sm:px-0'>
                            {frameworks.map(({ id, src, title, style }) => (
                                <div key={id} className={'flex flex-col h-[116px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+' '+style}>
                                    <div className="flex-grow flex flex-col justify-center items-center">
                                        <img src={src} alt="" className='w-14 py-auto mx-auto'/>
                                    </div>
                                    <div className="mt-auto">
                                        <p className='mt-4'>{title}</p>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-1 auto-rows-min'>
                        <h1> Other </h1>
                        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8 px-2 sm:px-0'>
                            {others.map(({ id, src, title, style }) => (
                                <div key={id} className={'flex flex-col h-[116px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+' '+style}>
                                    <div className="flex-grow flex flex-col justify-center items-center">
                                        <img src={src} alt="" className='w-14 py-auto mx-auto'/>
                                    </div>
                                    <div className="mt-auto">
                                        <p className='mt-4'>{title}</p>
                                    </div>
                                </div>
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills