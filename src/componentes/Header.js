import React from 'react';

export default function Header(){
    return(
        <>
    <h1 className='titulo'><i>TARDIS Company</i></h1>

    <nav className='menu'>

      <ul>
        <a href="../HTML/site da agencia - editando.html">HOME</a>
        <a href="../HTML/roteiros_destinos.html">ROTEIROS E DESTINOS</a>
        <a href="../HTML/pacotes.html">PACOTES E PROMOÇÕES</a>
        <a href="compra.html">COMPRA DE PACOTES</a>
        <a href="../HTML/fale_conosco.html">FALE CONOSCO</a> 
        <a href="Cadastre-se.html">CADASTRE-SE</a>

      </ul>
      <button onclick="login()" id="enviar">Login</button>
    </nav>
    </>

    )
}