import React from 'react';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <ul className='flex'>
                <li className='p-10'>Contact</li>
                <li className='p-10'>Information</li>
            </ul>

            <div>

                <a >
                    <img src="logo512.png" alt="Logo" class="h-50 w-60" />
                    <span class="font-semibold text-gray-500 text-lg"></span>
                </a>
            </div>

            <div className="text-grey-300 hover:bg-red-500 hover:text-black block px-2 py-2 rounded-md text-base font-medium">
                <FaTwitter size={25} />
            </div>
            <div className="text-grey-300 hover:bg-red-500 hover:text-black block px-2 py-2 rounded-md text-base font-medium">
                <FaDiscord size={25} />
            </div>

        </div>
    )
}

export default Navbar