import { useState } from 'react';
import { useAuthContext } from '../context/authState';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { loginUser } = useAuthContext();

  const register = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      // update the auth context
      loginUser(json);     
    }

    setIsLoading(false);
  };

  return { register, isLoading, error };
};
