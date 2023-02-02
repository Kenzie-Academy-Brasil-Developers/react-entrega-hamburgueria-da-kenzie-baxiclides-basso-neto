import { useState } from "react";
import { StyledHeader } from "./HeaderStyle";

export function Header({setSearch}) {
    const [searchProduct, setSearchProdut] = useState('')

    const submit = (event) => {
        event.preventDefault()
        setSearch(searchProduct)
       
    }

    return(
        <StyledHeader>
            <div>
                <h1>Burger <span>Kenzie</span></h1>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Digitar a pesquisa" value={searchProduct} onChange={(event) => setSearchProdut(event.target.value)} />
                    <button type="button">Pesquisar</button>
                </form>
            </div>
        </StyledHeader>
    )
}
    

