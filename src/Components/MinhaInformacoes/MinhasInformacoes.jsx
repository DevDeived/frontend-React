import "../MinhaInformacoes/MinhasInformacoes.css"

const SideBar = () => {
    return(
        <div id="geral">
            <div>
                <ul>
                    <li>Meu Perfil</li>
                    <li>Meus Pedidos</li>
                    <li>Minhas Informações</li>
                    <li>Metodos de Pagamento</li>
                </ul>
            </div>
            <div class="container">
                <div class="top-bar">
                    <h2>Minhas Informações</h2>
                    <a href="#" class="edit-link">Editar</a>
                </div>

                <div class="section">
                    <h3>Informações Pessoais</h3>
                    <div class="info-item"><span class="info-label">Nome:</span> <span class="info-value">Francisco Antonio Pereira</span></div>
                    <div class="info-item"><span class="info-label">CPF:</span> <span class="info-value">123485913-35</span></div>
                    <div class="info-item"><span class="info-label">Email:</span> <span class="info-value">francisco@gmail.com</span></div>
                    <div class="info-item"><span class="info-label">Celular:</span> <span class="info-value">(85) 5555-5555</span></div>
                </div>

                <div class="section">
                    <h3>Informações de Entrega</h3>
                    <div class="info-item"><span class="info-label">Endereço:</span> <span class="info-value">Rua João Pessoa, 333</span></div>
                    <div class="info-item"><span class="info-label">Bairro:</span> <span class="info-value">Centro</span></div>
                    <div class="info-item"><span class="info-label">Cidade:</span> <span class="info-value">Fortaleza, Ceará</span></div>
                    <div class="info-item"><span class="info-label">CEP:</span> <span class="info-value">433-8800</span></div>
                </div>
            </div>
        </div>
    )
}

export default SideBar