import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { ContextoGlobal } from "./ContextoGlobal"

export const EstadoGlobal = ({children}) =>{
  const [cartList, setCartList] = useState([])
  const navegacao = useNavigate()
  const addProduto = (item) =>{
   const  existente = cartList.find((produto)=> produto.title === item.title)

    if(existente){
      cartList.forEach((produto)=>{
        if(produto === existente){
            
           produto.quantidade =  produto.quantidade + 1
        }
      })
    }else{
      const quantidade = {
        ...item,
        quantidade: 1
      }
      setCartList([...cartList,quantidade])
    }
  }

  const [electronics, setEletronics] = useState([
    { id:"1",section: "Electropnics", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Macbook Pro 2014", price: "235" },
    { id:"2",section: "Electropnics", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Watch", price: "135" },
    { id:"3",section: "Electropnics", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Sansung Galaxy", price: "335" },
    { id:"4",section: "Electropnics", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Electric Kettle", price: "5" },
    { id:"5",section: "Electropnics", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Headphones", price: "15" }
   ])
  const [clothing, setClothing] = useState([
        { id:"6",section: "Clothing", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Red Floral Dress", price: "35" },
        { id:"7",section: "Clothing", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Jeans Shorts", price: "65" },
        { id:"8",section: "Clothing", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Pink Trousers women", price: "35" },
        { id:"9",section: "Clothing", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "Suit", price: "225" },
        { id:"10",section: "Clothing", url: "https://cdn-icons-png.flaticon.com/512/1170/1170679.png", title: "T-Shirt", price: "55" },
    ])


    
       return(
     <ContextoGlobal.Provider 
     value={{ 
          electronics,
          clothing,
          cartList,
          setEletronics,
          setClothing,
          setCartList,
          addProduto,
          navegacao
      }}>
       {children}
     </ContextoGlobal.Provider>
   )
}