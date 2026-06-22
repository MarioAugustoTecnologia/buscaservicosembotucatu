import React from 'react'

const handleInstagramClick = () => {


  const url = `https://instagram.com/@munizdecor.botucatu`;
  window.open(url); // Abre em uma nova aba
};

const handleWhatsAppClick = () => {

  var fone = document.getElementById('fone').textContent;
  console.log(fone)

  function limparTelefone(telefone) {
    return telefone.replace(/[\s()]/g, '');
  }

  // Exemplo de uso:
  var resultado = limparTelefone(fone);
  console.log(resultado); // "14998216619"

  const numeroWhatsApp = "55" + resultado;
  const mensagem = 'Olá! Gostaria de mais informações ?';
  console.log(numeroWhatsApp)
  const url = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
  window.open(url); // Abre em uma nova aba
};


const MaridoAluguel = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="main-wrapper">

          <nav class="sidebar bg-secondary" style={{ width: '130px', height: 1000, margin: '-15px' }}>


          </nav>
        </div>
      </div>
      <div className="container" style={{ margin: '0 230px', marginTop: '-950px' }}>


      </div><br /><br />
      <div class="container-cards d-flex" style={{ width: '800px', margin: '0 220px', height: '200px' }}>


        <div class="card" style={{ backgroundColor: 'black', width: '410px', margin: '0 40px', height: '515px' }}>

          <div class="card-conteudo" style={{ color: 'yellow', margin: '0 20px' }}>
            <br />
            <center><h4>Muniz Decor</h4></center>
            <div className='d-flex' style={{ margin: '0 155px' }}>
              <i class="bi bi-brush ms-2 fs-5"></i><i style={{ color: 'cyan' }} class="bi bi-bucket" ms-2 fs-5></i>
            </div>  <br />
            <p> - Especialista em serviços de pintura e acabamento para sua residência, comércio ou condominio:</p>
            <p style={{ color: 'white' }}> Pinturas e Marido de Aluguel</p>
            <p> - Instalações:</p>
            <p> - Serviços Hidraulicos:</p>
            <p> - Reparos Gerais:</p>
            <p> - Montagem de Móveis:</p>
            <p> - Reparos Elétricos:</p>
            <p> - Manutenção de Jardins:</p>
            <p></p>
            <div className='d-flex'>
                <p id='fone' style={{ cursor: 'pointer' }} onClick={handleWhatsAppClick}><i class="bi bi-whatsapp fs-5 ms-2" style={{ color: 'lime' }}></i>      (14) 998998292 </p>
                <label style={{ cursor: 'pointer' }} htmlFor="" onClick={handleInstagramClick}><i class="bi bi-instagram ms-2 fs-5" style={{ color: 'DeepPink' }} ></i> @munizdecor.botucatu</label>
            </div>

          </div>
        </div>


      </div>


      <footer class="footer-mobile py-4 bg-secondary d-flex justify-content-center" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', color: 'white', textAlign: 'center', zIndex: 1000 }}>
        <p className="fw-bolder text-white">&copy; map sistemas</p>
      </footer>

    </div>
  )
}

export default MaridoAluguel
