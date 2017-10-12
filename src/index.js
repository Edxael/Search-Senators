import React from 'react';
import ReactDOM from 'react-dom';
import Senators from './comps/Senators.jsx';
import senPic from './comps/img/sen1.jpg';
import senLog from './comps/img/sen2.png';

const GatherComp = () => {
  const gather = { textAlign: "center", backgroundColor: "rgb(193, 255, 248)", margin: "0px 15%", padding: "15px 50px" }
  const picSt1 = { maxWidth: "100%" }
  const picSt2 = { maxWidth: "150px" }
  const liDeco = { listStyleType: "none" }
  return(
    <div style={gather} >
      <div>
        <img style={picSt2} src={senLog} alt="Missing Pic."/>
      </div>

      <h2>Find & Contact your Senator</h2>

      <img style={picSt1} src={senPic} alt="Missing Pic."/>

        <p><strong>To find a senator type one of the following:</strong></p>
        <ul style={liDeco}>
          <li>State</li>
          <li>First Name</li>
          <li>Last Name</li>
        </ul>

      <Senators />
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
