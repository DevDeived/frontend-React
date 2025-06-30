import Tennis from "../../assets/White-Sneakers.png";
import "./ResumoDaCompra.css";
function ResumoDaCompra() {
  return (
    <>
      <section id="resumoCompra">
        <p>RESUMO</p>
        <hr />
        <div id="produto">
          <div id="tennis">
            <img src={Tennis} alt="" />
          </div>
          <p>Tênis Nike Revolution 6 Next Nature Masculino </p>
        </div>
        <hr />
        <div id="resumo">
          <div className="resumo">
            <p>Subtotal:</p>
            <p>R$ 219,00</p>
          </div>
          <div class="resumo">
            <p>Frete:</p>
            <p>R$ 0,00</p>
          </div>
          <div class="resumo">
            <p>Desconto:</p>
            <p>R$ 30,00</p>
          </div>
        </div>
        <div id="total">
          <div>
            <p>Total</p>
            <p>R$ 219,00</p>
          </div>
          <div>
            <p>ou 10x de 21,90 sem juros</p>
          </div>
        </div>
        <button>Realizar Pagamento</button>
      </section>
    </>
  );
}

export default ResumoDaCompra;
