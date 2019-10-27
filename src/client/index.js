import React from "react";
import ReactDOM from "react-dom";

//material theme provider
import { MuiThemeProvider } from "@material-ui/core";

//required components
import ViewComponent from "./components/ViewComponent/View.component";
import NavbarComponent from "./components/NavbarComponent/Navbar.component";

//custom theme object
import { createTheme } from "./services/themeService";
//listen for hash changes
import { init as initRouting } from "./services/routingService";

//initialize storage object
import { init as initStorage } from "./services/storageService";

//initialize storage object
import { init as initAnalytics } from "./services/analyticsService";

//global styles
import styles from "./scss/index.scss";

//setup for routing service
initRouting();
initStorage();
initAnalytics();


const App = () => (
    <MuiThemeProvider theme={createTheme()}>
        <NavbarComponent />
        {/* All routed views are rendered here */}
        <ViewComponent />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.querySelector("#root"));