import InformacoesPessoais from "../Components/ConfirmacaoDeCompra/InformacoesPessoais"
import InformacoesDePagamento from "../Components/ConfirmacaoDeCompra/InformacoesDePagamento"
import InformacoesDeEntrega from "../Components/ConfirmacaoDeCompra/InformacoesDeEntrega"
import FinalizarCompra from "../Components/ConfirmacaoDeCompra/FinalizarCompra"
import ResumoDaCompra from "../Components/ConfirmacaoDeCompra/ResumoDaCompra"
import "./ConfirmacaoCompra.css"
import Footer from "../Components/Footer/Footer"
function ConfimacaoComprapage() {
  
  return (
    <>
        <section id="confirmacaocompra"><h1>Finalizar Compra</h1>
        <InformacoesPessoais/>
        <InformacoesDeEntrega/>
        <InformacoesDePagamento/>
        <FinalizarCompra/>
        <ResumoDaCompra/></section>
        <Footer/>
       
    </>
  )
}

export default ConfimacaoComprapage
