import React from 'react';
import logo from './logo.svg';
import './App.css';
import DrinkContainer from './components/DrinkContainer'
import NavContainer from './components/NavContainer'
import CartContainer from './components/CartContainer';
import Login from './components/Login'
import AccountContainer from './components/AccountContainer'

class App extends React.Component {
//testing integration again
//testing integration again
  state = {
    drinks: [], 
    clickedCart: false,
    search: "",
    loggedin: false, 
    cart: [], 
    searchResults: [],
    username: "",
    users: [],
    clickedAccount: false
  }

  componentDidMount(){
    let drinkUrl = "http://localhost:3003/api/v1/drinks"
    fetch(drinkUrl)
    .then(resp => resp.json())
    .then(drink => {
      this.setState({
        drinks: drink
    })
  })
  let userUrl = "http://localhost:3003/api/v1/users"
  fetch (userUrl)
  .then(resp=>resp.json())
  .then(user=>{
    this.setState({
      users: user 
    })
  })
}

handleAccount=()=>{
  this.setState({
    clickedAccount: !this.state.clickedAccount
  })
}

  handleSortName = () => {
    console.log("sorting name")
    let sorted = [...this.state.drinks].sort((a, b)=> (a.drink_name > b.drink_name) ? 1 : -1)
    this.setState({
      drinks: sorted
    })
  }

  noSort = () => {
    // debugger
    let sorted = [...this.state.drinks].sort((a, b)=> (a.id > b.id) ? 1 : -1)
    this.setState({
      drinks: sorted
    })
  }

  handleRemove = (remDrink) => {
    this.setState({
      cart: this.state.cart.filter(drink => 
        drink.id !== remDrink.id
      )
    })
  }

  handleLogout = () => {
    this.setState({
      loggedin: !this.state.loggedin
    })
  }

  handleInput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleLogin = () => {
    this.setState({
        loggedin: !this.state.loggedin
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleCart = () => {
    this.setState({
      clickedCart: !this.state.clickedCart
    })
  }
 
  addDrink = (drink) => {
      this.setState({
        cart: [...this.state.cart, drink]
      })
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
          { 
            this.state.loggedin
             ?     
          <div>
        <NavContainer
          handleCart={this.handleCart}
          drinks={this.state.drinks}
          handleSearch={this.handleSearch}
          search={this.state.search}
          handleLogin={this.handleLogin}
          handleChange={this.handleChange}
          loggedin={this.state.loggedin}
          handleLogout={this.handleLogout}
          username={this.state.username}
          handleSortName={this.handleSortName}
          noSort={this.noSort}
          handleAccount={this.handleAccount}
          />
            {
              this.state.clickedCart
            ?
        <CartContainer
          cart={this.state.cart}
          handleRemove={this.handleRemove} />
          : 
        <DrinkContainer
          drinks={this.state.drinks.filter(drink => {
            return drink.drink_name.toLowerCase().includes(this.state.search.toLowerCase())
          })}
          addDrink={this.addDrink}
          handleSearch={this.handleSearch}
          searchResults={this.state.searchResults}/>
          }

          {
            this.state.clickedAccount
            ?
            <AccountContainer 
            handleAccount={this.handleAccount}
            users={this.state.users}
            clickedAccount={this.state.clickedAccount}
             />
             :
             null
          }
        </div>
        :
        <Login 
        handleInput={this.handleInput}
        handleLogin={this.handleLogin}
        />
      }
        
    </div>
    );
  }
}

export default App;
