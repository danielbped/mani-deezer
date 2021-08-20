import styled, { keyframes } from 'styled-components';
import { LoaderOutline } from '@styled-icons/evaicons-outline/LoaderOutline';

const rotate = keyframes`from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`

export const LoadingMain = styled.main`
  justify-items:center;
  display:flex;
  justify-content: center;
  height: 100vh;
`;

export const StyledLoading = styled(LoaderOutline)`
  width: 4rem;

  animation: ${rotate} 5s linear infinite;
  
`;