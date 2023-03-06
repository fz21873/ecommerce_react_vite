import {Routes,Route} from 'react-router-dom';
import SingIn from '../pages/SingIn';
import ProductsPage from '../pages/Products';
import DetailsPage from '../pages/DetailsPage';
import CartPage from '../pages/CartPage';
export const Rotas = () =>{
  return(
    <Routes>

     <Route path='login' element={<SingIn/>}/>
     <Route path='/' element={<SingIn/>}/>
     <Route path='/produto' element={<ProductsPage/>}/>
     <Route path='/cart' element={<CartPage/>}/>
     <Route path='/details/:id' element={<DetailsPage/>}/>

    </Routes>
  )
   
}