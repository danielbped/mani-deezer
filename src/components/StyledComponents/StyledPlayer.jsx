import styled from 'styled-components';
import { Play } from '@styled-icons/bootstrap/';
import { Pause } from '@styled-icons/feather/Pause';

export const StyledPlayer = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0.25rem;
  transition: 500ms;
`;

export const StyledPause = styled(Pause)`
  margin: 0.25rem;
  transition: 500ms;
  width: 1.5rem;

  &:hover {
    opacity: 0.5;
  }
`;

export const StyledPlay = styled(Play)`
  margin: 0.25rem;
  transition: 500ms;
  width: 1.5rem;

  &:hover {
    opacity: 0.5;
  }
`;