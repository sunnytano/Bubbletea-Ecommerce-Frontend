import React from 'react'


class Login extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1 className="login-page">Please Login</h1>
                <form  className="login">
                    <input type="text" onChange={this.props.handleInput} />
                    <input onClick={this.props.handleLogin} type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}

export default Login;
 