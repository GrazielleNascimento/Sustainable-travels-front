import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #4CAF50; /* Verde sustentável */
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049; /* Tom mais escuro de verde */
    transform: scale(1.05);
  }

  &:active {
    background-color: #388e3c; /* Tom ainda mais escuro quando pressionado */
  }

  & > svg {
    margin-right: 8px; /* Espaço entre ícone e texto */
  }
`;

const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #fff;
`;

const ItineraryButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/>
    </Icon>
    Generate Itinerary
  </Button>
);

export default ItineraryButton;
