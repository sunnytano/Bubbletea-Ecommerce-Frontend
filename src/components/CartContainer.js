import React from 'react'
import Cart from './Cart'

class CartContainer extends React.Component {

    render(){
    console.log(this.props.cart)
        let items;
        if(this.props.cart.length > 0){
            items = this.props.cart.map(item => {
                return <Cart item={item}
                handleRemove={this.props.handleRemove}
                />
            })
        }
        return(
            <div className="cart-container">
              {items}
            </div>
        )
    }
}

export default CartContainer;