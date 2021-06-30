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
import BarChart from "./BarChart";
import {CATEGORY_DEF, CATEGORY_EXAMPLES, EXAMPLE_HEADER} from "./CategoryDefinitions";
import {animateScroll as scroll} from 'react-scroll'


StylesManager.applyTheme("modern");

function SurveyComponent() {

    // declare variables
    const [releaseResults, setReleaseResults] = useState(false);
    const [artisticScore, setArtisticScore] = useState();
    const [conventionalScore, setConventionalScore] = useState();
    const [enterprisingScore, setEnterprisingScore] = useState();
    const [investigativeScore, setInvestigativeScore] = useState();
    const [realisticScore, setRealisticScore] = useState();
    const [socialScore, setSocialScore] = useState();

    const [printing, setPrinting] = useState(false);

    // temp variables
    let artisticScoreTemp = 0;
    let conventionalScoreTemp = 0;
    let enterprisingScoreTemp = 0;
    let investigativeScoreTemp = 0;
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


    function printPage() {
        setPrinting(true);
        setTimeout(function () {
            window.print()
            setPrinting(false);
        }, 750);
    }


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
                        } else if (category.includes(questionCategories.Investigative)) {
                            investigativeScoreTemp += score
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
                setInvestigativeScore(investigativeScoreTemp);
                setRealisticScore(realisticScoreTemp);
                setSocialScore(socialScoreTemp);

                // print data for debugging
                // console.log(JSON.stringify(survey.data, null, 3))
            }
        }
        setReleaseResults(true);
    }

    function restartSurvey() {
        survey.clear();
        setReleaseResults(false);
        survey.render();
    }

    function scrollDown() {
        scroll.scrollTo(800);
    }

    function returnArrayList(array) {
        return array.map(
            (text) =>
                <li key={text}>
                    {text}
                </li>
        );
    }

    return <div>
        {!releaseResults && <Survey model={survey} onComplete={submit}/>}
        {releaseResults &&
        <div>

            <h1 className={"text-2xl font-bold mt-20 mx-auto w-1/2 content-center text-center "}>Your Results Are
                In!</h1>
            <div className={`${!printing && 'flex flex-wrap'} justify-center align-middle`}>

                <div className={`${!printing && 'rounded-lg shadow-xl'} w-1/2 mt-5 mr-2 p-7`}>
                    <BarChart
                        surveyData={[artisticScore, conventionalScore, enterprisingScore, investigativeScore, realisticScore, socialScore]}/>
                </div>
                <div className={`${!printing ? 'rounded-lg shadow-xl w-5/12' : 'w-full'} mt-5 mr-2 p-7`}>
                    <p className={"my-5"}>Here are your interest results: </p>
                    <div className={"text-lg my-10"}>
                        <p>{questionCategories.Artistic} Score: {artisticScore}</p>
                        <p>{questionCategories.Conventional} Score: {conventionalScore}</p>
                        <p>{questionCategories.Enterprising} Score: {enterprisingScore}</p>
                        <p>{questionCategories.Investigative} Score: {investigativeScore}</p>
                        <p>{questionCategories.Realistic} Score: {realisticScore}</p>
                        <p>{questionCategories.Social} Score: {socialScore}</p>
                    </div>
                    <p> Think of these results as pointing out work-related activities that you may like to do.</p>

                    <p className={"my-5"}> Your interests can help you find career options to explore. The more a career
                        satisfies your
                        interests, the more likely that it will be satisfying and rewarding.</p>

                    <p>Click the button below to learn more about what these categories and your results mean. </p>
                    {!printing && <button className={"btn btn-orange"} onClick={scrollDown}> Learn More</button>}
                    {!printing && <button className={"btn btn-grey"} onClick={printPage}> Print Results</button>}
                </div>

            </div>
        </div>}

        {releaseResults &&
        <span>
            <h1 className={"text-2xl font-bold mt-20 mx-auto w-1/2 content-center text-center "}>What the Categories
                Mean:</h1>
            <div className={`${!printing && 'rounded-lg shadow-xl'} text-left mx-auto w-2/3 p-14`}>
                <div className={"mb-8"}>
                    <p className={"category-title"}>{questionCategories.Artistic} </p>
                    <p className={"inline-block"}>{CATEGORY_DEF.ARTISTIC} </p>
                    <p>{EXAMPLE_HEADER}</p>
                    <p className={"category-example"}> {returnArrayList(CATEGORY_EXAMPLES.ARTISTIC)}</p>
                </div>
                <div className={"my-8"}>
                    <p className={"category-title"}>{questionCategories.Conventional} </p>
                    <p className={"inline-block"}>{CATEGORY_DEF.CONVENTIONAL} </p>
                    <p>{EXAMPLE_HEADER}</p>
                    <p className={"category-example"}> {returnArrayList(CATEGORY_EXAMPLES.CONVENTIONAL)}</p>
                </div>
                <div className={"my-8"}>
                    <p className={"category-title"}>{questionCategories.Enterprising} </p>
                    <p className={"inline-block"}>{CATEGORY_DEF.ENTERPRISING} </p>
                    <p>{EXAMPLE_HEADER}</p>
                    <p className={"category-example"}> {returnArrayList(CATEGORY_EXAMPLES.ARTISTIC)}</p>
                </div>
                <div className={"my-8"}>
                    <p className={"category-title"}>{questionCategories.Investigative} </p>
                    <p className={"inline-block"}>{CATEGORY_DEF.INVESTIGATIVE} </p>
                    <p>{EXAMPLE_HEADER}</p>
                    <p className={"category-example"}> {returnArrayList(CATEGORY_EXAMPLES.INVESTIGATIVE)}</p>
                </div>
                <div className={"my-8"}>
                    <p className={"category-title"}>{questionCategories.Realistic} </p>
                    <p className={"inline-block"}>{CATEGORY_DEF.REALISTIC} </p>
                    <p>{EXAMPLE_HEADER}</p>
                    <p className={"category-example"}> {returnArrayList(CATEGORY_EXAMPLES.REALISTIC)}</p>
                </div>
                <div className={"my-8"}>
                    <p className={"category-title"}>{questionCategories.Social} </p>
                    <p className={"inline-block"}>{CATEGORY_DEF.SOCIAL} </p>
                    <p>{EXAMPLE_HEADER}</p>
                    <p className={"category-example"}> {returnArrayList(CATEGORY_EXAMPLES.SOCIAL)}</p>
                </div>

                  </div>
            {!printing && <button className={"btn btn-orange"} onClick={restartSurvey}> Try Again </button>}
            {!printing && <button className={"btn btn-blue"} onClick={window.close}> Exit </button>}
        </span>
        }
    </div>
}

export default SurveyComponent;
