import{useState, useEffect} from "react"
import TesteComponente from "../Components/testeComponents/testecomponente";

function Teste() {
  
  const [characters, setcharacters] =useState([])

  useEffect(() => {
        async function testejv() {
      const response = await fetch ("https://last-airbender-api.fly.dev/api/v1/characters")
      const data = await response.json()
      setcharacters(data)
      
    }
    testejv()
  }, []);
console.log(characters)

  return(
    <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">Spicie</th>
      <th scope="col">Gender</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
{
  characters.map((character)=>(
      <TesteComponente
      key={character._id}
      id={character._id}
      name={character.name}
      image={character.photoUrl}
      allies={character.allies}
      enemies={character.enemies}
      />
  ))
}
  </tbody>
</table>
    </>
  )
}

export default Teste


    
