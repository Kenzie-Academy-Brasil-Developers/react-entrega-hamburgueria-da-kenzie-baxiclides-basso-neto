import { StyledMain } from './ProductsListStyle'
// import {Product} from '../Product/Products'

export function ProductsList({products}) {
    
    
    return(
        <StyledMain>
        <div>
            <ul>
                {products.map(product=>(
                    <li key={product.id}>
                        <img src={product.img} alt="" />
                        <h3>{product.name}</h3>
                        <h5>{product.category}</h5>
                        <h4>R$ {product.price},00</h4>
                        <button id={product.id}>Adicionar</button>
                
                    </li>
                
                    ))}
            </ul>
        </div>
       </StyledMain> 
    )
}