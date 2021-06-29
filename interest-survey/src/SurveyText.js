/*
*
* @Author: Parsa Rajabi, ParsaRajabiPR [at] gmail.com
* @Date: June 2021
* @Description: Text for Survey
*
* */

// question categories
export const questionCategories = {
    Artistic: "Artistic",
    Conventional: "Conventional",
    Enterprising: "Enterprising",
    Investigative: "Investigative",
    Realistic: "Realistic",
    Social: "Social",
}

// questions based on their category
const allQuestions = [
    {
        Question: "Write books",
        Category: "Artistic"
    },
    {
        Question: "Play a musical instrument",
        Category: "Artistic"
    },
    {
        Question: "Compose or arrange music",
        Category: "Artistic"
    },
    {
        Question: "Draw, paint, illustrate, animate",
        Category: "Artistic"
    },
    {
        Question: "Create special effects for movies",
        Category: "Artistic"
    },
    {
        Question: "Paint sets for plays",
        Category: "Artistic"
    },
    {
        Question: "Write scripts for movies",
        Category: "Artistic"
    },
    {
        Question: "Dance, such as hip hop or ballet ",
        Category: "Artistic"
    },
    {
        Question: "Sing in a band or a choir",
        Category: "Artistic"
    },
    {
        Question: "Edit movies",
        Category: "Artistic"
    },
    {
        Question: "Develop a spreadsheet using a computer application",
        Category: "Conventional"
    },
    {
        Question: "Proofread records or forms",
        Category: "Conventional"
    },
    {
        Question: "Work with a calculator",
        Category: "Conventional"
    },
    {
        Question: "MISSING",
        Category: "Conventional"
    },
    {
        Question: "Maintain shipping and receiving records",
        Category: "Conventional"
    },
    {
        Question: "Calculate the wages of employees",
        Category: "Conventional"
    },
    {
        Question: "Capture inventory using a scanner",
        Category: "Conventional"
    },
    {
        Question: "Record rent payments",
        Category: "Conventional"
    },
    {
        Question: "Keep inventory records",
        Category: "Conventional"
    },
    {
        Question: "Stamp, sort, and distribute mail for an organization",
        Category: "Conventional"
    },
    {
        Question: "Buy and sell stocks and bonds",
        Category: "Enterprising"
    },
    {
        Question: "Manage a retail store",
        Category: "Enterprising"
    },
    {
        Question: "Operate a hair salon or a barber shop or a spa",
        Category: "Enterprising"
    },
    {
        Question: "Manage a department within a company",
        Category: "Enterprising"
    },
    {
        Question: "Start your own business",
        Category: "Enterprising"
    },
    {
        Question: "Negotiate business deals and contracts",
        Category: "Enterprising"
    },
    {
        Question: "Represent a client in a lawsuit",
        Category: "Enterprising"
    },
    {
        Question: "Create a new line of clothing",
        Category: "Enterprising"
    },
    {
        Question: "Sell merchandise or products",
        Category: "Enterprising"
    },
    {
        Question: "Manage a clothing store",
        Category: "Enterprising"
    },
    {
        Question: "Develop a new medicine",
        Category: "Investigative"
    },
    {
        Question: "Study ways to reduce water pollution",
        Category: "Investigative"
    },
    {
        Question: "Conduct chemical experiments",
        Category: "Investigative"
    },
    {
        Question: "Study the movement of the planets",
        Category: "Investigative"
    },
    {
        Question: "Examine blood samples using a microscope",
        Category: "Investigative"
    },
    {
        Question: "Investigate the cause of a fire",
        Category: "Investigative"
    },
    {
        Question: "Develop a way to predict the weather",
        Category: "Investigative"
    },
    {
        Question: "Work in a biology lab",
        Category: "Investigative"
    },
    {
        Question: "Invent a replacement for sugar",
        Category: "Investigative"
    },
    {
        Question: "Conduct lab tests to identify new diseases",
        Category: "Investigative"
    },
    {
        Question: "Build kitchen cabinets",
        Category: "Realistic"
    },
    {
        Question: "Lay brick or tile",
        Category: "Realistic"
    },
    {
        Question: "Repair household appliances",
        Category: "Realistic"
    },
    {
        Question: "Raise fish in a fish hatchery",
        Category: "Realistic"
    },
    {
        Question: "Assemble electronic or car parts",
        Category: "Realistic"
    },
    {
        Question: "Drive a truck to deliver packages to homes and businesses",
        Category: "Realistic"
    },
    {
        Question: "Test quality of products before shipping",
        Category: "Realistic"
    },
    {
        Question: "Repair and install locks",
        Category: "Realistic"
    },
    {
        Question: "Set up and operate machines or robots to make products",
        Category: "Realistic"
    },
    {
        Question: "Put out forest fires",
        Category: "Realistic"
    },
    {
        Question: "Teach someone how to exercise",
        Category: "Social"
    },
    {
        Question: "Help people with personal or emotional problems",
        Category: "Social"
    },
    {
        Question: "Provide career guidance to people",
        Category: "Social"
    },
    {
        Question: "Rehabilitate an injury",
        Category: "Social"
    },
    {
        Question: "Do volunteer work at a non-profit organization",
        Category: "Social"
    },
    {
        Question: "Teach children how to play sports",
        Category: "Social"
    },
    {
        Question: "Teach sign language",
        Category: "Social"
    },
    {
        Question: "Conduct a therapy session",
        Category: "Social"
    },
    {
        Question: "Take care of children at daycare",
        Category: "Social"
    },
    {
        Question: "Teach a high-school class",
        Category: "Social"
    }
]
const artisticQuestions = [
    {
        Question: "Write books",
        Category: "Artistic"
    },
    {
        Question: "Play a musical instrument",
        Category: "Artistic"
    },
    {
        Question: "Compose or arrange music",
        Category: "Artistic"
    },
    {
        Question: "Draw, paint, illustrate, animate",
        Category: "Artistic"
    },
    {
        Question: "Create special effects for movies",
        Category: "Artistic"
    },
    {
        Question: "Paint sets for plays",
        Category: "Artistic"
    },
    {
        Question: "Write scripts for movies",
        Category: "Artistic"
    },
    {
        Question: "Dance, such as hip hop or ballet ",
        Category: "Artistic"
    },
    {
        Question: "Sing in a band or a choir",
        Category: "Artistic"
    },
    {
        Question: "Edit movies",
        Category: "Artistic"
    }
]
const ConventionalQuestions = [
    {
        Question: "Develop a spreadsheet using a computer application",
        Category: "Conventional"
    },
    {
        Question: "Proofread records or forms",
        Category: "Conventional"
    },
    {
        Question: "Work with a calculator",
        Category: "Conventional"
    },
    {
        Question: "Install software across computers on a large network",
        Category: "Conventional"
    },
    {
        Question: "Maintain shipping and receiving records",
        Category: "Conventional"
    },
    {
        Question: "Calculate the wages of employees",
        Category: "Conventional"
    },
    {
        Question: "Capture inventory using a scanner",
        Category: "Conventional"
    },
    {
        Question: "Record rent payments",
        Category: "Conventional"
    },
    {
        Question: "Keep inventory records",
        Category: "Conventional"
    },
    {
        Question: "Stamp, sort, and distribute mail for an organization",
        Category: "Conventional"
    }
]
const EnterprisingQuestions = [
    {
        Question: "Buy and sell stocks and bonds",
        Category: "Enterprising"
    },
    {
        Question: "Manage a retail store",
        Category: "Enterprising"
    },
    {
        Question: "Operate a hair salon or a barber shop or a spa",
        Category: "Enterprising"
    },
    {
        Question: "Manage a department within a company",
        Category: "Enterprising"
    },
    {
        Question: "Start your own business",
        Category: "Enterprising"
    },
    {
        Question: "Negotiate business deals and contracts",
        Category: "Enterprising"
    },
    {
        Question: "Represent a client in a lawsuit",
        Category: "Enterprising"
    },
    {
        Question: "Create a new line of clothing",
        Category: "Enterprising"
    },
    {
        Question: "Sell merchandise or products",
        Category: "Enterprising"
    },
    {
        Question: "Manage a clothing store",
        Category: "Enterprising"
    },
    {
        Question: "Develop a new medicine",
        Category: "Investigative"
    },
    {
        Question: "Study ways to reduce water pollution",
        Category: "Investigative"
    },
    {
        Question: "Conduct chemical experiments",
        Category: "Investigative"
    },
    {
        Question: "Study the movement of the planets",
        Category: "Investigative"
    },
    {
        Question: "Examine blood samples using a microscope",
        Category: "Investigative"
    },
    {
        Question: "Investigate the cause of a fire",
        Category: "Investigative"
    },
    {
        Question: "Develop a way to predict the weather",
        Category: "Investigative"
    },
    {
        Question: "Work in a biology lab",
        Category: "Investigative"
    },
    {
        Question: "Invent a replacement for sugar",
        Category: "Investigative"
    },
    {
        Question: "Conduct lab tests to identify new diseases",
        Category: "Investigative"
    },
    {
        Question: "Build kitchen cabinets",
        Category: "Realistic"
    },
    {
        Question: "Lay brick or tile",
        Category: "Realistic"
    },
    {
        Question: "Repair household appliances",
        Category: "Realistic"
    },
    {
        Question: "Raise fish in a fish hatchery",
        Category: "Realistic"
    },
    {
        Question: "Assemble electronic or car parts",
        Category: "Realistic"
    },
    {
        Question: "Drive a truck to deliver packages to homes and businesses",
        Category: "Realistic"
    },
    {
        Question: "Test quality of products before shipping",
        Category: "Realistic"
    },
    {
        Question: "Repair and install locks",
        Category: "Realistic"
    },
    {
        Question: "Set up and operate machines or robots to make products",
        Category: "Realistic"
    },
    {
        Question: "Put out forest fires",
        Category: "Realistic"
    },
    {
        Question: "Teach someone how to exercise",
        Category: "Social"
    },
    {
        Question: "Help people with personal or emotional problems",
        Category: "Social"
    },
    {
        Question: "Provide career guidance to people",
        Category: "Social"
    },
    {
        Question: "Rehabilitate an injury",
        Category: "Social"
    },
    {
        Question: "Do volunteer work at a non-profit organization",
        Category: "Social"
    },
    {
        Question: "Teach children how to play sports",
        Category: "Social"
    },
    {
        Question: "Teach sign language",
        Category: "Social"
    },
    {
        Question: "Conduct a therapy session",
        Category: "Social"
    },
    {
        Question: "Take care of children at daycare",
        Category: "Social"
    },
    {
        Question: "Teach a high-school class",
        Category: "Social"
    }
]
const InvestigativeQuestions = [
    {
        Question: "Develop a new medicine",
        Category: "Investigative"
    },
    {
        Question: "Study ways to reduce water pollution",
        Category: "Investigative"
    },
    {
        Question: "Conduct chemical experiments",
        Category: "Investigative"
    },
    {
        Question: "Study the movement of the planets",
        Category: "Investigative"
    },
    {
        Question: "Examine blood samples using a microscope",
        Category: "Investigative"
    },
    {
        Question: "Investigate the cause of a fire",
        Category: "Investigative"
    },
    {
        Question: "Develop a way to predict the weather",
        Category: "Investigative"
    },
    {
        Question: "Work in a biology lab",
        Category: "Investigative"
    },
    {
        Question: "Invent a replacement for sugar",
        Category: "Investigative"
    },
    {
        Question: "Conduct lab tests to identify new diseases",
        Category: "Investigative"
    },
    {
        Question: "Build kitchen cabinets",
        Category: "Realistic"
    },
    {
        Question: "Lay brick or tile",
        Category: "Realistic"
    },
    {
        Question: "Repair household appliances",
        Category: "Realistic"
    },
    {
        Question: "Raise fish in a fish hatchery",
        Category: "Realistic"
    },
    {
        Question: "Assemble electronic or car parts",
        Category: "Realistic"
    },
    {
        Question: "Drive a truck to deliver packages to homes and businesses",
        Category: "Realistic"
    },
    {
        Question: "Test quality of products before shipping",
        Category: "Realistic"
    },
    {
        Question: "Repair and install locks",
        Category: "Realistic"
    },
    {
        Question: "Set up and operate machines or robots to make products",
        Category: "Realistic"
    },
    {
        Question: "Put out forest fires",
        Category: "Realistic"
    },
    {
        Question: "Teach someone how to exercise",
        Category: "Social"
    },
    {
        Question: "Help people with personal or emotional problems",
        Category: "Social"
    },
    {
        Question: "Provide career guidance to people",
        Category: "Social"
    },
    {
        Question: "Rehabilitate an injury",
        Category: "Social"
    },
    {
        Question: "Do volunteer work at a non-profit organization",
        Category: "Social"
    },
    {
        Question: "Teach children how to play sports",
        Category: "Social"
    },
    {
        Question: "Teach sign language",
        Category: "Social"
    },
    {
        Question: "Conduct a therapy session",
        Category: "Social"
    },
    {
        Question: "Take care of children at daycare",
        Category: "Social"
    },
    {
        Question: "Teach a high-school class",
        Category: "Social"
    }
]
const RealisticQuestions = [

    {
        Question: "Build kitchen cabinets",
        Category: "Realistic"
    },
    {
        Question: "Lay brick or tile",
        Category: "Realistic"
    },
    {
        Question: "Repair household appliances",
        Category: "Realistic"
    },
    {
        Question: "Raise fish in a fish hatchery",
        Category: "Realistic"
    },
    {
        Question: "Assemble electronic or car parts",
        Category: "Realistic"
    },
    {
        Question: "Drive a truck to deliver packages to homes and businesses",
        Category: "Realistic"
    },
    {
        Question: "Test quality of products before shipping",
        Category: "Realistic"
    },
    {
        Question: "Repair and install locks",
        Category: "Realistic"
    },
    {
        Question: "Set up and operate machines or robots to make products",
        Category: "Realistic"
    },
    {
        Question: "Put out forest fires",
        Category: "Realistic"
    },
    {
        Question: "Teach someone how to exercise",
        Category: "Social"
    },
    {
        Question: "Help people with personal or emotional problems",
        Category: "Social"
    },
    {
        Question: "Provide career guidance to people",
        Category: "Social"
    },
    {
        Question: "Rehabilitate an injury",
        Category: "Social"
    },
    {
        Question: "Do volunteer work at a non-profit organization",
        Category: "Social"
    },
    {
        Question: "Teach children how to play sports",
        Category: "Social"
    },
    {
        Question: "Teach sign language",
        Category: "Social"
    },
    {
        Question: "Conduct a therapy session",
        Category: "Social"
    },
    {
        Question: "Take care of children at daycare",
        Category: "Social"
    },
    {
        Question: "Teach a high-school class",
        Category: "Social"
    }
]
const SocialQuestions = [

    {
        Question: "Teach someone how to exercise",
        Category: "Social"
    },
    {
        Question: "Help people with personal or emotional problems",
        Category: "Social"
    },
    {
        Question: "Provide career guidance to people",
        Category: "Social"
    },
    {
        Question: "Rehabilitate an injury",
        Category: "Social"
    },
    {
        Question: "Do volunteer work at a non-profit organization",
        Category: "Social"
    },
    {
        Question: "Teach children how to play sports",
        Category: "Social"
    },
    {
        Question: "Teach sign language",
        Category: "Social"
    },
    {
        Question: "Conduct a therapy session",
        Category: "Social"
    },
    {
        Question: "Take care of children at daycare",
        Category: "Social"
    },
    {
        Question: "Teach a high-school class",
        Category: "Social"
    }
]

