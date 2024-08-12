import { useParams } from "react-router-dom";

function ProductSimple(){

    const { productname } = useParams()

    return(
        <h1>
            Product {productname}
        </h1>
    )
}
export default ProductSimple;