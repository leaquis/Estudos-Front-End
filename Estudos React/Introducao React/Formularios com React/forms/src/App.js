import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Form</h2>
      <MyForm
        user={{
          name: "Giovani",
          email: "giovani@gmail.com",
          bio: "aaaaa",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
