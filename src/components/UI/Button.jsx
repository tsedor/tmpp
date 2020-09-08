import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ type }) => type === 'primary' ? '#4279ee' : type === 'danger' ? '#ed725a' : '#aaed2b'};
  border: 1px #efefef solid;
  border-radius: 3px;
  color: ${({ type }) => type === 'primary' ? '#ffffff' : '#000000'};
  font-weight: 600;
  margin: 1em 1em 0 0;
  padding: .5em 1em;
`;

export default Button;