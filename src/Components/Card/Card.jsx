import "./Card.css";

function Card({ image, estilo, desconto, departamento, descricao, precoOriginal, precoComDesconto }) {
  return (
    <div className="card">
      <div className="containerImagem">
        <img
          className="imagemCard"
          src={image || "https://via.placeholder.com/200"}
          alt={descricao}
        />
        {desconto && (
          <div className="divVerde" style={{ backgroundColor: estilo || "#e7ff86" }}>
            <p>{desconto}%</p>
          </div>
        )}
      </div>
      <div className="containerTitulos">
        <span>{departamento}</span>
        <p>{descricao}</p>
        <strong>
          <span className="precoOriginal">R$ {precoOriginal}</span> R$ {precoComDesconto}
        </strong>
      </div>
    </div>
  );
}

export default Card;
