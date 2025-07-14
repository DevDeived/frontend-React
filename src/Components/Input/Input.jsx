
import "../LoginBody/LoginBody.css"
function Input(props) {

  return (
    <>
        <div class="campospreench">
            <label class="textsp" htmlFor="">{props.label}</label>
            <input type={props.type} name="" placeholder={props.placeholder} id="camposplace" />
        </div>
    </>
  )
}

export default Input
