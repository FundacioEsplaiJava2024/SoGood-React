import styled from 'styled-components';

const Header = () => {

    const Header = styled.header`
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        padding-inline: 3rem;
    `;

    return (
        <Header>
           <img src="../public/SoGood-logo.svg" alt="SoGood" />
           <Nav />
        </Header>
    )
}
export default Header;

const Nav = () => {
    return(
        <nav>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}