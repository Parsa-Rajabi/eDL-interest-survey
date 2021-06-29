import './App.css';
import SurveyComponent from "./SurveyComponent";

function App() {
    return (
        <div className="App">
            <img src={"https://edynamiclearning.com/wp-content/uploads/2020/09/Logo_Vert_Graduate_Web.png"}
                 width={100}
                 alt={"eDynamic Learning Logo"}
                 className={"image"}
            />
            <h1 className={"text-2xl font-bold mt-16"}>Interest Survey</h1>
            <SurveyComponent/>
        </div>
    );
}

export default App;
