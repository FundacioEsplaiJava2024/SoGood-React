import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddForm from '../components/AddForm';

function EnterpriseMode() {

    const { profile } = useParams()

    const HeroName = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    `

    const AddProductWrapper = styled.div`
        width: 100%;
        display: flex;
        gap: 20px;
    `

    const ImageWrapper = styled.div`

    `

    const Image = styled.img`
    object-fit: cover;
    max-height: 450px
    `

    return (
        <>
            <HeroName>
                <h1>Bienvenidx {profile}</h1>
            </HeroName>
            <AddProductWrapper>
                <ImageWrapper>
                    <Image src="../public/food-bk.jpg"/>
                </ImageWrapper>
                <AddForm />
            </AddProductWrapper>
        </>
    )
}
export default EnterpriseMode;