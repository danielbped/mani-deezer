import styled from 'styled-components';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';

export const Album = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 15%;

  @media (max-width: 1000px) {
    width: 20%;
  }

  @media (max-width: 800px) {
    width: 25%;
  }

  @media (max-width: 600px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  margin: 0.5rem;
  justify-content: center;
`;

export const StyledHeart = styled(HeartFill)`
  color: ${props => props.bool === true ? 'red' : 'grey'};
  margin: 0.25rem;
  transition: 500ms;
  width: 1.5rem;

  &:hover {
    opacity: 0.8
  }
`;

export const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: 'Open Sans', Arial, sans-serif;
`;

export const Time = styled.p`
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 0.7rem;
  margin: 0.25rem;
  opacity: 0.8;
`;

export const Link = styled.a`
  color: black;
  cursor: pointer;
  margin: 0.25rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const AlbumLink = styled.a`
  transition: 500ms;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const AlbumImage = styled.img`
  width: 100%;
`;