import React from 'react';
import { render } from 'react-dom';

class SelectedUsers extends React.Component{
    constructor(){
        super();
        this.state ={
            selectedUsers: []
        }
    }

    componentDidMount(){
        this.setState({
            selectedUsers: this.props.location.selectedUsers.users
        })
    }

    componentDidUpdate(prevProps){
        if (this.state.props && this.state.props != prevProps){
            this.setState({
                selectedUsers: this.props.location.selectedUsers.users
            })  
        }
    }
    render(){
        return(
            <div className="list-wrapper">
                <ul className="list">
                    {
                        this.state.selectedUsers &&
                        this.state.selectedUsers.map(item => (
                            <li onClick={e => {this.selectUserOnClick(item)}} className="list-item">
                                <div>
                                    <img src={item.avatar}  className="list-item-image"/>
                                </div>
                                <div className="list-item-content">
                                    <h4>{item.full_name}</h4>
                                    <p>{item.last_name}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SelectedUsers;