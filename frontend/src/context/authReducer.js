export default function authReducer (state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    case 'UPDATE':
      return {...state, ...action.payload};
    default:
      return state;
  }
};
