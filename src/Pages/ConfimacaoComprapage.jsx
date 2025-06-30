import FinalizarCompra from "../Components/ConfirmacaoDeCompra/FinalizarCompra";
import ResumoDaCompra from "../Components/ConfirmacaoDeCompra/ResumoDaCompra";
import "./ConfirmacaoComprapage.css";
import Footer from "../Components/Footer/Footer";
import TotalCompra from "../Components/ConfirmacaoDeCompra/TotalCompra";
function ConfimacaoComprapage() {
  return (
    <>
      <section id="confirmacaoCompra">
        <div id="informacoes"><FinalizarCompra />
        <ResumoDaCompra /></div>
        <TotalCompra />
      </section>
      <Footer />
    </>
  );
}

export default ConfimacaoComprapage;
