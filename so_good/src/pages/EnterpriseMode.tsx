import { useParams } from "react-router-dom";
import styled from "styled-components";

function EnterpriseMode() {

    const { profile } = useParams()

    const HeroName = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    `

    return (
        <HeroName>
            <h1>Bienvenidx {profile}</h1>
        </HeroName>
    )
}
export default EnterpriseMode;