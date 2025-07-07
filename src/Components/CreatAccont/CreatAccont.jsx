
import "./CreatAccont.css"
import Input from "../Input/Input";
function CreatAccont() {
    return (
        <>
            <section id="divigeral">
                <div>
                    <div id="superiorcriar">
                        <h1>Criar Conta</h1>
                    </div>
                    <p className="infope" >Informações Pessoais</p>
                    <hr className="hrzinho" />
                    <div id="cabecalhosuperiorcreat">

                        <Input
                            placeholder="Insira seu nome"
                            label="Nome Completo *"
                            type="text"
                        />
                        <Input
                            placeholder="Insira seu CPF"
                            label="CPF *"
                            type="text"
                        />
                        <Input
                            placeholder="Insira seu email"
                            label="E-mail *"
                            type="email"
                        />
                        <Input
                            placeholder="Insira seu celular"
                            label="Celular *"
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <p className="infope">Informações de Entrega</p>
                    <hr className="hrzinho" />
                    <div id="cabecalhosuperiorcreat">

                        <Input
                            placeholder="Insira seu endereço"
                            label="Endereço *"
                            type="text"
                        />
                        <Input
                            placeholder="Insira seu bairro"
                            label="Bairro *"
                            type="text"
                        />
                        <Input
                            placeholder="Insira sua cidade"
                            label="Cidade *"
                            type="text"
                        />
                        <Input
                            placeholder="Insira complemento"
                            label="Complemento *"
                            type="text"
                        />

                        <div id="checklembrete">
                            <input type="checkbox" name="" id="checkin" />
                            <label id="textocheck" htmlFor="">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a intenção do cliente.</label>
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
