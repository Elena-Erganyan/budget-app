import { Moon, Sun } from 'phosphor-react';
import { StyledThemeToggler } from './styled';

const ThemeToggler = ({ theme, toggleTheme }) => {  
  return (
    <StyledThemeToggler>
      {theme === 'light'
        ? <Sun size={28} onClick={toggleTheme} style={{cursor: 'pointer'}} />
        : <Moon size={28} onClick={toggleTheme} style={{cursor: 'pointer'}} />
      }
    </StyledThemeToggler>
  );
};

export default ThemeToggler;
