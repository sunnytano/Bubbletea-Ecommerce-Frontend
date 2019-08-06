import React from 'react'

class Drink extends React.Component {

    state = {
        hover: false
    }

    mouseOver = () => {
        this.setState({
            hover: true
        })
    }

    mouseOut = () => {
        this.setState({
            hover: false
        })
    }

    render(){
        // console.log(this.props.drink)
        const { drink_name, description, price, image, likes } = this.props.drink
        return(
            <div className="drink-card">
                <h4 className="drink-name"> {drink_name} </h4>
                { 
                    this.state.hover
                    ?
                    <p className="hover-drink" onMouseOut={this.mouseOut}>
                        {description}
                    </p>
                    :
                    <img className="drink-image" src={image} onMouseOver={this.mouseOver}/>
                }
                <h5>Price ${price}</h5>
                <button className="add-button" onClick={() => this.props.addDrink(this.props.drink)}>
                    
                    Add Drink
                </button>
            </div>
        )
    }
}

export default Drink;