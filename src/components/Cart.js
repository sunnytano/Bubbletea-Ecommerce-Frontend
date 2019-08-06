import React from 'react'

class Cart extends React.Component{
   
    render(){
        const {drink_name, image, price, quantity} = this.props.item
        return(
            <div className="cart-drink">
                <div className="cart-top">
                <div>
                    <img className="cart-img" src={image}/>
                </div>
                <div>
                    <h3 className="cart-name" >{drink_name}</h3>
                </div>
                <div>
                    <p className="cartPrice">price:$ {price}</p>
                    {/* <p className="cartPrice">quantity: {quantity}</p> */}
                    <br/>
                    <button onClick={()=>this.props.handleRemove(this.props.item)}>
                        X
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart