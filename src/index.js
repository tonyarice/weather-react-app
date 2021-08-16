import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

