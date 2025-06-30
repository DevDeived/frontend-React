

import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header"
import Banner from "../Components/Banner/Banner"
import ColecoesDestaque from "../Components/ColecaoEmDestaque/ColecaoEmDestaque"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/HeaderHome/Header"
import OfertaEspecial from "../Components/OfertaEspecial/OfertaEspecial"
import ProdutosEmAltas from "../Components/ProdutosEmAltas/ProdutosEmAltas"


function Homepage() {
  
  return (
    <>
        <Header/>
        <Banner/>
        <ColecoesDestaque/>
        <ProdutosEmAltas/>
        <OfertaEspecial/>
        <Footer/>
    </>
  )
}

export default Homepage
