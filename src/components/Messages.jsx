import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchMessages } from '../actions/messageAction';

const MessagesList = styled.ul`
  background-color: #ffffff;
  border: 1px #efefef solid;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const MessagesListItem = styled.li`
  border-bottom: 1px #efefef solid;
  display: flex;
  flex-direction: column;
  margin: 1em;
  &:last-child {
    border-bottom: none;
  }
`;
const MessageTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;
const MessageDate = styled.span`
  color: #87868e;
  font-size: 14px;
`;
const MessageDetails = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const Messages = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const messages = useSelector(state => state.messages);

  useEffect(() => {
    dispatch(fetchMessages(token))
  })

  return (
    <>
      <MessagesList>
        {messages.map(message => (
          <MessagesListItem key={message.id}>
            <MessageTitle>Prosty landpage</MessageTitle>
            <MessageDate>2020-08-09</MessageDate>
            <MessageDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, est fugit voluptatum a facere sit consectetur veniam nulla amet blanditiis? Officiis provident at molestiae neque est recusandae numquam fuga? Et.</MessageDetails>
          </MessagesListItem>
        ))}
        <MessagesListItem>
          <MessageTitle>Prosty landpage</MessageTitle>
          <MessageDate>2020-08-09</MessageDate>
          <MessageDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, est fugit voluptatum a facere sit consectetur veniam nulla amet blanditiis? Officiis provident at molestiae neque est recusandae numquam fuga? Et.</MessageDetails>
        </MessagesListItem>
        <MessagesListItem>
          <MessageTitle>Strona domowa</MessageTitle>
          <MessageDate>2020-08-09</MessageDate>
          <MessageDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo nam itaque atque excepturi quod sit ex minus at enim, laboriosam ratione repudiandae maiores unde? Modi?</MessageDetails>
        </MessagesListItem>
        <MessagesListItem>
          <MessageTitle>Wizytówka</MessageTitle>
          <MessageDate>2020-08-09</MessageDate>
          <MessageDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sed nam vitae delectus quisquam architecto repellendus voluptas eos, maiores officiis ad et temporibus molestiae consectetur doloribus ex natus adipisci laboriosam cupiditate. Libero, harum! Corrupti libero maiores eum officiis, aliquam neque.</MessageDetails>
        </MessagesListItem>
      </MessagesList>
    </>
  )
}

export default Messages;