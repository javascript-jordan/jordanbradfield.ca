import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import config from "../../../config";
import HomeComponent from "../HomeComponent/Home.component";
import SkillsComponent from "../SkillsComponent/Skills.component";
import ExperienceComponent from "../ExperienceComponent/Experience.component";
import AboutComponent from "../AboutComponent/About.component";
import ContactComponent from "../ContactComponent/Contact.component";

const ROUTES = [
    {path: "/", component: HomeComponent},
    {path: "/skills", component: SkillsComponent},
    {path: "/experience", component: ExperienceComponent},
    {path: "/about", component: AboutComponent},
    {path: "/contact", component: ContactComponent}
]

const ViewComponentStyles = theme => ({
    root: {
        
    }
});

const ViewComponent = ({ classes }) => {
    return (
        <HashRouter>
            <Switch>
                {ROUTES.map((route, index) => {
                    return <Route render={props => <route.component {...props} />} exact={true} key={`route-${index}`} path={route.path} />
                })}
                {/* Fallback to home page */}
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    );
}

export default withStyles(ViewComponentStyles)(ViewComponent);