import { createMuiTheme } from "@material-ui/core";

export const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../scss/theme.scss');

export const createTheme = () => createMuiTheme({
    palette: {
        type: "light",
        primary: {
            // light: will be calculated from palette.primary.main,
            main: theme.primary,
            contrastText: "#fff"
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: theme.secondary,
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#000000'
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }
        // error: will use the default color
    },
    typography: {
        useNextVariants: true,
        color: "#ffffff",
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    }
});