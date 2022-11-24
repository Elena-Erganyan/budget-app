export const sortTransactions = (a, b, sortType) => {
  switch(sortType) {
    case 'dateAsc':
      return b.date - a.date;
    case 'dateDesc':
      return a.date - b.date;
    case 'amountAsc':
      return a.amount - b.amount;
    case 'amountDesc':
      return b.amount - a.amount;
    default:
      return;
  }
};

export const filterTransactions = (
  setFilteredTransactions,
  transactions,
  category,
  type,
  startDate,
  endDate,
  sortType
) => {
  if (category === 'All') {
    setFilteredTransactions(transactions.filter((item) => {
      return type === item.type &&
        new Date(item.date) >= new Date(startDate + 'T00:00:00Z') &&
        new Date(item.date) <= new Date(endDate + 'T23:59:59Z');
    }).sort((a, b) => sortTransactions(a, b, sortType)));
  } else {
    setFilteredTransactions(transactions.filter((item) => {
      return category === item.category &&
        new Date(item.date) >= new Date(startDate + 'T00:00:00Z') &&
        new Date(item.date) <= new Date(endDate + 'T23:59:59Z');
    }).sort((a, b) => sortTransactions(a, b, sortType)));
  }
};
