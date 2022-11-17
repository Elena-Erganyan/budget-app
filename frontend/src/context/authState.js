import { createContext, useContext, useReducer, useEffect } from "react";
import authReducer from './authReducer';

const initialState = {user: null};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      loginUser(user);
    }
  }, []);

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

  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      loginUser,
      logoutUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
