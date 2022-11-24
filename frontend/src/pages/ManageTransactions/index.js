import { useState } from 'react';
import TransactionList from '../../components/TransactionList';
import TransactionFilters from '../../components/TransactionFilters';
import DoughnutChart from '../../components/DoughnutChart';
import {
  StyledManageTransactionsWrapper,
  StyledStatisticsWrapper,
  StyledGraphWrapper,
  StyledManageTransactions
} from './styled';

const ManageTransactions = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  return (
    <StyledManageTransactionsWrapper>
      <TransactionFilters
        setFilteredTransactions={setFilteredTransactions}
      />
      <StyledStatisticsWrapper>
        {filteredTransactions.length > 0 &&
          <StyledGraphWrapper>
            <DoughnutChart filteredTransactions={filteredTransactions} />
          </StyledGraphWrapper>        
        }
        <StyledManageTransactions>
          <TransactionList
            text="No transactions with the selected parameters"
            transactions={filteredTransactions}
          />
        </StyledManageTransactions>
      </StyledStatisticsWrapper>
    </StyledManageTransactionsWrapper>
  );
};

export default ManageTransactions;
