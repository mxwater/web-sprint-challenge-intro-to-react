import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const[peopleData, setPeopleData] = useState([]);
  const [planetsData, setPlanetsData] = useState(null);
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

  //make sure we have the planet data first
  //use the planet array to make a planet object
  //then get the people data
  //mod the people array by adding the name of the planet to each person


  useEffect(() => {
    axios.get(urlPlanets).then((response) => {
      console.log(response.data)
      const planetObject = {}
      response.data.forEach(element => {
        planetObject[element.id] = element.name
      });
      console.log(planetObject)
      setPlanetsData(planetObject)
    })

  },[])

  useEffect(() => {
    if (planetsData) {
    axios.get(urlPeople).then((response) => {
      console.log(response.data)
      const modified=response.data.map((person) => {
        return {...person, homeworld:{
          id:person.homeworld, 
          name: planetsData[person.homeworld]
        }}

      })
      console.log(modified)
      setPeopleData(modified)
    })
  }

  },[planetsData])

 
  
  return (
    <div>
      <h2>Star Wars Characters!</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {peopleData.map((person) => {
        return <Character char={person}/>

      })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
