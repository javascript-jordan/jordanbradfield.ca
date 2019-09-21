import React from "react";
import ReactDOM from "react-dom";

//material theme provider
import { MuiThemeProvider, Typography } from "@material-ui/core";

//custom theme object
import { createTheme } from "./services/themeService";

// Global styles
import styles from "./scss/index.scss";
import ViewComponent from "./components/view/view.component";


const App = () => (
    <MuiThemeProvider theme={createTheme()}>
        <ViewComponent />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#root"));