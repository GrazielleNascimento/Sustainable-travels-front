import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  bbackground-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-width: 300px;
  text-align: center;
  cursor: pointer;
  border: 3px solid ${props => (props.isSelected ? '#4CAF50' : 'transparent')};
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: scale(1.05);
    border-color: #4CAF50;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const CardContent = styled.div`
  padding: 15px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const Detail = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const CardGuide = ({ guide, isSelected, onClick }) => {
  const { imageUrl, name, language } = guide;

  return (
    <CardContainer isSelected={isSelected} onClick={onClick}>
      <CardImage src={imageUrl} alt={`Guide ${name}`} />
      <CardContent>
        <Title>{name}</Title>
        <Detail><strong>Language:</strong> {language}</Detail>
      </CardContent>
    </CardContainer>
  );
};

export default CardGuide;
