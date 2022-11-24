export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((item) => item._id !== action.payload),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          action.payload,
        ].sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0),
      };
    case 'REPLACE_TRANSACTION':
      return {
        ...state,
        transactions: 
          state.transactions
            .map(item => item._id === action.payload._id ? action.payload : item)
            .sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0),
      };
    case 'SAVE_FILTERS':
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
}
