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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  width: 90%;
  row-gap: 2rem;
  column-gap: 6%;
  
  @media (min-width: 601px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledGraphWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 0;
  max-width: 36rem;
  width: 100%;

  @media (min-width: 601px) {
    order: 1;
  }
`;

export const StyledManageTransactions = styled.div`
  max-height: calc(100vh - 80vw); // subtracting the height of the doughnut chart
  overflow-y: auto;
  padding-right: 0.5rem;
  width: 100%;

  & > div > div,
  form > div {
    flex-direction: column;
  }

  @media (min-width: 601px) {
    max-height: calc(100vh - 25rem); // subtracting the height of the header and filters
  }
`;
