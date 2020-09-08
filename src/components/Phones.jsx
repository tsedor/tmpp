import React from 'react';
import styled from 'styled-components';

import Button from './UI/Button';

const PhonesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const PhonesListItem = styled.li`
  background-color: #ffffff;
  border: 1px #efefef solid;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const PhoneNumber = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
const PhoneDate = styled.span`
  color: #87868e;
  font-size: 14px;
`;
const PhoneStatus = styled.span`
  font-weight: 600;
  margin: 1em 0 0 0;
`;
const PhoneButtons = styled.div``;

const Phones = () => {
  return (
    <PhonesList>
      <PhonesListItem>
        <PhoneNumber>606-999-888</PhoneNumber>
        <PhoneDate>2012-07-06</PhoneDate>
        <PhoneStatus>Status: do wykonania</PhoneStatus>
        <PhoneButtons>
          <Button>potwierdź</Button>
          <Button type="danger">usuń</Button>
        </PhoneButtons>
      </PhonesListItem>
    </PhonesList>
  )
}

export default Phones;