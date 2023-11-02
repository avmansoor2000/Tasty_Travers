import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import Home from "./useStateHK"
import 'bootstrap/dist/css/bootstrap.min.css';




const AppLayout = () => {
  return (
    <React.StrictMode>
      <App/>
    </React.StrictMode>

  );
};

const root = document.getElementById("root");
ReactDOM.render(<AppLayout />, root);

// ReactDOM.render(<App />, document.getElementById('root'));