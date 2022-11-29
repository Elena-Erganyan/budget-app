import { createContext, useContext, useReducer } from "react";
import authReducer from './authReducer';

const initialState = {user: JSON.parse(localStorage.getItem('user'))};

const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function loginUser (user) {
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  }

  function logoutUser () {
    dispatch({
      type: 'LOGOUT',
    });
  }

  function updateUser () {
    dispatch({
      type: 'UPDATE',
    });
  }

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loginUser,
      logoutUser,
      updateUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
