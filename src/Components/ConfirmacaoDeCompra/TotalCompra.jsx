import "./TotalCompra.css"

function TotalCompra() {
  return (
    <>
      <div id="finalCompra">
        <p>Finalizar Compra</p>
        <hr />
        <div id="total">
          <p>Total</p>
          <p>R$219,00</p>
        </div>
        <p>ou 10x de 21,90 sem juros</p>
        <button>Realizar Pagamento</button>
      </div>
    </>
  );
}

export default TotalCompra;
