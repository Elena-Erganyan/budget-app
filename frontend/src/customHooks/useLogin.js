import { useState } from 'react';
import { useAuthContext } from '../context/authState';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { loginUser } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      loginUser(json);
      
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
