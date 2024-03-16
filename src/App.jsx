// Importando controle de estado de variáveis
import { useState } from 'react';
// Importando imagens
import Hashtaurante from './assets/hashtaurante.webp';
// Importando CSS
import './App.css';
// Importando componentes
import { Navegacao } from './Navegacao.jsx';
import { ItemCardapio } from './ItemCardapio.jsx';
import { pratosPrincipais, sobremesas, bebidas, enroladinhoMignon } from './cardapio.js';

// Exportando recursos do arquivo
export function App(){
  // Lista de páginas
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  // Variável de controle para ver qual página está selecionada. Ou seja, é uma variável de estado que servirá para monitorar condições com o auxílio de uma função manipuladora
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  // Retornando conteúdo na regra de tag única
  return <>
    <img src={Hashtaurante} alt="" className='capa'/>
    <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
    <div className='menu'>
      {/* Percorrendo a lista para montar os itens do cardápio com os dados passados*/}
      {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} preco={item.preco} descricao={item.descricao} imagem={item.imagem}/>)}
    </div>
  </>
}