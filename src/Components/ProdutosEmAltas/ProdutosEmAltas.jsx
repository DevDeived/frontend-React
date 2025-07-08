import "./ProdutosEmAltas.css";
import CardImage from "../../assets/tenisCard.png"
import Card from "../Card/Card";
function ProdutosEmAltas() {
  return (
    <>
      <section id="produtos">
        <h1>Produtos em alta</h1>
        <div id="produtoImg">
          <Card
            image={CardImage}
            style={{}}
            discount="30% OFF"
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{}}
            discount="30% OFF"
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{}}
            discount="30% OFF"
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{ display: "none" }}
            discount=""
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{ display: "none" }}
            discount=""
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{ display: "none" }}
            discount=""
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{ display: "none" }}
            discount=""
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
          <Card
            image={CardImage}
            style={{ display: "none" }}
            discount=""
            department="Tênis"
            description="K-Swiss V8 - Masculino"
            fullPrice="$200"
            discountedPrice="$100"
          />
        </div>
      </section>
    </>
  );
}

export default ProdutosEmAltas;
