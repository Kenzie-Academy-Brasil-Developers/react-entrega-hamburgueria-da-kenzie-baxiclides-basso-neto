import { StyledMain } from './ProductsListStyle'
import {Product} from '../Product/Products'

export function ProductsList({products}) {
    
    
    return(
        <StyledMain>
        {products.map(product=>(
            <li key={product.id}>
                <img src={product.img} alt="" />
                <h3>{product.name}</h3>
                <h4>{product.category}</h4>
                <h3>R$ {product.price},00</h3>
                <button id={product.id}>Adicionar</button>


            
            </li>
            
            ))}
        <div>
            <ul>
                <Product />
            </ul>
        </div>
       </StyledMain> 
    )
}