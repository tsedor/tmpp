import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment'

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
  const messages = useSelector(state => state.messages.data);

  console.log(messages);

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [])

  return (
    <>
      <MessagesList>
        { messages && messages.map(message => (
          <MessagesListItem key={ message.id }>
            <MessageTitle>{ message.name }</MessageTitle>
            <MessageDate>{ moment(message.created_at).format('DD.MM.YYYY H:mm:s') }</MessageDate>
            <MessageDetails>{ message.message }</MessageDetails>
          </MessagesListItem>
        ))}
      </MessagesList>
    </>
  )
}

export default Messages;