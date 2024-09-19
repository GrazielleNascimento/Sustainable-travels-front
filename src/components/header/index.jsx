import styled from 'styled-components';
import { FaLeaf } from 'react-icons/fa';

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background: linear-gradient(135deg, #2e8b57, #8fbc8f); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed; 
  top: 0;
  z-index: 1000;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0;
`;

const IconWrapper = styled.div`
  font-size: 32px;
  color: #fff;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <IconWrapper>
        <FaLeaf />
      </IconWrapper>
      <Title>Discover Your Perfect Itinerary!</Title>
      <IconWrapper>
        
      </IconWrapper>
    </HeaderContainer>
  );
}