// questions based on page
const page1 = [
    RealisticQuestions[0],
    RealisticQuestions[1],
    InvestigativeQuestions[0],
    InvestigativeQuestions[1],
    artisticQuestions[0],
    artisticQuestions[1],
    SocialQuestions[0],
    SocialQuestions[1],
    EnterprisingQuestions[0],
    EnterprisingQuestions[1],
    ConventionalQuestions[0],
    ConventionalQuestions[1],
]
const page2 = [
    RealisticQuestions[2],
    RealisticQuestions[3],
    InvestigativeQuestions[2],
    InvestigativeQuestions[3],
    artisticQuestions[2],
    artisticQuestions[3],
    SocialQuestions[2],
    SocialQuestions[3],
    EnterprisingQuestions[2],
    EnterprisingQuestions[3],
    ConventionalQuestions[2],
    ConventionalQuestions[3],
]
const page3 = [
    RealisticQuestions[4],
    RealisticQuestions[5],
    InvestigativeQuestions[4],
    InvestigativeQuestions[5],
    artisticQuestions[4],
    artisticQuestions[5],
    SocialQuestions[4],
    SocialQuestions[5],
    EnterprisingQuestions[4],
    EnterprisingQuestions[5],
    ConventionalQuestions[4],
    ConventionalQuestions[5],
]
const page4 = [
    RealisticQuestions[6],
    RealisticQuestions[7],
    InvestigativeQuestions[6],
    InvestigativeQuestions[7],
    artisticQuestions[6],
    artisticQuestions[7],
    SocialQuestions[6],
    SocialQuestions[7],
    EnterprisingQuestions[6],
    EnterprisingQuestions[7],
    ConventionalQuestions[6],
    ConventionalQuestions[7],
]
const page5 = [
    RealisticQuestions[8],
    RealisticQuestions[9],
    InvestigativeQuestions[8],
    InvestigativeQuestions[9],
    artisticQuestions[8],
    artisticQuestions[9],
    SocialQuestions[8],
    SocialQuestions[9],
    EnterprisingQuestions[8],
    EnterprisingQuestions[9],
    ConventionalQuestions[8],
    ConventionalQuestions[9],
]

