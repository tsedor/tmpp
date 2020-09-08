import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px #efefef solid;
  padding: 1em;
`;

const CardNumber = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;
const CardTitle = styled.p`
  color: #87868e;
  font-size: 14px;
  margin: .7em 0 0 0;
`;

const Card = ({ number, title }) => {
  return (
    <CardContainer>
      <CardNumber>{number}</CardNumber>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

export default Card;