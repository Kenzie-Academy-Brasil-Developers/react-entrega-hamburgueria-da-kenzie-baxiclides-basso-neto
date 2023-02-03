import { useState } from "react";
import { StyledButton, StyledCart, StyledDivCartEmpty } from "./CartStyle";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function Cart({ cartProducts, removeToCart, total, setCartProducts, removeAllProducts }) {
  return (
    <StyledCart>
      <div>
        <header>
          <h3>Carrinho de Compras</h3>
        </header>

        {cartProducts.length < 1 ? (
          <StyledDivCartEmpty>
            <h3>Sua sacola está vazia</h3>
            <h4>Adicione Itens</h4>
          </StyledDivCartEmpty>
        ) : (
          <>
            <ul>
              {cartProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.img} alt="" />
                  <div>
                    <h3>{product.name}</h3>
                    <h5>{product.category}</h5>
                    <h4>R${product.price},00</h4>
                  </div>
                  <button onClick={() => removeToCart(product.id)
                    
                  }>
                    Remover
                  </button>
                </li>
              ))}
              
                <h3>Total:<span>R${total},00</span></h3>
              
              <StyledButton onClick={()=>removeAllProducts()}>
              Remover Todos</StyledButton>
            </ul>
          </>
        )}

        
      </div>
    </StyledCart>
  );
}
