import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className='flex  items-center justify-between flex-wrap bg-teal-500 p-6'> 
            <ul className='flex items-center flex-shrink-0 text-white mr-6'>
                <li className='fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"'>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className='fill-current h-8 2-'>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/store">
                        Store
                    </Link>
                </li>
            </ul>
           
        </nav>


    </div>
  )
}

export default Navbar