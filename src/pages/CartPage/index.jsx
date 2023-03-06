
import { useEffect, useContext } from "react"
import { ButtonBlock, CardPrice, CartCar, CartContain, CuponBlock, DivBlock, 
    ProductsContain } from "./style"
import { ContextoGlobal } from "../../global/ContextoGlobal"

const CartPage = () => {
    
    const { cartList,setCartList,navegacao }  = useContext(ContextoGlobal)
    const RemoverItemProduto = (item) =>{
        console.log(item)
        const  existente = cartList.find((produto)=> produto.title === item)
     
         if(existente){
           cartList.forEach((produto)=>{
             if(produto === existente){
                 
               
                if(produto.quantidade > 1){
                    produto.quantidade =  produto.quantidade - 1
                    setCartList([...cartList])
                }
                
             }
           })
         }
         
       }
     
    
    const clear = () => {
        setCartList([])
    }

    return (
        <CartContain>
            <h2 className="title">My Cart ({cartList.length})</h2>
            <ProductsContain>

                <div>
                    {cartList.length > 0 ?
                        cartList.map((item, i) => {
                            return (
                                <CartCar key={i}>
                                    <img src={item.url} />
                                    <DivBlock>
                                        <h5>{item.title}</h5>
                                        <div>
                                            <button onClick={()=>RemoverItemProduto(item.title)}>Remove</button>
                                            <button>Safe for later</button>
                                        </div>
                                    </DivBlock>

                                    <DivBlock>
                                        <h5>Preço.: {item.price}</h5>
                                        <h5>Quant.: {item.quantidade}</h5>
                                        <h5>Preço Total.: {item.quantidade * item.price}</h5>
                                    </DivBlock>
                                </CartCar>
                            )
                        })

                        : <h1> O carrinho está vazio</h1>}



                    <hr />

                    <ButtonBlock>
                        <button type="submit" onClick={()=>navegacao('/produto')} >Back To Shop</button>
                        <button onClick={clear}>Clear</button>
                    </ButtonBlock>

                </div>

                <CardPrice>
                    <CuponBlock>
                        <h5>Have a cupon?</h5>
                        
                            <div>
                            <label> 
                                <input placeholder="Add cupon" />
                                <button >Apply</button>
                                </label>
                            </div>
                            
                    </CuponBlock>
                </CardPrice>

            </ProductsContain>
        </CartContain >
    )
}
export default CartPage