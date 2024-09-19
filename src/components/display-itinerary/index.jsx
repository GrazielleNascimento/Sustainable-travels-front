import React from 'react';
import styled from 'styled-components';
import Section from '../section';

const ItineraryContainer = styled.div`
  background: #e8f5e9;
  border: 1px solid #c8e6c9;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ItineraryText = styled.div`
  font-size: 1em;
  line-height: 1.5;
  color: #333;

  h2 {
    color: #2e7d32;
  }

  h3 {
    margin-top: 20px;
    color: #388e3c;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;

    li {
      margin-bottom: 10px;
    }
  }
`;

const ItineraryDisplay = ({ itinerary }) => {
  return (
    <>
        <Section title="Your Sustainable Itinerary" description="Here is the itinerary generated with sustainable options for your trip" />
        <ItineraryContainer>
        <ItineraryText>
            {itinerary.split('\n').map((line, index) => {
            if (line.startsWith('##')) {
                return <h2 key={index}>{line.replace('## ', '')}</h2>;
            } else if (line.startsWith('**')) {
                return <h3 key={index}>{line.replace(/\*\*(.*?)\*\*/, '$1')}</h3>;
            } else if (line.startsWith('*')) {
                return <ul key={index}><li>{line.replace('* ', '')}</li></ul>;
            } else {
                return <p key={index}>{line}</p>;
            }
            })}
        </ItineraryText>
        </ItineraryContainer>
    </>
  );
};

export default ItineraryDisplay;
