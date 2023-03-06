import React, { useContext, useState } from 'react';
import Card from '../../components/card';
import { SectionProducts } from './style';
import { ContextoGlobal } from '../../global/ContextoGlobal';

const ProductsPage = () => {

   

    const [pesquisa, setPesquisa] = useState("")

    const { electronics, clothing, cartList, navegacao } = useContext(ContextoGlobal)

    const electronicsFilter = electronics.filter((item) => item.title.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()))
    const clothingFilter = clothing.filter((item) => item.title.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()))
   

    return (
        <div className='ProductsPage'>
    
            <input onChange={(e) => setPesquisa(e.target.value)} />
            <button onClick={()=>navegacao('/cart')}>Carrinho {cartList.length}</button>

            <SectionProducts>
              <h1>Electronics</h1>
               {electronicsFilter.map((item,i) => 
                <Card key={i}
                 product={item} 
                 />)
               }
            </SectionProducts>


            <SectionProducts>
              <h1>Clothing</h1>
               {clothingFilter.map((item,i) => 
               <Card key={i}
               product={item} 
               />)}
            </SectionProducts>


        </div>
    );
};

export default ProductsPage;
