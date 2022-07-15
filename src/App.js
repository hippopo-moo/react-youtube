import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Watch from './pages/Watch';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path='/'>

        </Route>
      </Switch> */}
      <Watch/>
    </div>
  );
}

export default App;
