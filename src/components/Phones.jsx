import React,  { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { fetchPhones } from '../actions/phoneAction';
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
  flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: center;
  padding: 1em;
  margin: 10px auto;
`;

const PhoneNumber = styled.span`
  font-size: 15px;
  font-weight: 700;
  padding-right: 20px;
`;
const PhoneDate = styled.span`
  color: #87868e;
  font-size: 12px;
`;
const PhoneButtons = styled.div`
  float: right;
`;

const Phones = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const phones = useSelector(state => state.phones.data);

  useEffect(() => {
    dispatch(fetchPhones(token))
  }, [])

  return (
    <PhonesList>
       { phones && phones.map(phone => (
      <PhonesListItem key={ phone.id }>
        <div>
        <PhoneNumber>{ phone.phoneNumber }</PhoneNumber>
        <PhoneDate>{ moment(phone.created_at).format('DD.MM.YYYY HH:mm:ss') }</PhoneDate>
        </div>
        <PhoneButtons>
          <Button width={ "50px" }>potwierdź</Button>
          <Button width={ "50px" } type="danger">usuń</Button>
        </PhoneButtons>
      </PhonesListItem>
       ))}
    </PhonesList>
  )
}

export default Phones;