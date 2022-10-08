export default function reducer(state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((item) => item.id !== action.payload),
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [
          ...state.transactions,
          action.payload,
        ].sort((a, b) => b.date - a.date),
      }
    case 'REPLACE_TRANSACTION':
      return {
          ...state,
          transactions: 
            state.transactions
            .map(item => item.id === action.payload.id ? action.payload.newItem : item)
            .sort((a, b) => b.date - a.date),
        }
    case 'SAVE_FILTERS':
      return {
        ...state,
        filters: action.payload,
      }
    default:
      return state;
  }
}
