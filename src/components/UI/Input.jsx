import styled from 'styled-components';

const Input = styled.input`
  background-color: #fff;
  border: 1px #efefef solid;
  border-radius: 0;
  margin: 1em 1em 0 0;
  padding: .7em 1em;
  min-width: ${({ width }) => width ?? '150px' };
`;

export default Input;