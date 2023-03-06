import styled from "styled-components";

export const CartContain = styled.main`
width: 100vw;
height: auto;
min-height: 100vh;
display: grid;
flex-direction:row;
align-items: center;
background-color:#F7FAFC ;
padding: 10%;
gap:10px;
h2{
    grid-column: 100vw;
}
`
export const ProductsContain = styled.section`
width: 100%;
display: flex;
margin: auto;
border-radius: 5px;
gap:50px;
`
export const CartCar = styled.div`
display: grid;
justify-content: center;
align-items: center;
grid-template-columns: 1fr 5fr 1fr;
background-color: white;
padding: 5px;
min-height: 100px;
width: 60vw;
img{
    width: 100%;
}
`
export const CardPrice = styled.div`
display: flex;
flex-direction: column;
width: 25vw;
height: auto;
display: grid;
padding: 1%;


`
export const DivBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 2%;
    gap: 10px; 
    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
        background-color: white;

    }
    `
export const ButtonBlock = styled.div`
    display: flex;
    justify-content: space-between;    
    padding: 2%;
    gap: 10px;
    height: 50px;
    button{
        flex-direction:row
        max-height: 20%;
        align-items :center ;
        width:120px;
    
       
    }
   
    `
export const CuponBlock = styled.div`

padding: 10px;
height: 80px;
gap:20px;
background-color: white;
width:250px;
div{
    display:flex ;
    flex-direction:row ;
    justify-content:space-between;   
    input, button{
    background-color: transparent;
    border: none;
    height: 100%;
   }

   input{
    width:140px
   }
  
}

`

