import styled from 'styled-components';

export const Button = (props) => {
  return (
    <>
      <StyledButton data-level={props.color}>{props.txt}</StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  background: white;
  color: gray;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid gray;
  border-radius: 3px;

  &[data-level='green'] {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
  }

  &[data-level='blue'] {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
  }

  &[data-level='yellow'] {
    color: #8a6d3b;
    background-color: #fcf8e3;
    border-color: #faebcc;
  }

  &[data-level='red'] {
    color: #a94442;
    background-color: #f2dede;
    border-color: #ebccd1;
  }
`;
