import React from 'react'
import Masp from './imagens/masp.jpg'
import Planalto from './imagens/planalto.jpg'

export default function TableCars() {
    return (
        <div className='tabela1'><table  style={{color:'blueviolet', }}>
            <tr>
                <td>Rio de Janeiro </td>
                <td>São Paulo</td>
                <td>Brasília </td>
            </tr>
            <tr>
                <td>
                    <img src={Masp} />
                </td>
                <td>
                    <img src={Masp} />
                </td>
                <td>
                    <img src={Planalto} />
                </td>
            </tr>
            <tr>
                <td>Valor:</td>
                <td>Valor:</td>
                <td>Valor:</td>
            </tr>
            <tr>
                <td>R$ 300,00</td>
                <td>R$ 600,00</td>
                <td>R$ 700,00</td>
            </tr>
        </table>
        </div>
    );
}