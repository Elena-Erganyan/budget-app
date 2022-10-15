import styled from 'styled-components';
import { fadeIn } from '../../components/generalAnimations';

export const StyledManageTransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  font-size: 1.7rem;
  line-height: 1.2;
  animation: 0.5s ${fadeIn} forwards;
`;

export const StyledStatisticsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledGraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
  max-width: 40rem;
  width: 45%;
  @media (max-width: 600px) {
    order: 0;
    width: 80%;
  }
`;

export const StyledManageTransactions = styled.div`
  width: 49%;
  & > div > div {
    flex-direction: column;
  }
  form > div {
    flex-direction: column;
    align-items: center;
    div {
      width: auto;
    }
    label {
      width: 100%;
    }
    button {
      width: auto;
    }
  }  
  @media (max-width: 600px) {
    width: 100%;
  }
`;
