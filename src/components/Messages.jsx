import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment'

import { fetchMessages } from '../actions/messageAction';

const MessagesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const MessagesListItem = styled.li`
  border: 1px #efefef solid;
  display: flex;
  flex-direction: column;
  margin: 1em;
  background-color: #fff;
  padding: 1em;
  margin: 10px auto;
`;
const MessageTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;
const MessageDate = styled.span`
  color: #87868e;
  font-size: 12px;
  margin-top: 10px;
`;
const MessageDetails = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
`;

const Messages = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const messages = useSelector(state => state.messages.data);

  useEffect(() => {
    dispatch(fetchMessages(token))
  }, [])

  return (
    <>
      <MessagesList>
        { messages && messages.map(message => (
          <MessagesListItem key={ message.id }>
            <MessageTitle>{ message.email } ({  message.name })</MessageTitle>
            <MessageDate>{ moment(message.created_at).format('DD.MM.YYYY HH:mm:ss') }</MessageDate>
            <MessageDetails>{ message.message }</MessageDetails>
          </MessagesListItem>
        ))}
      </MessagesList>
    </>
  )
}

export default Messages;