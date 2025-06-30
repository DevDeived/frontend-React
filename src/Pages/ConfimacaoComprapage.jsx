import FinalizarCompra from "../Components/ConfirmacaoDeCompra/FinalizarCompra";
import ResumoDaCompra from "../Components/ConfirmacaoDeCompra/ResumoDaCompra";
import "./ConfirmacaoComprapage.css";
import Footer from "../Components/Footer/Footer";
function ConfimacaoComprapage() {
  return (
    <>
      <section id="confirmacaocompra">
        <FinalizarCompra />
        <ResumoDaCompra />
      </section>
      <Footer />
    </>
  );
}

export default ConfimacaoComprapage;
