import React from "react";
import { withStyles } from "@material-ui/styles";
import { strings } from "../../services/stringService";
import AboutHobbyComponent from "./AboutHobby.component";
import CodeBlack from "../../images/about/hobbies/code-black.svg";
import CodeWhite from "../../images/about/hobbies/code-white.svg";
import DumbellBlack from "../../images/about/hobbies/dumbbell-black.svg";
import DumbellWhite from "../../images/about/hobbies/dumbbell-white.svg";
import FishBlack from "../../images/about/hobbies/fish-black.svg";
import FishWhite from "../../images/about/hobbies/fish-white.svg";
import PlaneBlack from "../../images/about/hobbies/plane-black.svg";
import PlaneWhite from "../../images/about/hobbies/plane-white.svg";


const AboutHobbiesComponentStyles = theme => {
    return {
        root: {
            flexFlow:"row wrap"
        }
    }
}

const AboutHobbiesComponent = ({ className, classes }) => {
    let hobbies = [
        { name: strings.about.bio.hobbies.items.code, black: CodeBlack, white: CodeWhite },
        { name: strings.about.bio.hobbies.items.fitness, black: DumbellBlack, white: DumbellWhite },
        { name: strings.about.bio.hobbies.items.fishing, black: FishBlack, white: FishWhite },
        { name: strings.about.bio.hobbies.items.travel, black: PlaneBlack, white: PlaneWhite },
    ]
    return (
        <div className={`${classes.root} ${className || ""} root flex row align-vertical-start`}>
            {hobbies.map((hobby, index) => <AboutHobbyComponent key={`hobby-${index}`} hobby={hobby} />)}
        </div>
    );
}

export default withStyles(AboutHobbiesComponentStyles)(AboutHobbiesComponent);