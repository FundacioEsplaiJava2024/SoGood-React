import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddForm from '../components/AddForm';
import Slider from "../components/Slider";

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
    width: 49.9%;

    `

    const Image = styled.img`
    object-fit: cover;
    max-height: 450px
    `

    return (
        <>
            <HeroName>
                <h1>Hola {profile}</h1>
            </HeroName>
            <AddProductWrapper>
                <ImageWrapper>
                    {/* <DropZone/> */}
                </ImageWrapper>
                <AddForm />
            </AddProductWrapper>
           {/* <Slider />*/}
        </>
    )
}
export default EnterpriseMode;