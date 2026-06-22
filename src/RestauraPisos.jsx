import React from 'react'



const RestauraPisos = () => {

    const handleInstagramClick = () => {


        const url = `https://instagram.com/work_restauracoes`;
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
        const mensagem = 'Olá! Gostaria de mais informações.';
        console.log(numeroWhatsApp)
        const url = `whatsapp://send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
        window.open(url); // Abre em uma nova aba
    };


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


                <div class="card" style={{ backgroundColor: 'black', width: '400px', margin: '0 40px', height: '250px' }}>

                    <div class="card-conteudo" style={{ margin: '0 20px' }}>
                        <br />
                        <center><h4 style={{ color: 'red' }}>Work</h4></center>
                        <center><i style={{ color: 'white' }} class="bi bi-border-outer ms-2 fs-1"></i></center>
                        <p style={{ color: 'gold' }}> - Restauração de Pisos</p>
                        <p style={{ color: 'gold' }}> - Polimento de Pisos, Pedras e Mármores</p>

                        <div className='d-flex'>
                             <p id='fone' onClick={handleWhatsAppClick} style={{ cursor: 'pointer', color: 'white' }}><i class="bi bi-whatsapp fs-5 ms-2" style={{ color: 'lime' }}></i>      (14) 997239474</p>
                             <label style={{ cursor: 'pointer', color:'white' }} htmlFor="" onClick={handleInstagramClick}><i class="bi bi-instagram ms-2 fs-5" style={{ color: 'DeepPink' }} ></i> work_restauracoes</label>
                            
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

export default RestauraPisos