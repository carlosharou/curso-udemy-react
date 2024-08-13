import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const params = useParams();
    const id = params.productId;


    return (
        <>
            <h1>Hello ProductDetail</h1>
            <p>{id}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    );
}

export default ProductDetailPage;