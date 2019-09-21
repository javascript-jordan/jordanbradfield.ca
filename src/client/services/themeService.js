import { createMuiTheme } from "@material-ui/core";

export const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../sass/theme.scss');

export const createTheme = () => createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            // light: will be calculated from palette.primary.main,
            main: theme.primary,
            contrastText: "#fff"
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: theme.secondaryLight,
            main: theme.secondary,
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#000000'
        },
        text: {
            primary: "#ffffff"
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