import React, { useState, useEffect } from 'react';
import { useTransactionContext } from '../../context/globalState';
import { useAuthContext } from '../../context/authState';
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
  // const { transactions, setTransactions } = useTransactionContext();
  // const { user } = useAuthContext();

  // useEffect(() => {
  //   const fetchTransactions = async () => {
  //     const response = await fetch('/api/transactions', {
  //       headers: {
  //         'Authorization': `Bearer ${user.token}`,
  //       },
  //     });
  //     const json = await response.json();

  //     if (response.ok) {
  //       setTransactions(json);
  //     }
  //   };
  //   if (user) {
  //     fetchTransactions();
  //   }
  // }, [transactions, user]);

  // console.log('Test');

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
