import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet-async";



const HomePage = () => {

   const handleWhatsAppClick = () => {

    var fone = document.getElementById('fone').textContent;
    console.log(fone)

    function limparTelefone(telefone) {
      return telefone.replace(/[\s()]/g, '');
    }

    // Exemplo de uso:
    var resultado = limparTelefone(fone);
    console.log(resultado); // "14997540089

    const numeroWhatsApp = "55" + resultado;
    const mensagem = 'Olá! Gostaria de mais informações ?';
    console.log(numeroWhatsApp)
    const url = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(url); 
  };  

  return (

    <div className="container-fluid">
         <Helmet>
             <title>buscaservicosembotucatu</title>
             <meta name="description" content="Encontre serviços em Botucatu" />
             <meta property="og:title" content="buscaservicosembotucatu" />
             <meta property="og:image" content="" />
             <link rel="canonical" href="https://buscaservicosembotucatu.onrender.com" />
          </Helmet>
      <div className="row flex-nowrap">
        <div className="main-wrapper">

          <nav class="sidebar bg-secondary" style={{ width: '300px', height: 1000, margin: '-15px' }}>
            <br /><br />
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu" style={{ margin: '0 15px' }}>
              <li className="w-100" style={{ fontSize: '19px', color: 'white' }}>

                <span className="ms-2 d-sm-inline">
                  Encontre Serviços de:
                </span>

              </li><br />
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/maridoaluguel"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-tools ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Marido de Aluguel:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/limpeza"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-droplet-half ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Limpeza:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/eletrica"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-lightbulb ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Elétrica:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/hidraulica"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-water ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Hidráulica:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/pinturas"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-brush ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Pintura:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/construcao"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-houses ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Construção Civil:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/mecanica"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-gear ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Auto-Mecânica:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/esteticaautomotiva"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-car-front ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Estética-Automotiva:
                  </span>
                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-pc-display ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Informática:

                  </span><br />
                  <Link className="nav-link px-0 align-middle text-white" to="/tecnica" >
                    <span className="ms-2 d-sm-inline">
                      * Assistência Técnica e Vendas
                    </span></Link>
                  <Link className="nav-link px-0 align-middle text-white" to="/sistemas" >
                    <span className="ms-2 d-sm-inline">
                      * Sistemas
                    </span>

                  </Link>

                </Link>
              </li>
              <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/segeletronica"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="bi bi-camera-video ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Segurança Eletrônica:
                  </span>
                </Link>
              </li>
               <li className="w-100" style={{ fontSize: '18px' }}>
                <Link
                  to="/restaurapisos"
                  className="nav-link px-0 align-middle text-white"
                >
                 <i class="bi bi-border-outer ms-2"></i>
                  <span className="ms-2 d-sm-inline">
                    Restauração de Pisos:
                  </span>
                </Link>
              </li>       
              


            </ul>
          </nav>
        </div>
      </div>

      <footer class="footer-mobile py-4 bg-secondary d-flex justify-content-center" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', color: 'white', textAlign: 'center', zIndex: 1000 }}>
        <p onClick={handleWhatsAppClick} className="fw-bolder text-white" id="fone" style={{cursor:'pointer'}}>&copy; map sistemas - anuncie grátis pelo número: <br />
          <i class="bi bi-whatsapp fs-5 ms-2" style={{ color: 'lime' }}></i>      (14) 997540089 </p>
      </footer>


    </div>
  )
}

export default HomePage