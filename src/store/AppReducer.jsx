export default function AppReducer(state, action) {
  switch (action.type) {
    default:
      return state;
    case "DELETE_TRANS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
  }
}
