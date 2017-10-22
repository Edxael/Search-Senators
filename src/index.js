import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  // -------------------------
import Senators from './comps/Senators.jsx';
import UniPage from './comps/UniPage.jsx';
import senPic from './comps/img/sen1.jpg';
import senLog from './comps/img/sen2.png';

const GatherComp = () => {
  const gather = { textAlign: "center", backgroundColor: "rgb(193, 255, 248)", margin: "0px 15%", padding: "15px 50px" }
  const picSt1 = { maxWidth: "100%" }
  const picSt2 = { maxWidth: "150px" }

  return(
    <div style={gather} >
      <div>
        <img style={picSt2} src={senLog} alt="Missing Pic."/>
      </div>

      <h2>Find & Contact your Senator.</h2>

      <img style={picSt1} src={senPic} alt="Missing Pic."/>

          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Senators}/>
                <Route path="/:id" component={UniPage} />
              </Switch>
            </div>
          </Router>

    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));

// Info to create the dynamic Route: 
// https://reacttraining.com/react-router/web/example/url-params
