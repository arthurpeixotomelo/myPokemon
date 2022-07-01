import logo from "../img/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  box-shadow: var(--simpleshadow);
`;

const Img = styled.img`
  margin-inline: auto;
  width: var(--space5);
  aspect-ratio: 1/0.5;
  `;

const Nav = styled.nav`
  margin: auto;
`;
const Ul = styled.ul`
  display: flex;
  gap: var(--space3);
`;
const Li = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    font-weight: bold;
    border-bottom-style: solid;
  }
`;




export default function Header() {
  return (
    <Wrapper>
      <Img src={logo} alt="Pokemon Logo" />
      <Nav>
        <Ul>
          <Li>
            <StyledLink
              to="/"
            >
              Home
            </StyledLink>
          </Li>
          <Li>
            <StyledLink
              to="/pokemons"
            >
              Pokemons
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </Wrapper>
  );
}
