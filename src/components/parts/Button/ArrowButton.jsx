import styled from 'styled-components';

export const ArrowButton = (props) => {
  return (
    <>
      <StyledArrowButton data-level={props.color}>
        {props.txt}
      </StyledArrowButton>
    </>
  );
};

const StyledArrowButton = styled.button`
  width: 10rem;
  background: white;
  color: gray;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid gray;
  border-radius: 3px;
  position: relative;
  &::after {
    content: '';
    border-top: 2px solid gray;
    border-right: 2px solid gray;
    transform: rotate(45deg) translateY(-50%);
    width: 0.7rem;
    height: 0.7rem;
    display: inline-block;
    position: absolute;
    top: 45%;
    right: 1rem;
  }

  &[data-level='green'] {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
    &::after {
      content: '';
      border-top: 2px solid #3c763d;
      border-right: 2px solid #3c763d;
    }
  }

  &[data-level='blue'] {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
    &::after {
      content: '';
      border-top: 2px solid #31708f;
      border-right: 2px solid #31708f;
    }
  }

  &[data-level='yellow'] {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
    &::after {
      content: '';
      border-top: 2px solid #8a6d3b;
      border-right: 2px solid #8a6d3b;
    }
  }

  &[data-level='red'] {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
    &::after {
      content: '';
      border-top: 2px solid #a94442;
      border-right: 2px solid #a94442;
    }
  }
`;
