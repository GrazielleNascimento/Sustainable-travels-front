import React from 'react';
import styled from 'styled-components';
import { FaLeaf } from 'react-icons/fa';

const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 30px 80px;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    background-color: #388e3c;
  }

  & > svg {
    margin-right: 8px;
  }
`;

const Icon = styled.div`
  font-size: 32px;
  color: #fff;
  margin-right: 10px;
`;


const ItineraryButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Icon>
      <FaLeaf />
    </Icon>
     Generate Itinerary
  </Button>
);

export default ItineraryButton;
