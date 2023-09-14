import { createContext } from 'react';

export const ThemeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => {}
});