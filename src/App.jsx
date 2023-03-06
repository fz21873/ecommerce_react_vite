import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom'
import GlobalStyle from './style/global';
import { Rotas } from './rotas';
import { EstadoGlobal } from './global/EstadoGlobal';


function App() {


  return (
   
    <BrowserRouter>
     <EstadoGlobal>
      <GlobalStyle/>
     <Rotas/> 
     </EstadoGlobal>
    </BrowserRouter>
   
  );
}

export default App;
