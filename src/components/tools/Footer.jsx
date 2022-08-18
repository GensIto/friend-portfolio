import styled from "styled-components";
import { pc, sp } from "../../hooks/media";

export const Footer = () => {
  return (
    <footer className='w-full h-12 flex justify-center items-center border-t'>
      <SmallTxt>Design : 2022 haruki matsuzaki</SmallTxt>
    </footer>
  );
};

const SmallTxt = styled.p`
  font-size: 14px;
  ${sp`
  font-size: 10px;
  `}
  ${pc`
    font-size: 16px;
  `}
`;
