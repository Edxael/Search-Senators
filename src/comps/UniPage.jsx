import React from 'react'
import data from './data/data.json';
import { Link } from 'react-router-dom';


const Child = ({ match }) => {
  const dataBox = { textAlign: "left", border: "2px solid black", padding: "7px", backgroundColor: "rgb(251, 255, 177)" }
  const linkReturn = { border: "2px solid black", padding: "4px 6px", backgroundColor: "rgb(141, 254, 52)" }
  return (
    <div>
      <h1>ID: {match.params.id}</h1>
      <div>Senator Info:</div>

      <div>{
          data.filter((x)=>{return x.person.name === match.params.id})
              .map((x)=>{return(
                <div style={dataBox} key={x.state}>
                  <div><strong>Name: </strong>{x.person.firstname + " " + x.person.lastname}</div>
                  <div><strong>Party: </strong>{x.party}</div>
                  <div><strong>Sen Rank: </strong>{x.senator_rank}</div>
                  <div><strong>Birthday: </strong>{x.person.birthday}</div>
                  <div><strong>Gender: </strong>{x.person.gender_label}</div>
                  <div><strong>Phone: </strong>{x.phone}</div>
                  <div><strong>Fax: </strong>{x.extra.fax}</div>
                  <div><strong>Website: </strong><a href={x.website} target="blank">{x.website}</a></div>
                  <div><strong>Mailig Address: </strong>{x.extra.address}</div>
                </div>
              )})
        }</div>

      <br/>
      <div><Link style={linkReturn} to="/"><strong>Back to Search</strong></Link></div>

    </div>
  )
}

export default Child
