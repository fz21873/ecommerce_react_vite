import React, { useContext } from 'react';
import { CardBuy } from './style';
import { ContextoGlobal } from '../../global/ContextoGlobal';
import { Eye } from 'phosphor-react';

const Card = (props) => {
    const {product} = props
   
    const {  addProduto, navegacao } = useContext(ContextoGlobal)
    
  
    return (
        <CardBuy>
            <div>
                 <img src={product.url} />
            </div>
           
            <p>{product.title}</p>
            <button type='submit' onClick={()=> addProduto(product)}>Add to cart</button>
            <button onClick={()=>navegacao(`details/${product.id}`)}><Eye size={32}></Eye></button>
        </CardBuy>
    );
};

export default Card;
