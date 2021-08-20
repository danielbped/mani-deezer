import styled from 'styled-components';
import { HeartFill } from '@styled-icons/bootstrap/HeartFill';


export const StyledHeader = styled.header`
  align-items: center;
  background-color: black;
  color: white;
  display:flex;
  justify-content: space-around;
  padding: 1rem;
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