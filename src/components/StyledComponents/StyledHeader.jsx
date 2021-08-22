import styled from 'styled-components';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';


export const StyledHeader = styled.header`
  align-items: center;
  background-color: black;
  color: white;
  display:flex;
  justify-content: space-around;
  padding: 1rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const RightHeader = styled.div`
  align-items: center;
  display: flex;
`;

export const SearchBar = styled.input`
  border: none;
  border-radius: 1rem;
  margin: 1rem;
  padding: 0.4rem;
  padding-left: 1rem;

  &:focus {
    outline: none;
  }
`;

export const StyledHeart = styled(HeartFill)`
  color: white;
  transition: 500ms;
  width: 1.5rem;

  &:hover {
    color: red;
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  color: white;
  cursor: pointer;
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 2rem;
`;

export const StyledLogo = styled.img`
  margin-right: 1rem;
  width: 2rem;
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;