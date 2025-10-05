import "./Card.css";

function Card(props) {
  return (
    <div id="image">
      <div className="containerImage">
        <img
          id="imageCard"
          src={props.image || "https://via.placeholder.com/200"}
          alt={props.description}
        />
        <div
          className="divVerde"
          style={{ backgroundColor: props.style || "#e7ff86" }}
        >
          <p>{props.discount || ""}</p>
        </div>
      </div>
      <div className="containerTitles">
        <span>{props.department}</span>
        <p>{props.description}</p>
        <strong>
          <span id="fullprice">R$ {props.fullPrice}</span> R${" "}
          {props.discountedPrice}
        </strong>
      </div>
    </div>
  );
}

export default Card;
