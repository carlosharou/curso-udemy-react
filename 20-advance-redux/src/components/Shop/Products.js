import ProductItem from './ProductItem';
import classes from './Products.module.css';


const itemsProducts = [
    {
        id: 1,
        title: 'Sabritas Amarillas',
        description: 'Sabritas Saladas',
        price: 18
    }, {
        id: 2,
        title: 'Jugo Manzana',
        description: 'Jugo de 19 Hermanos sabor Manzana',
        price: 8
    }, {
        id: 3,
        title: 'Bolillo',
        description: 'Bolillo de Panadería Viveros',
        price: 10
    }
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {
                    itemsProducts.map((item) => (
                        <ProductItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                        />
                    ))
                }
            </ul>
        </section>
    );
};

export default Products;
