import { useState, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/HeaderHome/Header";
import ProdutosEmAltas from "../Components/ProdutosEmAltas/ProdutosEmAltas";
import "./DetalheProdutoPage.css";

function DetalhesProdutosPage() {
  const [filtros, setFiltros] = useState({
    marca: [],
    categoria: [],
    genero: [],
  });
  const [ordenacao, setOrdenacao] = useState("");
  const [pagina, setPagina] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [marcas, setMarcas] = useState([]);

  // Fetch marcas from API
  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/marca");
        if (!response.ok) {
          throw new Error("Failed to fetch marcas");
        }
        const data = await response.json();
        setMarcas(data); // Expecting [{ id: number, nome: string }, ...]
      } catch (error) {
        console.error("Error fetching marcas:", error);
        // Fallback to static list if API fails
        setMarcas([
          { id: 1, nome: "Addidas" },
          { id: 2, nome: "Calenciaga" },
          { id: 3, nome: "K-Swiss" },
          { id: 4, nome: "Nike" },
          { id: 5, nome: "Puma" },
        ]);
      }
    };

    fetchMarcas();
  }, []);

  // Atualiza filtros
  const handleFiltroChange = (tipo, valor, checked) => {
    setFiltros((prev) => {
      const valores = new Set(prev[tipo]);
      if (checked) valores.add(valor);
      else valores.delete(valor);
      return { ...prev, [tipo]: Array.from(valores) };
    });
    setPagina(1);
  };

  // Atualiza total de páginas quando ProdutosEmAltas muda
  const handleTotalPagesChange = (total) => {
    setTotalPages(total);
  };

  // Paginação
  const handleNextPage = () => {
    if (pagina < totalPages) setPagina((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (pagina > 1) setPagina((prev) => prev - 1);
  };

  return (
    <>
      <Header />
      <div className="layoutProdutos">
        <aside className="filtros">
          <h3>Filtrar por</h3>

          <div className="filtro">
            <strong>Marca</strong>
            {marcas.map((m, i) => (
              <label key={m.id || m.nome}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFiltroChange("marca", m.id || i + 1, e.target.checked)
                  }
                  defaultChecked={i === 0 || i === 2}
                />
                {m.nome}
              </label>
            ))}
          </div>

          <div className="filtro">
            <strong>Categoria</strong>
            {["Esporte e lazer", "Casual", "Utilitário", "Corrida"].map(
              (c, i) => (
                <label key={c}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleFiltroChange("categoria", i + 1, e.target.checked)
                    }
                    defaultChecked={i === 0}
                  />
                  {c}
                </label>
              )
            )}
          </div>

          <div className="filtro">
            <strong>Gênero</strong>
            {["Masculino", "Feminino", "Unisex"].map((g) => (
              <label key={g}>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleFiltroChange("genero", g.charAt(0), e.target.checked)
                  }
                  defaultChecked={g === "Masculino"}
                />
                {g}
              </label>
            ))}
          </div>

          <div className="filtro">
            <strong>Ordenar</strong>
            <select onChange={(e) => setOrdenacao(e.target.value)}>
              <option value="">Padrão</option>
              <option value="preco_asc">Preço crescente</option>
              <option value="preco_desc">Preço decrescente</option>
              <option value="lancamento">Mais novos</option>
            </select>
          </div>
        </aside>

        <div className="produtos-com-paginacao">
          <ProdutosEmAltas
            filtros={filtros}
            ordenacao={ordenacao}
            pagina={pagina}
            onTotalPagesChange={handleTotalPagesChange}
          />

          {/* Paginação */}
          <div className="paginacao">
            <button onClick={handlePrevPage} disabled={pagina === 1}>
              {"<"} Anterior
            </button>
            <span>
              Página {pagina} de {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={pagina === totalPages}>
              Próxima {">"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetalhesProdutosPage;