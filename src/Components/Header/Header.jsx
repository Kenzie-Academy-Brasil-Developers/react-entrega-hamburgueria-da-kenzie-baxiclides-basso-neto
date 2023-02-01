import { StyledHeader } from "./HeaderStyle";

export function Header() {
    return(
        <StyledHeader>
            <div>
                <h1>Burger <span>Kenzie</span></h1>
                <input type="text" placeholder="Digitar a pesquisa" />
                <button type="button">Pesquisar</button>
            </div>
        </StyledHeader>
    )
}
    

