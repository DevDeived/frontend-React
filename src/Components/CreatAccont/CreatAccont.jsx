
import "./CreatAccont.css"

function CreatAccont() {
  return (
    <>
      <section >
        <div id="divigeral">
            <div id="cabecalhosuperiorcreat">
                <div id="superiorcriar">
                    <h1>Criar Conta</h1>
                </div>
                <div class="campospreench">
                    <p id="infope" >Informações Pessoais</p>
                    <hr id="hrzinho"/>
                    <label class="textsp" htmlFor="">Nome completo *</label>
                    <input type="text" name="" placeholder="Insira seu nome" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">CPF *</label>
                    <input type="number" name="" placeholder="Insira seu CPF" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">E-mail *</label>
                    <input type="text" name="" placeholder="Insira seu email" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">Celular *</label>
                    <input type="text" name="" placeholder="Insira seu celular" id="camposplace" />
                </div>                 
            </div>
        </div>
        <div>
            <div id="cabecalhosuperiorcreat">
                <div id="novesfora">
                    <p id="infoentr">Informações de Entrega</p>
                    <hr />
                    <label class="textsp" htmlFor="">Endereço *</label>
                    <input type="text" name="" placeholder="Insira seu endereço" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">Bairro *</label>
                    <input type="text" name="" placeholder="Insira seu bairro" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">Cidade *</label>
                    <input type="text" name="" placeholder="Insira sua cudade" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">CEP *</label>
                    <input type="text" name="" placeholder="Insira seu CEP" id="camposplace" />
                </div>
                <div class="campospreench">
                    <label class="textsp" htmlFor="">Complemento</label>
                    <input type="text" name="" placeholder="Insira complemento" id="camposplace" />
                </div>
                <div id="checklembrete">
                    <input type="checkbox" name="" id="checkin" />
                    <label id="textocheck" htmlFor="">Quero receber por email ofertas e noviddades das lojas da Digital Store. A frequência de envios pode variar de acordo com a intenção do cliente.</label>
                </div>
                <div>
                    <input type="button" id="botaodecriaraconta" value="Criar Conta" />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default CreatAccont;
