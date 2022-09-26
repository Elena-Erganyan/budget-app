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
        ].sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0),
      }
    case 'REPLACE_TRANSACTION':
      return {
          ...state,
          transactions: state.transactions.map(item => item.id === action.payload.id ? action.payload.newItem : item).sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0),
        }
    default:
      return state;
  }
}
