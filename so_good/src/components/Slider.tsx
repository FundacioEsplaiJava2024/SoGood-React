import { Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

interface SliderProps {
    imgSrc: string,
    title: string,
    description: string,
    price: number,
}

interface Product {
    id: number;
    imgUrl: string;
    productName: string;
    description: string;
    direction: string;
    quantity: number;
    price: number;
}

interface Slider{
    data: Product[];
}

const Slider: React.FC<Slider> = ({ data }) => {

    const products = [
        {
            id: "1",
            imgUrl: "../public/food-bk.jpg",
            productName: "bocadillo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis.",
            direction: "c/ prueba, n 3",
            quantity: 12,
            price: 12.99,
        },
        {
            id: "2",
            imgUrl: "../public/food-bk.jpg",
            productName: "hamburguesa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis.",
            direction: "c/ prueba, n 3",
            quantity: 12,
            price: 12.99,
        },
        {
            id: "3",
            imgUrl: "../public/food-bk.jpg",
            productName: "hamburguesa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis.",
            direction: "c/ prueba, n 3",
            quantity: 12,
            price: 12.99,
        },
        {
            id: "4",
            imgUrl: "../public/food-bk.jpg",
            productName: "hamburguesa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis.",
            direction: "c/ prueba, n 3",
            quantity: 12,
            price: 12.99,
        },
        {
            id: "5",
            imgUrl: "../public/food-bk.jpg",
            productName: "hamburguesa",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, blanditiis.",
            direction: "c/ prueba, n 3",
            quantity: 12,
            price: 12.99,
        },
    ]

    const SliderWrapper = styled.section`
        display: flex;
        justify-content: start;
        align-items: center;
        overflow-x: scroll;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 3rem;
        padding-left: 3rem;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding-right: 3rem;
    `;

    return (
        <>
            <Heading style={{ paddingLeft: "3rem", marginTop: "3rem" }}>
                Categorie
            </Heading>
            <SliderWrapper>
                {data.map((product) => (
                    <SliderItem
                        key={product.id}
                        imgSrc={product.imgUrl}
                        title={product.productName}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </SliderWrapper>
        </>
    )
}
export default Slider;


const SliderItem: React.FC<SliderProps> = ({ imgSrc, title, price, description }) => {

    const SliderItem = styled.div`
        background: #fff;
        border-radius:10px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    `

    const SliderTop = styled.div`

    `;

    const SliderBottom = styled.div`
        padding: 20px; 
    `;

    const Image = styled.img`
        max-width: 400px;
        object-fit: cover;
        border-radius: 10px 10px 0px 0px;
    `;

    const ItemsWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Title = styled.h3`

    `

    const Price = styled.span`

    `;

    const Description = styled.p`

    `;

    return (
        <>
            <Link to={`/product/${title}`}>
                <SliderItem>
                    <SliderTop>
                        <Image src={imgSrc} />
                    </SliderTop>
                    <SliderBottom>
                        <ItemsWrapper>
                            <Title>
                                {title}
                            </Title>
                            <Price>
                                {price}
                            </Price>
                        </ItemsWrapper>
                        <Description>
                            {description}
                        </Description>
                    </SliderBottom>
                </SliderItem>
            </Link>
        </>
    )
}