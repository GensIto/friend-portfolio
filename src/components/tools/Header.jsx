import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { pc, sp } from "../../hooks/media";

export const Header = () => {
  return (
    <header className='flex justify-center items-center p-4'>
      <Link href='/'>
        <LogoBox>
          <Image
            src='/images/logo/logo.svg'
            alt='logo'
            width='250'
            height='100'
          />
        </LogoBox>
      </Link>
    </header>
  );
};

const LogoBox = styled.div`
  width: 10rem;
  ${sp`
  width: 10rem;
  `}
  ${pc`
    width: 20rem;
  `}
`;
