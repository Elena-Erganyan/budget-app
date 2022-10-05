export const sortTransactions = (a, b, sortType) => {
  switch(sortType) {
    case 'dateAsc':
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    case 'dateDesc':
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    case 'amountAsc':
      return a.amount - b.amount;
    case 'amountDesc':
      return b.amount - a.amount;
    default:
      return;
  }
};

export const filterTransactions = (setFilteredTransactions, transactions, category, type, startDate, endDate, sortType) => {
  if (category === 'All') {
    setFilteredTransactions(transactions.filter((item) => {
      return type === item.type && item.date >= startDate && item.date <= endDate;
    }).sort((a, b) => sortTransactions(a, b, sortType)));
  } else {
    setFilteredTransactions(transactions.filter((item) => {
      return category === item.category && item.date >= startDate && item.date <= endDate;
    }).sort((a, b) => sortTransactions(a, b, sortType)));
  }
};
