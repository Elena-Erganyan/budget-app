import styled from 'styled-components';
import { fadeIn } from '../../components/generalAnimations';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  animation: 0.5s ${fadeIn} forwards;
`;
