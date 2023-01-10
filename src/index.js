import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./functionBased/components/App";
import { BrowserRouter as Router} from "react-router-dom"




import "./functionBased/App.css"
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>);