/*
*
* @Author: Parsa Rajabi, ParsaRajabiPR [at] gmail.com
* @Date: June 2021
* @Description: Re-usable Survey Component
*
* */


import React from "react";
import PropTypes from "prop-types";
import {Bar} from 'react-chartjs-2';
import {questionCategories} from "./SurveyText";


function BarChart(props) {
    const {surveyData} = props;

    const chartLabels = []

    for (const category in questionCategories) {
        chartLabels.push(category)
    }

    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Score',
                data: surveyData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        animation: {
            duration: 750
        },
        // maintainAspectRatio: false,
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: false,
            title: {
                display: true,
                text: 'Interest Survey Results',
            },
        },
    };


    return <div>
        <Bar data={data} options={options}/>
    </div>
}

BarChart.propTypes = {
    surveyData: PropTypes.array.isRequired
}

export default BarChart;
