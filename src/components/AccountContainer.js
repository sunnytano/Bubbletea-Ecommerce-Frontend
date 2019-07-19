import React from 'react'
import Account from './Account'

class AccountContainer extends React.Component{
   
    render(){
       return(
            <div>
                {this.props.users.map(user=>{
                    return <Account
                    key={user.id}
                    user={user} 
                    clickedAccount={this.props.clickedAccount}
                     />
                })}
            </div>
   
        )
    }
}

export default AccountContainer