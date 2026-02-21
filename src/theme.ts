import { DefaultTheme } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

// Define the base structure that both themes will share
const shared = {
    spacing: (factor: number) => `${factor * 4}px`, // 4px grid system as requested
    breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
        wide: '1440px',
    },
    typography: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            xxl: '1.5rem', // 24px
            xxxl: '2.25rem', // 36px
            display: '2.5rem', // 40px – hero/display at desktop
        },
        fontWeight: {
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        neon: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)', // Example neon shadow
    },
    borderRadius: {
        sm: '0.125rem', // 2px
        md: '0.375rem', // 6px
        lg: '0.5rem', // 8px
        full: '9999px',
    },
    zIndex: {
        mobileStepper: 1000,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
};

export const lightTheme: DefaultTheme = {
    ...shared,
    name: 'light',
    colors: {
        background: '#ffffff',
        surface: '#f3f4f6', // Light gray surface
        text: {
            primary: '#111827', // Gray 900
            secondary: '#4b5563', // Gray 600
            disabled: '#9ca3af', // Gray 400
            inverse: '#ffffff',
        },
        primary: '#0f172a', // Dark slate (almost black) for primary actions in light mode
        secondary: '#3b82f6', // Blue
        accent: '#10b981', // Emerald green
        border: '#e5e7eb', // Gray 200
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        // Keeping neon accents available but maybe subtle
        neon: {
            cyan: '#06b6d4',
            green: '#10b981',
            purple: '#8b5cf6',
        }
    },
};

export const darkTheme: DefaultTheme = {
    ...shared,
    name: 'dark',
    colors: {
        background: '#030712', // Rich black/navy (Gray 950)
        surface: '#111827', // Gray 900
        text: {
            primary: '#f9fafb', // Gray 50
            secondary: '#9ca3af', // Gray 400
            disabled: '#4b5563', // Gray 600
            inverse: '#000000',
        },
        primary: '#f9fafb', // White for primary actions in dark mode
        secondary: '#3b82f6', // Blue
        accent: '#10b981', // Emerald green
        border: '#1f2937', // Gray 800
        success: '#34d399', // Brighter green for dark mode
        warning: '#fbbf24', // Brighter yellow
        error: '#f87171', // Brighter red
        // Neon accents as requested
        neon: {
            cyan: '#00f2ff',   // Electric Cyan
            green: '#39ff14',  // Neon Green
            purple: '#b026ff', // Neon Purple
        }
    },
};

// Default export can be lightTheme or logic to switch, but usually we just export specific themes
export const theme = darkTheme; // Defaulting to dark theme as requested "also set the dark theme"

export const GlobalStyles = createGlobalStyle`
  #root {
    height: 100vh;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    margin: 0;
    padding: 0;
    transition: background-color 0.25s linear, color 0.25s linear;
  }

  * {
    box-sizing: border-box;
  }
`;


declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        colors: {
            background: string;
            surface: string;
            text: {
                primary: string;
                secondary: string;
                disabled: string;
                inverse: string;
            };
            primary: string;
            secondary: string;
            accent: string;
            border: string;
            success: string;
            warning: string;
            error: string;
            neon: {
                cyan: string;
                green: string;
                purple: string;
            }
        };
        spacing: (factor: number) => string;
        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
            wide: string;
        };
        typography: {
            fontFamily: string;
            fontSize: {
                xs: string;
                sm: string;
                base: string;
                lg: string;
                xl: string;
                xxl: string;
                xxxl: string;
                display: string;
            };
            fontWeight: {
                regular: number;
                medium: number;
                bold: number;
            };
        };
        shadows: {
            sm: string;
            md: string;
            lg: string;
            neon: string;
        };
        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            full: string;
        };
        zIndex: {
            mobileStepper: number;
            fab: number;
            speedDial: number;
            appBar: number;
            drawer: number;
            modal: number;
            snackbar: number;
            tooltip: number;
        };
    }
}

// Helper to create MUI theme from our custom theme
export const getMuiTheme = (mode: 'light' | 'dark') => {
    const customTheme = mode === 'light' ? lightTheme : darkTheme;

    return createTheme({
        palette: {
            mode,
            primary: {
                main: customTheme.colors.primary,
            },
            secondary: {
                main: customTheme.colors.secondary,
            },
            info: {
                main: customTheme.colors.neon.purple,
            },
            background: {
                default: customTheme.colors.background,
                paper: customTheme.colors.surface,
            },
            text: {
                primary: customTheme.colors.text.primary,
                secondary: customTheme.colors.text.secondary,
            },
        },
        typography: {
            fontFamily: customTheme.typography.fontFamily,
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: customTheme.borderRadius.lg,
                        fontFamily: customTheme.typography.fontFamily,
                        fontWeight: customTheme.typography.fontWeight.medium,
                        padding: `${customTheme.spacing(1)} ${customTheme.spacing(2)}`,
                    },
                    text: {
                        color: customTheme.colors.text.secondary,
                        fontSize: customTheme.typography.fontSize.base,
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: customTheme.colors.neon.purple,
                        },
                    },
                    outlined: {
                        color: customTheme.colors.text.primary,
                        borderColor: customTheme.colors.border,
                        fontSize: customTheme.typography.fontSize.base,
                        padding: `${customTheme.spacing(1)} ${customTheme.spacing(3)}`,
                    },

                    contained: {
                        fontSize: customTheme.typography.fontSize.base,
                        padding: `${customTheme.spacing(1)} ${customTheme.spacing(3)}`,
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        borderRadius: customTheme.borderRadius.md,
                        fontFamily: customTheme.typography.fontFamily,
                        fontWeight: customTheme.typography.fontWeight.medium,
                    },
                },
            },
        },
    });
};
