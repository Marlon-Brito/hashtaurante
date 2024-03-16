// Apresentando itens do cardápio e passando suas informações
export function ItemCardapio(props){
    return <div className='container-item-cardapio'>
        <div>
            <h2>{props.nome}</h2>
            <p>{props.preco}</p>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="" />
    </div>
}