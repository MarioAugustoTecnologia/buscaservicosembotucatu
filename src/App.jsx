import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import { ToastContainer } from 'react-toastify';
import Informatica from './Informatica';
import MaridoAluguel from './MaridoAluguel';
import { Limpeza } from './Limpeza';
import Eletrica from './Eletrica';
import Sistemas from './Sistemas';
import Hidraulica from './Hidraulica';
import Pinturas from './Pinturas';
import Construcao from './Construcao';
import Mecanica from './Mecanica';
import Seguranca from './Seguranca';
import RestauraPisos from './RestauraPisos';
import { HelmetProvider } from 'react-helmet-async';


const App = () => {

    return (
        <HelmetProvider>
            <div className='App'>
                <ToastContainer theme='colored'></ToastContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />}></Route>
                        <Route path='/tecnica' element={<Informatica />}></Route>
                        <Route path='/maridoaluguel' element={<MaridoAluguel />}></Route>
                        <Route path='/limpeza' element={<Limpeza />}></Route>
                        <Route path='/eletrica' element={<Eletrica />}></Route>
                        <Route path='/sistemas' element={<Sistemas />}></Route>
                        <Route path='/hidraulica' element={<Hidraulica />}></Route>
                        <Route path='/pinturas' element={<Pinturas />}></Route>
                        <Route path='/construcao' element={<Construcao />}></Route>
                        <Route path='/mecanica' element={<Mecanica />}></Route>
                        <Route path='/segeletronica' element={<Seguranca />}></Route>
                        <Route path='/restaurapisos' element={<RestauraPisos />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>

        </HelmetProvider>

    )
}

export default App