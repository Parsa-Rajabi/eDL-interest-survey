import logo from './logo.svg';
import './App.css';
import SurveyComponent from "./SurveyComponent";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <SurveyComponent/>
        </div>
    );
}

export default App;
