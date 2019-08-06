import React from 'react'

class NavContainer extends React.Component {

    handleChange = (event) => {
        if(event.target.value === "sort by name"){
            this.props.handleSortName()
        } else if(event.target.value === "default") {
            this.props.noSort()
        }
    }

    render(){
        return(
            <div className="nav-bar">
                <form className="nav-form">
                <input className="search-input" type="text" value={this.props.search} onChange={this.props.handleSearch} placeholder="SEARCH A BUBBLE TEA FLAVOR"/>
                </form>
                <br/>
                <select onChange={this.handleChange} className="select-menu">
                    <option value="default">Default</option>
                    <option value="sort by name">Sort by Name</option>
                </select>
                <br/>
                    <button className="cart-button" onClick={this.props.handleCart}>Cart</button>
                    <button className="sign-out" onClick={this.props.handleLogout}>Logout</button>
                    <button className="account-info" onClick={this.props.handleAccount}>Account Info</button>

                 <br/>
            { 
                this.props.loggedin
                ?
                <div>
                <h3>Welcome, {this.props.username}! </h3>
                </div>
            :
            null
            }
            </div>
        )
    }
}

export default NavContainer;