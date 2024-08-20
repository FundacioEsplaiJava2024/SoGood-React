import { styled } from 'styled-components';

const Slider = () => {

    const SliderWrapper = styled.section`

    `;

    return (
        <SliderWrapper>
            <SliderItem />
        </SliderWrapper>
    )
}
export default Slider;

const SliderItem = () => {

    const SliderItem = styled.div`

    `

    const SliderTop = styled.div`

    `;

    const SliderBottom = styled.div`

    `;

    return (
        <>
            <SliderItem>
                <SliderTop>

                </SliderTop>
                <SliderBottom>

                </SliderBottom>
            </SliderItem>
        </>
    )
}