import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/authState';

export const useToggleTheme = () => {
  const [theme, setTheme] = useState('light');
  const { user, updateUser } = useAuthContext();

  useEffect(() => {
    const localTheme = user ? user.theme : window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, [user]);

  const setMode = async (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
    if (user) {
      const response = await fetch('/api/user/' + user.id, {
        method: 'PATCH',
        body: JSON.stringify({theme: mode}),
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      } else if (window.localStorage.getItem('user')) {
        window.localStorage.setItem('user', JSON.stringify({...json, token: user.token}));
        updateUser({theme: json.theme});
      }
    }
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };
  
  return [theme, toggleTheme];
};
