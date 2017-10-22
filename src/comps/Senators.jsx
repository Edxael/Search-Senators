import React from 'react';
import Teamplate from './Template.jsx';
import data from './data/data.json';

console.log(data);

class Senators extends React.Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  handleChange(){
    console.log("Search: ", this.state.query);
    return data
    .filter((sen) => { return sen.person.name.toLowerCase().concat(sen.description.toLowerCase()).includes(this.state.query.toLowerCase()) })
    .map((sen) => { return(<Teamplate key={sen.person.bioguideid} name={sen.person.name} phone={sen.phone} cx={sen.extra.contact_form} />) })
  }

  render(){
    const liDeco = { listStyleType: "none" }
    const inputSt = { backgroundColor: "rgb(200, 184, 247)", width: "90%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    return(
      <div>

        <p><strong>To find a senator type one of the following:</strong></p>
        <ul style={liDeco}>
          <li>State</li>
          <li>First Name</li>
          <li>Last Name</li>
        </ul>

        <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
          onChange={ (event) => { this.setState({ query: event.target.value }) } } />

        {this.handleChange()}

      </div>
    )
  }
}

export default Senators;
