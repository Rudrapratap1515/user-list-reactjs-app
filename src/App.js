import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import routes from "./routes";

function App() {
  return (
    <Router>
      <Route component={routes} />
    </Router>
  );
}

export default App;
