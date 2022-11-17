import { useTransactionContext } from '../context/globalState';
import { useAuthContext } from '../context/authState';


export const useLogout = () => {
  const { logoutUser } = useAuthContext();
  const { setTransactions } = useTransactionContext();

  const logout = async () => {
    // remove user from storage
    localStorage.removeItem('user');

    // dispatch logout action
    logoutUser();
    setTransactions(null);
  };

  return { logout };
};
