import Link from "next/link";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <nav className='w-screen'>
      <ul className='flex justify-between items-center px-4'>
        <li className='border-l border-gray-800 w-1/3 text-center'>
          <Link href='/works'>
            <a className='text-md sm:text-2xl'>Works</a>
          </Link>
        </li>
        <li className='border-l border-gray-800 w-1/3 text-center'>
          <Link href='/biography'>
            <a className='text-md sm:text-2xl'>My Biography</a>
          </Link>
        </li>
        <li className='border-l border-r border-gray-800 w-1/3 text-center'>
          <Link href='/skills'>
            <a className='text-md sm:text-2xl'>Skills</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
