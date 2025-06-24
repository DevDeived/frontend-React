function InformacoesDePagamento() {
  return (
    <>
    <section>
      <form action="">
        <p>Informações de Pagamento</p>
        <hr />
        <p>Forma de Pagamento</p>
        <input type="radio" id="cartao" value="Cartão de Crédito"/>
        <label for="cartao">Cartão de Crédito</label>
        <input type="radio" id="boleto" value="Boleto Bancário"/>
        <label for="boleto">Boleto Bancário</label>
        <br />
        <label htmlFor="">Nome do Cartão *</label>
        <br />
        <input type="text" name="" id="" placeholder="Insira o nome do cartão" />
        <br />
        <label htmlFor="">Data de validade do Cartão *</label>
        <br />
        <input type="text" name="" id="" placeholder="Insira a validade do cartão" />
        <br />
        <label htmlFor="">CVV *</label>
        <br />
        <input type="text" name="" id="" placeholder="CVV" />
        <br />
      </form>
    </section>
    </>
  );
}

export default InformacoesDePagamento;
