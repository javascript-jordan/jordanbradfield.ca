import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import config from "../../../config";
import HomeComponent from "../HomeComponent/HomeComponent";

// const AuthenticatedRoute = ({component: Component, ...additionalProps}) => (
//     <Route {...additionalProps} render={props => (
//         isAuthenticated() ? <Component {...props} /> : <Redirect to={BASE_UNAUTHENTICATED_PAGE} />
//     )} />
// );

// export default ({ className }) => {
//     return (
//         <HashRouter>
//             <Switch>
//                 {routes.map((route, index) => {
//                     let props = {
//                         key: index,
//                         path: route.path,
//                         exact: route.exact,
//                         component: route.component,
//                         className
//                     }
//                     return route.auth ? <AuthenticatedRoute {...props} /> : <Route {...props} />
//                 })}
//                 <Redirect to="/" />
//             </Switch>
//         </HashRouter>
//     );
// }

const ROUTES = [
    {path: "/", component: HomeComponent}
]

const ViewComponentStyles = theme => ({
    root: {
        
    }
});

const ViewComponent = ({ classes }) => {
    return (
        <BrowserRouter>
            <Switch>
                {ROUTES.map((route, index) => {
                    return <Route component={route.component} exact={true} key={`route-${index}`} path={route.path} />
                })}
                {/* Fallback to home page */}
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default withStyles(ViewComponentStyles)(ViewComponent);