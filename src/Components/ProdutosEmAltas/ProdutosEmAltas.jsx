import "./ProdutosEmAltas.css";
import Card from "../Card/Card";
import {useState,useEffect} from "react";

function ProdutosEmAltas() {
  const [data,setData] = useState([])

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://68759a5f814c0dfa6538eef2.mockapi.io/api/Produtos")
      let data = await response.json()
      setData(data)
    }
    getData();
  }, []);
  console.log(data)
  return (
    <>
      <section id="produtos">
        <h1>Produtos em alta</h1>
        <div id="produtoImg">
          {
            data.map((produto) => (
            <Card
            key={produto.id}
            image={produto.image}
            style={produto.style}
            discount={produto.discount}
            department={produto.department}
            description={produto.description}
            fullPrice={produto.fullPrice}
            discountedPrice={produto.discountedPrice}
          />
            ))
          }
        </div>
      </section>
    </>
  );
}

export default ProdutosEmAltas;
