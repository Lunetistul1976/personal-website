import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, GlobalStyles, getMuiTheme } from '../theme';

const THEME_STORAGE_KEY = 'app-theme';

type ThemeMode = 'light' | 'dark';

function getSystemTheme(): ThemeMode {
    if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialMode(): ThemeMode {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return getSystemTheme();
}

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
    const [theme, setTheme] = useState<DefaultTheme>(() =>
        getInitialMode() === 'dark' ? darkTheme : lightTheme
    );

    useEffect(() => {
        const mode: ThemeMode = theme.name === 'dark' ? 'dark' : 'light';
        localStorage.setItem(THEME_STORAGE_KEY, mode);
    }, [theme]);

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
