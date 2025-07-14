import "../CarrinhoBody/CarrinhoBody.css"
import Tenis1 from "../../assets/tenis1.png"
import InputButton from "../InputButton/InputButton"

function CarrinhoBody() {

    return (
        <>
            <section id="container-carrinho">
                <section id="barra-esquerda-carrinho">
                    <div id="header-carrinho">
                        <h5 class="coluna-produto">MEU CARRINHO</h5>
                        <div id="header-carrinho-lado">
                            <h5 class="coluna-qtd">QUANTIDADE</h5>
                            <h5 class="coluna-unit">UNITÁRIO</h5>
                            <h5 class="coluna-total">TOTAL</h5>
                        </div>
                    </div>


                    <hr />

                    <div id="item-carrinho">
                        <div id="imagem-carrinho">
                            <img src={Tenis1} alt="Tênis" />
                            <div id="info-produto">
                                <p><strong>Tênis Nike Revolution 6 Next Nature Masculino</strong></p>
                                <p><span className="info-cor">Cor:</span> Vermelho / Branco</p>
                                <p><span className="info-cor">Tamanho:</span> 42</p>
                            </div>
                        </div>

                        <div class="coluna-quantidade">
                            <div id="quantidade">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <a href="#" class="remover-item">Remover item</a>
                        </div>

                        <div id="coluna-unitario">
                            <div class="taxado">R$ 219,00</div>
                            <div class="preco"><h4>R$ 219,00</h4></div>
                        </div>
                        <div id="coluna-total">
                            <div class="taxado">R$ 219,00</div>
                            <div class="preco"><h4>R$ 219,00</h4></div>
                        </div>
                    </div>

                    <hr />
                    <div id="campos-cupom-frete">
                        <InputButton
                            labelId="cupom-color"
                            labelValue="Cupom de desconto"
                            inputId="cupom"
                            placeholder="Insira seu código"
                        />

                        <div class="campo">
                            <label for="frete" id="frete-color">Calcular frete</label>
                            <div class="input-btn">
                                <input type="text" id="frete" placeholder="Insira seu CEP" />
                                <button class="btn-ok">OK</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="barra-direita-carrinho">
                    <h5>RESUMO</h5>
                    <hr />
                    <div id="resumo-valores">
                        <div>
                            <h5 className="color-resumo-valores">Subtotal:</h5>
                            <h5 className="color-resumo-valores">Frete:</h5>
                            <h5 className="color-resumo-valores">Desconto:</h5>
                            <h4 id="">Total</h4>
                        </div>
                        <div id="resumo-valores-lateral">
                            <h5>R$ 219,00</h5>
                            <h5>R$ 0,00</h5>
                            <h5>R$ 30,00</h5>
                            <h4 id="total-valor">R$ 219,00</h4>
                            <h6 id="parcelamento-total">ou 10x de R$21,00 sem juros</h6>
                        </div>
                    </div>
                    <div><button id="btn-resumo-valores-lateral">Continuar</button></div>
                </section>
            </section>

        </>
    )
}

export default CarrinhoBody
