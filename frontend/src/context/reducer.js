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
        ],
      };
    case 'REPLACE_TRANSACTION':
      return {
        ...state,
        transactions: 
          state.transactions
            .map(item => item._id === action.payload._id ? action.payload.newItem : item),
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
