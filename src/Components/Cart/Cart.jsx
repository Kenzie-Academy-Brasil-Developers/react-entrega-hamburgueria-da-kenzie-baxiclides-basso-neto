import { useState } from "react";
import { StyledCart, StyledDivCartEmpty } from "./CartStyle";

export function Cart({ cartProducts, removeToCart, setCartProducts }) {
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
                  <button onClick={() => removeToCart(product.id)}>
                    Remover
                  </button>
                </li>
              ))}
              <h3>Total:</h3>
              <button type="button">Remover Todos</button>
            </ul>
          </>
        )}
      </div>
    </StyledCart>
  );
}
