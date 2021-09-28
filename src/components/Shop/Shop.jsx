import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

import Product from '../Product/Product';

const Shop = (props) => {
    console.log(props);
    const { products, addToCart } = props;
    return (
        <div>
            <h2>This is Shop</h2>
            {products.map((product) => (
                <Product
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        products: state.products,
    };
};

const mapDispatchToProps = {
    addToCart: addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
