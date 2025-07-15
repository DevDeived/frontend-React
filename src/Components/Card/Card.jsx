
import "./Card.css"

function Card(props) {

    return (
        <>
            <div id="image">
                <div className="containerImage">
                    <img  id="imageCard" src={props.image} alt="" />
                    <div style={props.style} className="divVerde">
                        <p>{props.discount}</p>
                    </div>
                </div>
                <div className="containerTitles">
                    <span>{props.department}</span>
                    <p>{props.description}</p>
                    <strong><span id="fullprice">{props.fullPrice}</span> {props.discountedPrice}</strong>
                </div>
            </div>
        </>
    )
}

export default Card
