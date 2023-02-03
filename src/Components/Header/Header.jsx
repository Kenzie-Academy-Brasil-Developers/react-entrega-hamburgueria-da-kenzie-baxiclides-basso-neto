import { useState } from "react";
import { StyledHeader } from "./HeaderStyle";

export function Header({ setSearch }) {
  const [searchProduct, setSearchProduct] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearch(searchProduct);
  };

  return (
    <StyledHeader>
      <div>
        <h1>
          Burger <span>Kenzie</span>
        </h1>
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Digitar a pesquisa"
            value={searchProduct}
            onChange={(event) => setSearchProduct(event.target.value)}
          />

          <button type="submit">Pesquisar</button>
        </form>
      </div>
    </StyledHeader>
  );
}
