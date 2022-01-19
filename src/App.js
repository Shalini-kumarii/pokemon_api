
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

  const [pokemons, setPokemones] = useState([])

  // useEffect to show the data at page loding
  // useEffect(() =>{
  //   fetchPokemons();
  // },[]) // //never put the SAME state variable in [] bc useEffect will re-trigger

  // Vanilla JS fetch
  
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        console.log(jsonRes);
        setPokemones(jsonRes.results);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
    <h2>pokemon</h2>
    <button onClick={fetchPokemons}>Fetch Pokemon</button> 
    <hr />
   {/*{JSON.stringify(pokemons)}*/}
    <table>
    <thead>
      <tr>
      <th>Count</th>
        <th>Pokemon Name</th>
      </tr>
    </thead>
    <tbody>
      {
          pokemons.map((pok,index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{pok.name}</td>
              </tr>
            )
          }) 
      }
    </tbody>
  </table> 
    </div>
  );
}

export default App;
