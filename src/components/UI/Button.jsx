import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ type }) => type === 'primary' ? '#4279ee' : type === 'danger' ? '#ed725a' : '#22b76f'};
  border: 1px #efefef solid;
  border-radius: 0;
  color: #fff;
  font-weight: 300;
  margin: 1em 1em 0 0;
  padding: .7em 1em;
  min-width: ${({ width }) => width ?? '150px' };
`;

export default Button;