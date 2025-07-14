import "./ProdutosEmAltas.css";
import CardImage from "../../assets/tenisCard.png"
import Card from "../Card/Card";
import Banner2 from "../../assets/banner2.png"
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
            image={Banner2}
            style={{}}
            discount="40% OFF"
            department="Tênis Nike"
            description="Nike Air Max 270 - Masculino"
            fullPrice="$300"
            discountedPrice="$200"
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
