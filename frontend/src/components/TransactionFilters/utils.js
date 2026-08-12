export const sortTransactions = (a, b, sortType) => {
  switch(sortType) {
    case 'dateAsc':
      return new Date(a.date) - new Date(b.date);
    case 'dateDesc':
      return new Date(b.date) - new Date(a.date);
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
  const start = new Date(startDate + 'T00:00:00Z');
  const end = new Date(endDate + 'T23:59:59Z');

  setFilteredTransactions(transactions.filter((item) => {
    const filter = category === 'All' ? type === item.type : category === item.category;
    const itemDate = new Date(item.date);
    return filter &&
      itemDate >= start &&
      itemDate <= end;
  }).sort((a, b) => sortTransactions(a, b, sortType)));
};
