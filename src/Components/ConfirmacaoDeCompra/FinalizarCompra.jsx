import "./FinalizarCompra.css";

function FinalizarCompra() {
  return (
    <section id="finalizarCompra">
      <h3>Finalizar Compra</h3>
      <div id="infoPessoal">
        <p>Informações Pessoais</p>
        <hr />
        <form id="form1">
          <label htmlFor="">Nome Completo *</label>
          <input type="text" name="" id="nome" placeholder="Insira seu nome" />
          <label htmlFor="">CPF *</label>
          <input type="text" name="" id="" placeholder="Insira seu CPF" />
          <label htmlFor="">E-mail *</label>
          <input type="text" name="" id="" placeholder="Insira seu email" />
          <label htmlFor="">Celular *</label>
          <input type="text" name="" id="" placeholder="Insira seu celular" />
        </form>
      </div>
      <div id="infoEntrega">
        <form id="form2">
          <p>Informações de Entrega</p>
          <hr />
          <label htmlFor="">Endereço *</label>
          <input type="text" name="" id="" placeholder="Insira seu endereço" />
          <label htmlFor="">Bairro *</label>
          <input type="text" name="" id="" placeholder="Insira seu bairro" />
          <label htmlFor="">Cidade *</label>
          <input type="text" name="" id="" placeholder="Insira sua cidade" />
          <label htmlFor="">CEP *</label>
          <input type="text" name="" id="" placeholder="Insira seu CEP" />
          <label htmlFor="">Complemento</label>
          <input type="text" name="" id="" placeholder="Insira complemento" />
        </form>
      </div>
      <div id="infoPagamento">
        <p>Informações de Pagamento</p>
        <hr />
        <p>Forma de Pagamento</p>
        <form id="formaDePagamento" action="">
          <input name="formaDePagamento" type="radio" id="cartao" value="Cartão de Crédito" />
          <label for="cartao">Cartão de Crédito</label>
          <input name="formaDePagamento" type="radio" id="boleto" value="Boleto Bancário" />
          <label for="boleto">Boleto Bancário</label>
        </form>
        <form id="dadosCartao">
          <label htmlFor="">Nome do Cartão *</label>
          <input type="text" name="" id="" placeholder="Insira o nome do cartão" />
          <div>
            <div>
              <label htmlFor="">Número do Cartão *</label>
              <input type="text" name="" id="" placeholder="Insira o nome do cartão" />
            </div>
            <div>
              <label htmlFor="">Data de validade do Cartão *</label>
              <input type="text" name="" id="" placeholder="Insira a validade do cartão" />
            </div>
            <div><label htmlFor="">CVV *</label>
          <input type="text" name="" id="" placeholder="CVV" /></div>
          </div>
        </form>
      </div>
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
    </section>
  );
}

export default FinalizarCompra;
