import styled from 'styled-components';
import { ArrowBack } from '@styled-icons/evaicons-solid/ArrowBack';

export const BackButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
`;

export const ArrowButton = styled(ArrowBack)`
  width: 1.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 2rem;
`;

export const StyledFavs = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  width: 90%;
`;