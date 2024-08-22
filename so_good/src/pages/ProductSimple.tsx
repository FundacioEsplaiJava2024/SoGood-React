import { Button, Heading, Select, Text } from "@radix-ui/themes";
import styled from "styled-components";
import LocationIcon from '../components/Icons';

function ProductSimple() {

    const infoData = {
        id: 1,
        productName: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio earum sed delectus tempora voluptatum? Voluptates.",
        enterpriseUser: "pans",
        category: "carne",
        quantity: "10",
        direction: "c/ x num 45",
        price: "$10.00",
    }

    const numbers = [ 
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
    ]

    // const { productname } = useParams()

    const ProductWrapper = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        padding-inline: 3rem;
        margin-top: 3rem;
        margin-button: 3rem;
    `;

    const ProductImage = styled.img`
        object-fit: cover;
        max-width: 650px;
    `;

    const ProductInfo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
        justify-content: start;
        padding: 2rem;
    `;

    return (
        <>
            {/* <h1>
                Product {productname}
            </h1> */}
            <ProductWrapper>
                <ProductImage src="../public/food-bk.jpg" />
                <ProductInfo>
                    <Heading>
                        {infoData.productName + " - " + infoData.enterpriseUser}
                    </Heading>
                    <Text>
                        <LocationIcon/>
                        {infoData.direction}
                    </Text>
                    <Text>
                        {infoData.description}
                    </Text>
                    <Select.Root defaultValue="Cantidad">
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Group>
                                <Select.Label>Cantidad</Select.Label>
                                {numbers.map((i) => (
                                    <Select.Item
                                        key={i}
                                        value={i}>
                                        {i}
                                    </Select.Item>
                                ))}
                            </Select.Group>
                        </Select.Content>
                    </Select.Root>
                    <Text>
                        {infoData.price}
                    </Text>
                    <Button>
                        Agregar al carrito
                    </Button>


                </ProductInfo>
            </ProductWrapper>
        </>
    )
}
export default ProductSimple;