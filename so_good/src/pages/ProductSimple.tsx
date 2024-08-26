import { Button, Heading, Select, Text } from "@radix-ui/themes";
import styled from "styled-components";
import LocationIcon from '../components/Icons';
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams } from 'react-router-dom';  // Importa useParams

interface Product {
    
    imgUrl: string;
    productName: string;
    enterpriseUser: string;
    description: string;
    direction: string;
    quantity: number;
    price: number;
    category: string;
}

function ProductSimple() {
    const { id } = useParams<{ id: string }>();  // Captura el ID desde la URL
    const [product, setProduct] = useState<Product | null>(null);
    const baseUrl = "http://localhost:8442/sogood";

    useEffect(() => {
        const getProductById = async () => {
            try {
                // Cambia la solicitud para incluir el ID en la URL
                const response: AxiosResponse<Product> = await axios.get(`${baseUrl}/packs/${1}`);
                setProduct(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        getProductById();
    }, [id]);  // El useEffect se ejecuta cuando cambia el ID

    const numbers = [ 
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    ];

    // Renderizado condicional para manejar la carga de datos
    if (!product) {
        return <div>Loading...</div>;
    }

    const ProductWrapper = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        padding-inline: 3rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
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
        <ProductWrapper>
            <ProductImage src={product.imgUrl} alt={product.productName} />
            <ProductInfo>
                <Heading>
                    {product.productName + " - " + product.enterpriseUser}
                </Heading>
                <Text>
                    <LocationIcon />
                    {product.direction}
                </Text>
                <Text>
                    {product.description}
                </Text>
                <Select.Root defaultValue="Cantidad">
                    <Select.Trigger />
                    <Select.Content>
                        <Select.Group>
                            <Select.Label>Cantidad</Select.Label>
                            {numbers.map((i) => (
                                <Select.Item key={i} value={i}>
                                    {i}
                                </Select.Item>
                            ))}
                        </Select.Group>
                    </Select.Content>
                </Select.Root>
                <Text>
                    {product.price}
                </Text>
                <Button>
                    Agregar al carrito
                </Button>
            </ProductInfo>
        </ProductWrapper>
    );
}

export default ProductSimple;


