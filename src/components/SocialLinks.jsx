import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {

    const list = [
        {
            id: 1,
            child: (
                <> 
                    LinkedIn <FaLinkedin size={30} /> 
                </>
            ),
            href: 'https://google.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <> 
                    GitHub <FaGithub size={30} /> 
                </>
            ),
            href: 'https://google.com',
        },
        {
            id: 3,
            child: (
                <> 
                    Gmail <HiOutlineMail size={30} /> 
                </>
            ),
            href: 'mailto:christianrafols367@gmail.com',
            style: 'rounded-br-md'
        }
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {list.map(({id, child, href, style}) => { return (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[-4px] hover:rounded-md duration-300' + ' ' + style}>
                <a href={href} className='flex justify-between items-center w-full text-white'> 
                    {child}
                </a>
                </li>
            )})}
        </ul>
    </div>
  )
}

export default SocialLinks