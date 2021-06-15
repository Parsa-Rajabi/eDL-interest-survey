import React from "react";
import {Survey, StylesManager, Model} from "survey-react";
import "survey-react/modern.css";
import "./index.css";
import {json} from "./SurveyText";

StylesManager.applyTheme("modern");

function SurveyComponent(){
    const survey = new Model(json);

    return <Survey model={survey}/>
}

export default SurveyComponent;
