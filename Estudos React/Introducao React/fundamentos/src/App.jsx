import "./App.css";
import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import MyComponent from "./components/MyComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
