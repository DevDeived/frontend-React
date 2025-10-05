import { useEffect, useState } from "react";
import "./ProdutosEmAltas.css";

function ProdutosEmAltas({ filtros, ordenacao, pagina }) {
  const [produtos, setProdutos] = useState([]);
  const [setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const params = new URLSearchParams();

        // Adiciona filtros
        if (filtros.marca.length) filtros.marca.forEach(m => params.append("marca_id", m));
        if (filtros.categoria.length) filtros.categoria.forEach(c => params.append("categoria_id", c));
        if (filtros.genero.length) filtros.genero.forEach(g => params.append("genero", g));

        // Ordenação e página
        if (ordenacao) params.append("sort", ordenacao);
        params.append("page", pagina);

        const res = await fetch(`http://localhost:3000/api/produto?${params.toString()}`);
        const data = await res.json();

        setProdutos(data.data || []);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, [filtros, ordenacao, pagina]);

  return (
    <div id="produtoImg">
      {produtos.length > 0 ? (
        produtos.map((produto) => (
          <div className="card-produto" key={produto.id}>
            <div className="containerImage">
              <img src={`http://localhost:3000/${produto.imagem}`} alt={produto.nome} />
              {produto.promocao?.nome && (
                <div className="tag-desconto">{produto.promocao.nome}</div>
              )}
            </div>

            <span className="categoria">{produto.categoria?.nome}</span>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>Avaliação: {produto.avaliacao}</span>

            <div className="preco">
              {produto.precoOriginal && (
                <span className="preco-original">R$ {produto.precoOriginal}</span>
              )}
              <span className="preco-atual">R$ {produto.preco}</span>
            </div>

            <span>Marca: {produto.marca?.nome}</span>
            <span>Gênero: {produto.genero}</span>
            <span>Tamanho: {produto.tamanho} | Cor: {produto.cor}</span>
          </div>
        ))
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
}

export default ProdutosEmAltas;
