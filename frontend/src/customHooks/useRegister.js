import { useState } from 'react';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const register = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setMessage(null);

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password}),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setMessage(json.message);
    }

    setIsLoading(false);
  };

  return { register, isLoading, error, message };
};
