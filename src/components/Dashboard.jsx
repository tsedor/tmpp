import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const DashboardContainer = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card title="Nowe wiadomości" number={123} />
      <Card title="Nowe prośby o kontakt" number={456} />
      <Card title="Jakiś index" number={789} />
    </DashboardContainer>
  )
}

export default Dashboard;