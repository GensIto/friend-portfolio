import styled from "styled-components";
import { pc } from "../../hooks/media";

export const Container = (props) => {
  return (
    <StyledContainer data-size={props.size}>{props.children}</StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  padding: 0 5vw;
  &[data-size="full"] {
    padding: 0;
  }
  &[data-size="mqfull"] {
    ${pc`
        padding: 0;
    `}
  }
`;
