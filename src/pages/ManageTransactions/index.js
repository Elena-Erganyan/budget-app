import React, { useState } from 'react';
import { StyledManageTransactionsWrapper, StyledManageTransactions } from './styled';
import TransactionList from '../../components/TransactionList';
import TransactionFilters from '../../components/TransactionFilters';

const ManageTransactions = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  return (
    <StyledManageTransactionsWrapper>
      <TransactionFilters
        filteredTransactions={filteredTransactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <StyledManageTransactions>
        <TransactionList
          text="No transactions with the selected parameters"
          transactions={filteredTransactions}
        />
      </StyledManageTransactions>
    </StyledManageTransactionsWrapper>
  );
};

export default ManageTransactions;
