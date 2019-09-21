import React from "react";
import ReactDOM from "react-dom";

//material theme provider
import { MuiThemeProvider } from "@material-ui/core";

//required components
import ViewComponent from "./components/view/view.component";
import NavbarComponent from "./components/navbar/Navbar.component";

//custom theme object
import { createTheme } from "./services/themeService";

//global styles
import styles from "./scss/index.scss";


const App = () => (
    <MuiThemeProvider theme={createTheme()}>
        <NavbarComponent />
        <ViewComponent />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#root"));