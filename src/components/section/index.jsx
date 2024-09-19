import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2.4rem;
  color: #2d6a4f;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: #95d5b2;
    border-radius: 2px;
  }

  &:after {
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.6rem;
  }
`;

const SectionDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
`;

const Section = ({ title, description }) => {
    return (
      <>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>{description}</SectionDescription>
      </>
    );  
};


export default Section;
