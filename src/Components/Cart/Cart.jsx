import { StyledButton, StyledCart, StyledDivCartEmpty } from "./CartStyle";

export function Cart({ cartProducts, removeToCart, total, removeAllProducts }) {
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
                    <h4>
                      {product.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </h4>
                  </div>
                  <button onClick={() => removeToCart(product.id)}>
                    Remover
                  </button>
                </li>
              ))}

              <h3>
                Total:
                <span>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </h3>

              <StyledButton onClick={() => removeAllProducts()}>
                Remover Todos
              </StyledButton>
            </ul>
          </>
        )}
      </div>
    </StyledCart>
  );
}
