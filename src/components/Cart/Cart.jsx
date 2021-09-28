import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h2>This is cart</h2>
            <ul>
                {cart.map((id) => (
                    <li>{id}</li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
