import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-700 p-3 text-white'>
        <div className='flex justify-between items-center'>
            <div className='animate-pulse'>
              <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" alt="" className= 'w-10 h-10'/>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li className='cursor-pointer hover:text-blue-600'>Inicio</li>
                    <li className='cursor-pointer hover:text-green-600'>Acerca de</li>
                    <li className='cursor-pointer hover:text-yellow-600'>Servicios</li>
                    <li className='cursor-pointer hover:text-red-500'>Contacto</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header