import React from 'react';
import Header from './componentes/Header.js';
import TableCars from './componentes/TableCars.js'
import Footer from './componentes/Footer.js';
import './App.css'

function App(){
return(
<> <header className='Cabecalho'><Header/></header>

<div className='Meio'>
<TableCars/>
<br/>
<br/>
<br/>
<br/></div>

<Footer/>

</>
)
}
export default App;