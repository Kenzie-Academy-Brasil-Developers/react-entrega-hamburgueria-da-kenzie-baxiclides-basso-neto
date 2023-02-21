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
              <h4>
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h4>
              <button onClick={() => addToCart(product)}>Adicionar</button>
            </li>
          ))}
        </ul>
      </div>
    </StyledMain>
  );
}
