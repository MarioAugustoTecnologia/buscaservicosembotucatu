import React from 'react'

const EsteticaAutomotiva = () => {
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


        <div class="card" style={{ backgroundColor: 'black', width: '450px', margin: '0 40px', height: '515px' }}>

          <div class="card-conteudo" style={{ color: 'Crimson', margin: '0 20px' }}>
            <br />
            <center><h4>4R Estetica Automotiva</h4></center>
            <div className='d-flex' style={{ margin: '0 172px' }}>
               <i class="bi bi-car-front ms-2 fs-2"></i>
            </div>  <br />
            <p style={{color:'white'}}> - Lavagem Detalhada </p>
            <p style={{color:'white'}} >- Lavagem Simples</p>
            <p style={{color:'white'}}> - Higienização Interna</p>
            <p style={{color:'white'}}> - Polimento Tecnico </p>
            <p style={{color:'white'}}> - Cristalização </p>
            <p style={{color:'white'}}> - Lavagem de Motor </p>
            <p style={{color:'white'}}> - Restauração de Faróis </p>
            <br />
            <div className='d-flex' style={{color:'white'}}>
                <p id='fone' style={{ cursor: 'pointer' }}><i class="bi bi-whatsapp fs-5 ms-2" style={{ color: 'lime' }}></i>      (14) 997698593 </p>
                <label style={{ cursor: 'pointer' }} htmlFor=""><i class="bi bi-instagram ms-2 fs-5" style={{ color: 'DeepPink' }} ></i> 4R_ESTETICA_AUTOMOTIVA </label>
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

export default EsteticaAutomotiva
