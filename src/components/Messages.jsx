import React from 'react';
import styled from 'styled-components';

const MessagesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const MessagesListItem = styled.li`
  background-color: #ffffff;
  border: 1px #efefef solid;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const Messages = () => {
  return (
    <MessagesList>
      <MessagesListItem>
      </MessagesListItem>
    </MessagesList>
  )
}

export default Messages;