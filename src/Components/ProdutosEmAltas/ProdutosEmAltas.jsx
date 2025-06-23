import produto from "../../assets/ProdutoDestaque.png";
import "./ProdutosEmAltas.css";

function ProdutosEmAltas() {
  return (
    <>
      <section id="produtos">
        <h1>Produtos em alta</h1>
        <div id="produtoImg">
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
          <div id="image">
            <img src={produto} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProdutosEmAltas;
