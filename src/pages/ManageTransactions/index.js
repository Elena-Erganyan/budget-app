import React, { useState } from 'react';
import {
  StyledManageTransactionsWrapper,
  StyledGraphWrapper,
  StyledManageTransactions
} from './styled';
import TransactionList from '../../components/TransactionList';
import TransactionFilters from '../../components/TransactionFilters';
import DoughnutChart from '../../components/DoughnutChart';

const ManageTransactions = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  return (
    <StyledManageTransactionsWrapper>
      <TransactionFilters
        filteredTransactions={filteredTransactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <StyledGraphWrapper>
        {filteredTransactions.length
          ? <DoughnutChart filteredTransactions={filteredTransactions} />
          : null
        }
        <StyledManageTransactions>
          <TransactionList
            text="No transactions with the selected parameters"
            transactions={filteredTransactions}
          />
        </StyledManageTransactions>
      </StyledGraphWrapper>
    </StyledManageTransactionsWrapper>
  );
};

export default ManageTransactions;
