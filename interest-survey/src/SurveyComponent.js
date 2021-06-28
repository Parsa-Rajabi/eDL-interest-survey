/*
*
* @Author: Parsa Rajabi, ParsaRajabiPR [at] gmail.com
* @Date: June 2021
* @Description: Re-usable Survey Component
*
* */


import React, {useState} from "react";
import {Survey, StylesManager, Model} from "survey-react";
import "survey-react/modern.css";
import "./index.css";
import {json, questionCategories} from "./SurveyText";

StylesManager.applyTheme("modern");

function SurveyComponent() {

    // declare variables
    const [releaseResults, setReleaseResults] = useState(false);
    const [artisticScore, setArtisticScore] = useState();
    const [conventionalScore, setConventionalScore] = useState();
    const [enterprisingScore, setEnterprisingScore] = useState();
    const [realisticScore, setRealisticScore] = useState();
    const [socialScore, setSocialScore] = useState();
    // temp variables
    let artisticScoreTemp = 0;
    let conventionalScoreTemp = 0;
    let enterprisingScoreTemp = 0;
    let realisticScoreTemp = 0;
    let socialScoreTemp = 0;


    // create new survey based on json provided
    const survey = new Model(json);

    survey.onUpdateQuestionCssClasses
        .add(function (survey, options) {
            // https://github.com/surveyjs/survey-library/blob/master/src/defaultCss/cssmodern.ts
            const classes = options.cssClasses
            const modernCSS = survey.css;

            classes.mainRoot = "survey-background";

            modernCSS.root = "root"
            modernCSS.footer = "footer"
            modernCSS.navigation.start = "btn btn-orange"
            modernCSS.navigation.next = "btn btn-orange"
            modernCSS.navigation.prev = "btn btn-grey"
            modernCSS.navigation.complete = "btn btn-blue"

            modernCSS.progress = "progress"
            modernCSS.progressBar = "progress-bar"
            modernCSS.progressText = "progress-text"

        });


    function submit(survey) {
        const results = survey.data;

        for (const row in results) {
            if (results.hasOwnProperty(row)) {
                const singleRow = results[row];
                for (const category in singleRow) {
                    if (singleRow.hasOwnProperty(category)) {
                        const score = singleRow[category];
                        if (category.includes(questionCategories.Artistic)) {
                            artisticScoreTemp += score
                        } else if (category.includes(questionCategories.Conventional)) {
                            conventionalScoreTemp += score
                        } else if (category.includes(questionCategories.Enterprising)) {
                            enterprisingScoreTemp += score
                        } else if (category.includes(questionCategories.Realistic)) {
                            realisticScoreTemp += score
                        } else if (category.includes(questionCategories.Social)) {
                            socialScoreTemp += score
                        }
                    }
                }
                // update state variables with temp variables
                setArtisticScore(artisticScoreTemp);
                setConventionalScore(conventionalScoreTemp);
                setEnterprisingScore(enterprisingScoreTemp);
                setRealisticScore(realisticScoreTemp);
                setSocialScore(socialScoreTemp);

                // print data for debugging
                console.log(JSON.stringify(survey.data, null, 3))
            }
        }
        setReleaseResults(true);

    }

    function restartSurvey() {
        survey.clear();
        setReleaseResults(false);
        survey.render();
    }

    return <div>
        {!releaseResults && <Survey model={survey} onComplete={submit} />}
        {releaseResults && <div>
            <p>{questionCategories.Artistic} Score : {artisticScore}</p>
            <p>{questionCategories.Conventional} Score : {conventionalScore}</p>
            <p>{questionCategories.Enterprising} Score : {enterprisingScore}</p>
            <p>{questionCategories.Realistic} Score : {realisticScore}</p>
            <p>{questionCategories.Social} Score : {socialScore}</p>
        </div>}

        {releaseResults && <button className={"btn btn-orange"} onClick={restartSurvey}> Try Again </button>}
        {releaseResults && <button className={"btn btn-blue"} onClick={window.close}> Exit </button>}
    </div>
}

export default SurveyComponent;
