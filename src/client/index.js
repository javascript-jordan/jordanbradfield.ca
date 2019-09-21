import React from "react";
import ReactDOM from "react-dom";

// Global styles
import styles from "./scss/index.scss";


const App = () => (
    <div>
        Hello World!
    </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));