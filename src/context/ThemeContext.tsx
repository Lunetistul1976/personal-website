import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, GlobalStyles, getMuiTheme } from '../theme';

interface ThemeContextType {
    theme: DefaultTheme;
    toggleTheme: () => void;
    mode: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<DefaultTheme>(darkTheme);

    const toggleTheme = () => {
        setTheme(prev => (prev.name === 'dark' ? lightTheme : darkTheme));
    };

    const mode = theme.name === 'dark' ? 'dark' : 'light';

    // Memoize the MUI theme to prevent unnecessary re-renders
    const muiTheme = useMemo(() => getMuiTheme(mode), [mode]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, mode }}>
            <StyledThemeProvider theme={theme}>
                <MuiThemeProvider theme={muiTheme}>
                    <GlobalStyles />
                    {children}
                </MuiThemeProvider>
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
