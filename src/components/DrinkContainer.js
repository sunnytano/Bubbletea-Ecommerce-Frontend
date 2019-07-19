import React from 'react'
import Drink from './Drink'

class DrinkContainer extends React.Component {

    render(){
        console.log(this.props)
        let drinks;
        // if(this.props.searchResults.length > 0){
        // drinks = this.props.searchResults.map(drink => {
        //         return <Drink
        //             key={drink.id}
        //             drink={drink}
        //             addDrink={this.props.addDrink}
        //          />
        //     })
        // } else {
         drinks = this.props.drinks.map(drink => {
                return <Drink
                    key={drink.id}
                    drink={drink}
                    addDrink={this.props.addDrink}
                 />
            })
        // }
        return(
            <div className="drink-container">
                <header className="shop-name">
                    Susan's Bubble Tea Shop 
                </header>
                <div className="drink-container">
                    {drinks}
                </div>
            </div>
        )
    }
}

export default DrinkContainer;