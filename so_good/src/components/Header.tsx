import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface HeaderWrapperProps {
    isFixed: boolean;
}

interface HeaderProps {
    navType: 'app' | 'forms';
}

const Header: React.FC<HeaderProps> = ({ navType }) => {

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            setIsFixed(scrollPosition >= viewportHeight ? true : false);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    // Animation Header
    const slideInFromTop = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    `;
    
    const HeaderWrapper = styled.header<HeaderWrapperProps>`
        display: flex;
        height: 60px;
        justify-content: space-between;
        align-items: center;
        padding-inline: 3rem;
        background: white;
        position: ${(props) => (props.isFixed ? 'sticky' : 'static')};
        animation: ${slideInFromTop} 0.3s ease-out;
        top: 0;
    `;

    const handlerNav = () => {
        switch (navType) {
            case 'app':
                return <AppNav />;
            case 'forms':
                return <FormsNav />;
            default:
                return null;
        }
    };

    return (
        <HeaderWrapper isFixed={isFixed}>
            <Link to="/">
                <img src="../public/SoGood-logo.svg" alt="SoGood" />
            </Link>
            {handlerNav()}
        </HeaderWrapper>
    )
}
export default Header;

const AppNav = () => {
    return (
        <nav>
            <ul>
                <li>Perfil</li>
                <li>Configuración</li>
            </ul>
        </nav>
    );
};

const FormsNav = () => {
    return (
        <nav>
            <ul>
                <li>Acceso Empresas</li>
            </ul>
        </nav>
    );
};