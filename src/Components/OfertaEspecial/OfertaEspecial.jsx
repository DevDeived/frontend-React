import especial from "../../assets/banner2.png"
import "./OfertaEspecial.css";

function OfertaEspecial() {
  return (
    <>
    <section id="oferta">
      <div id="ofertaImg">
        <img src={especial} alt="" />
      </div>
      <div id="ofertaEspecial">
        <h3>Oferta especial</h3>
        <h1>Air Jordan edição de colecionador</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde provident velit consectetur optio vel culpa corporis nam sunt dolores.</p>
        <button>Ver Oferta</button>
      </div>
    </section>
    </>
  );
}

export default OfertaEspecial;