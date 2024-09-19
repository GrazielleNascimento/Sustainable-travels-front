import React from 'react';
import styled from 'styled-components';
import { FaLeaf } from 'react-icons/fa'; 

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;

const LeafIcon = styled(FaLeaf)`
  width: 40px;
  height: 40px;
  color: green;
  animation: sway 1s infinite alternate;

  @keyframes sway {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }
`;

const LoadingText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #2e7d32;
`;

const Loading = () => (
  <SpinnerContainer>
    <LeafIcon />
    <LoadingText>Generating your sustainable itinerary...</LoadingText>
    <br />
    <br />
    <br />
  </SpinnerContainer>
);

export default Loading;
