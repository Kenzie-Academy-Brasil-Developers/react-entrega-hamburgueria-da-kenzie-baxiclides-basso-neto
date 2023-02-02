import { useEffect, useState } from "react";
import { StyledMain } from "./ProductsListStyle";


export function ProductsList({ searchProducts, addToCart }) {

  return (
    <StyledMain>
      <div>
        <ul>
          {searchProducts.map((product) => (
            <li key={product.id}>
              <img src={product.img} alt="" />
              <h3>{product.name}</h3>
              <h5>{product.category}</h5>
              <h4>R$ {product.price},00</h4>
              <button onClick={() => addToCart(product)} >Adicionar</button>
            </li>
          ))}
        </ul>
      </div>
    </StyledMain>
  );
}
