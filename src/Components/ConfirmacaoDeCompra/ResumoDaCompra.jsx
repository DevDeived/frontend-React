import Tennis from "../../assets/White-Sneakers.png"
import "./ResumoDaCompra.css"
function ResumoDaCompra() {
  return (
    <>
      <section id="resumocompra">
        <div>
          <p >RESUMO</p>
        </div>
        <hr />
        <div id="resumo">
          <div id="tennis">
            <img src={Tennis} alt="" />
          </div>
            <p>Tênis Nike Revolution 6 Next Nature Masculino </p>
        
        </div>
        <hr />
        <div>
          <div>
            <p>Subtotal:</p>
          </div>
          <div>
            <p>R$ 219,00</p>
          </div>
        </div>
        <div>
          <div>
            <p>Frete:</p>
          </div>
          <div>
            <p>R$ 0,00</p>
          </div>
        </div>
        <div>
          <div>
            <p>Desconto:</p>
          </div>
          <div>
            <p>R$ 0,00</p>
          </div>
        </div>
        <div>
          <div>
          <div>
            <p>TOTAL</p>
          </div>
          <div>
            <p>R$ 219,00</p>
          </div>
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
