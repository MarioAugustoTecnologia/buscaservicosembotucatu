import React from 'react'

const Sistemas = () => {


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
        const url = `https://web.whatsapp.com/{numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
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

                <div class="card" style={{ backgroundColor: 'navy', width: '350px', height: '285px' }}>

                    <div class="card-conteudo" style={{ color: 'white', margin: '0 20px' }}>
                        <br />
                        <center><h4>Mário Augusto Pisani</h4></center>
                        <center><i class="bi bi-pc-display ms-2 fs-1"></i></center>
                        <p> - Manutenção e Suporte em Informática:</p>
                        <p> - Vendas:</p>
                        <p> -Sistemas para Comércio e Serviços:</p>
                        <p onClick={handleWhatsAppClick} id='fone' style={{ cursor: 'pointer' }}><i class="bi bi-whatsapp fs-5 ms-2" style={{ color: 'lime', cursor: 'pointer' }}></i>      (14) 998216619</p>

                    </div>
                </div>



            </div>


            <footer class="footer-mobile py-4 bg-secondary d-flex justify-content-center" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', color: 'white', textAlign: 'center', zIndex: 1000 }}>
                <p className="fw-bolder text-white">&copy; map sistemas</p>
            </footer>

        </div>
    )
}

export default Sistemas