import Link from "next/link";
import styled from "styled-components";

export const WorksNavbar = () => {
  return (
    <nav className='w-screen'>
      <ul className='flex justify-between items-center px-4'>
        <li className='border-l-2 border-gray-800 w-1/3 text-center'>
          <Link href='/works'>
            <a className='text-md sm:text-2xl'>Works</a>
          </Link>
        </li>
        <li className='border-l-2 border-gray-800 w-1/3 text-center'>
          <Link href='/biography'>
            <a className='text-md sm:text-2xl'>My Biography</a>
          </Link>
        </li>
        <li className='border-l-2 border-r-2 border-gray-800 w-1/3 text-center'>
          <Link href='/skills'>
            <a className='text-md sm:text-2xl'>Skills</a>
          </Link>
        </li>
      </ul>
      <h2 className='text-xl sm:text-2xl text-center my-6 font-normal'>
        Category
      </h2>
      <ul className='flex justify-center items-center'>
        <WorksNav className='w-1/4 min-w-max text-center p-1'>
          <Link href='/works/jobs'>
            <a className='text-md sm:text-2xl'>Jobs</a>
          </Link>
        </WorksNav>
        <WorksNav className='w-1/4 min-w-max text-center p-1'>
          <Link href='/works/artworks'>
            <a className='text-md sm:text-2xl'>ArtWoks</a>
          </Link>
        </WorksNav>
      </ul>
    </nav>
  );
};

const WorksNav = styled.li`
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1.6rem;
    width: 1.6rem;
    bottom: 0;
    right: 0;
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;
  }
`;