// survey choices
const surveyChoices = [{value: 1, text: "Strongly Dislike"},
    {value: 2, text: "Dislike"},
    {value: 3, text: "Neutral"},
    {value: 4, text: "Like"},
    {value: 5, text: "Strongly Like"}]

// function that maps array to text, category and value JSON
function mapArray(array) {
    return array.map(
        (questions, index) =>
            ({
                text: questions.Question,
                category: questions.Category,
                value: questions.Category + " " + index
            })
    )
}

const surveyConst = {
    type: "matrix",
    name: "Page",
    title: "Please select how you feel about each statement",
    startButtonText: "Get Started",
    backButtonText: "Back",
    completeButtonText: "Submit for Results"
}

export const json = {
    showProgressBar: "bottom",
    showQuestionNumbers: "off",
    firstPageIsStarted: true,
    startSurveyText: surveyConst.startButtonText,
    pagePrevText: surveyConst.backButtonText,
    completeText: surveyConst.completeButtonText,

    pages: [
        {
            questions: [
                {
                    type: "html",
                    html:
                        "<b> Welcome to Your Interests Survey! </b>" +
                        "<br/> <br/>" +
                        "This survey can help you figure out what you  like to do and how your interest may relate to work and a future career." +
                        "<br/> " +
                        "The link will open a browser tab. There are 60 questions, which may seem like a lot of questions though the time will go quickly!" +
                        "<br/>" +
                        "We are excited that you decided to take this first step! Click the link to get started. " +

                        "<br/> <br/> <br/> <br/>  " +

                        "<b> Before You Begin the Survey </b>" +
                        "<br/> <br/>" +
                        "This survey asks you to think about different activities that some jobs require you to perform." +
                        "<br/>" +
                        "Focus only on what you which activities you like and which ones you dislike." +
                        "<br/>" +
                        "Don't worry about whether you have the education or training to do the work, and/or how much money you would make doing it. " +

                        "<br/> <br/> <br/> <br/> " +

                        "<b> How to Fill in this Survey </b>" +
                        "<br/> <br/>" +
                        "On the pages that follow, read each statement carefully and consider how you would feel about doing that activity." +
                        "<br/> " +
                        "You will select ONE that represents how you feel for each statement: " +
                        "<br/> " +
                        "Strongly Like, " +
                        "Like, " +
                        "Neutral, " +
                        "Dislike, " +
                        "Strongly Dislike" +
                        "<br/> <br/> <br/> <br/> " +


                        "<b> Rules of Engagement Before Starting Your Survey </b>" +
                        "<br/> <br/>" +
                        "There are 5 pages with 60 work-related activity statements. Answer all activity statements in the order that they appear." +
                        "<br/> " +
                        "The progress bar (on the bottom) will show you how far you've gone and how much more there is to go." +
                        "<br/> " +
                        "Click the back button to return to an earlier page. " +
                        "<br/> " +
                        "Remember that there are no right or wrong answers.  " +
                        "<br/> <br/> " +
                        "Have fun discovering more about yourself!"
                }
            ]
        },
        {
            // Page 1 Questions
            elements: [
                {
                    type: surveyConst.type,
                    title: surveyConst.title,
                    name: surveyConst.name + "1",
                    valueName: surveyConst.name + "1",
                    isAllRowRequired: true,
                    columns: surveyChoices,
                    rows: mapArray(page1),

                }
            ]
        },
        {
            // Page 2 Questions
            elements: [
                {
                    type: surveyConst.type,
                    title: surveyConst.title,
                    name: surveyConst.name + "2",
                    valueName: surveyConst.name + "2",
                    isAllRowRequired: true,
                    columns: surveyChoices,
                    rows: mapArray(page2)
                }
            ]
        }, {
            // Page 3 Questions
            elements: [
                {
                    type: surveyConst.type,
                    title: surveyConst.title,
                    name: surveyConst.name + "3",
                    valueName: surveyConst.name + "3",
                    isAllRowRequired: true,
                    columns: surveyChoices,
                    rows: mapArray(page3)
                }
            ]
        },
        {
            // Page 4 Questions
            elements: [
                {
                    type: surveyConst.type,
                    title: surveyConst.title,
                    name: surveyConst.name + "4",
                    valueName: surveyConst.name + "4",
                    isAllRowRequired: true,
                    columns: surveyChoices,
                    rows: mapArray(page4)
                }
            ]
        }, {
            // Page 5 Questions
            elements: [
                {
                    type: surveyConst.type,
                    title: surveyConst.title,
                    name: surveyConst.name + "5",
                    valueName: surveyConst.name + "5",
                    isAllRowRequired: true,
                    columns: surveyChoices,
                    rows: mapArray(page5)
                }
            ]
        }
    ],
};