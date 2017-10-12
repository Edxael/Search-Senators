import React from 'react';
import Teamplate from './Template.jsx';
import data from './data/data.json';

class Senators extends React.Component {
  constructor(props){
    super(props)
    this.state = { query: "" }
  }

  handleChange(){
    console.log("Search: ", this.state.query);
    return data
    .filter((sen) => { return sen.person.name.toLowerCase().concat(sen.description.toLowerCase()).includes(this.state.query.toLowerCase()) })
    .map((sen) => { return(<Teamplate key={sen.person.name} name={sen.person.name} phone={sen.phone} cx={sen.extra.contact_form} />) })
  }

  render(){
    const inputSt = { backgroundColor: "pink", width: "90%", height: "40px", marginBottom: "10px", paddingLeft: "7px" }
    return(
      <div>

        <input style={inputSt} type="search" placeholder="Seach Here..." value={this.state.query}
          onChange={ (event) => { this.setState({ query: event.target.value }) } } />

        {this.handleChange()}

      </div>
    )
  }
}

export default Senators;
