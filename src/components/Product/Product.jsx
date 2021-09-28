import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props;

    return (
        <div
            style={{
                border: '1px solid red',
                margin: '5px',
                borderRadius: '4px',
                backgroundColor: 'pink',
                width: '200px',
            }}>
            <h5>{product.name}</h5>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
    );
};

export default Product;
