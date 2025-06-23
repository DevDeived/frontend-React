import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderHome/Header";
import ProdutosEmAltas from "../Components/ProdutosEmAltas/ProdutosEmAltas";
import "./DetalheProdutoPage.css"

function DetalhesProdutosPage() {
  return (
    <>
      <Header />

      <div className="layoutProdutos">
        <aside className="filtros">
          <h3>Filtrar por</h3>

          <div className="filtro">
            <strong>Marca</strong>
            <label><input type="checkbox" defaultChecked /> Addidas</label>
            <label><input type="checkbox" /> Calenciaga</label>
            <label><input type="checkbox" defaultChecked /> K-Swiss</label>
            <label><input type="checkbox" /> Nike</label>
            <label><input type="checkbox" /> Puma</label>
          </div>

          <div className="filtro">
            <strong>Categoria</strong>
            <label><input type="checkbox" defaultChecked /> Esporte e lazer</label>
            <label><input type="checkbox" /> Casual</label>
            <label><input type="checkbox" /> Utilitário</label>
            <label><input type="checkbox" /> Corrida</label>
          </div>

          <div className="filtro">
            <strong>Gênero</strong>
            <label><input type="checkbox" defaultChecked /> Masculino</label>
            <label><input type="checkbox" /> Feminino</label>
            <label><input type="checkbox" /> Unisex</label>
          </div>
        </aside>
        <ProdutosEmAltas />
      </div>
      
      <Footer />
    </>
  );
}

export default DetalhesProdutosPage;
