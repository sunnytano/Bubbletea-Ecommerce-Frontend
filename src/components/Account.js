import React from 'react'

class Account extends React.Component{
   
    render(){
        console.log(this.props)
        const {username, p_img, drinks} = this.props.user
        return(
            <div className="user-container">
                {
                    this.props.clickedAccount
                     ?
                
                <div className="cart-top">

                <div>
                    <img className="" src={p_img}/>
                </div>
                <div>
                    <h3 className="" >{username}</h3>
                </div>
                <div>
                    <p></p>
                    </div>
                </div>
                :
                null
                }
            </div>
        )
    }
}

export default Account