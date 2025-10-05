import "./ProdutosEmAltas.css";
import Card from "../Card/Card";

import { useState, useEffect } from "react";

function ProdutosEmAltas() {
  const [data,setData] = useState([])

  useEffect(() => {
    async function getData() {
      let response = await fetch("http://localhost:3000/api/produto")
      let data = await response.json()
      setData(data)
    }
    getData();
  }, []);
  
  return (
    <>
      <section id="produtos">
  <h1>Produtos em alta</h1>
  <div id="produtoImg">
    {
      data?.data?.length > 0 ? (
        data.data.map((produto) => (
          <Card
            key={produto.id}
            image={`http://localhost:3000/${produto.image}`}
            style={produto.estilo}
            discount={produto.desconto}
            department={produto.departamento}
            description={produto.descricao}
            fullPrice={produto.precoOriginal}
            discountedPrice={produto.precoComDesconto}
          />
        ))
      ) : (
        <p>Nenhum produto encontrado.</p>
      )
    }
  </div>
</section>
    </>
  );
}

export default ProdutosEmAltas;