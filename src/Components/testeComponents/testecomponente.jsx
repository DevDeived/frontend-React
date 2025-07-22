import "../../Pages/Teste"

function TesteComponente(props) {
    
  
  return (
    <>
    <tr>
        <th scope="row"> {props.id}</th>
        <td>{props.name}</td>
        <td>{props.allies}</td>
        <td>{props.enemies}</td>
        <td><img src={props.image} alt="" /></td>
    </tr>
    </>
  )
}

export default TesteComponente