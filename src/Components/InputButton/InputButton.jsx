import "InputButton.css"

function InputButton(props) {

    return (
        <>
            <div class="campo">
                <label for="cupom" id={props.labelId}>{props.labelValue}</label>
                <div class="input-btn">
                    <input type="text" id={props.inputId} placeholder={props.placeholder} />
                    <button class="btn-ok">OK</button>
                </div>
            </div>
        </>
    )
}

export default InputButton
