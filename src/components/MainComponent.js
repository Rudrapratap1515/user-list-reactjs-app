import React from 'react';
import { render } from 'react-dom';
import userData from "../user_Data/user-list.json";
import userAvatar from "../user_Data/user-avatar.json";
import { Link } from "react-router-dom";

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            userDetails: [],
            selectedUsers: [],
            searchedUsers: []
        }
        this.selectUserOnClick = this.selectUserOnClick.bind(this);
    }

    selectUserOnClick(item,e){
        this.setState(prevState => {
            let newState = prevState;
            newState.selectedUsers.push(item);
            return newState;
        })
        document.getElementById(item.id).backgroundColor = "red";
    }

    componentDidMount(){
        this.setState(prevState => {
            let newState = prevState;
            newState.userDetails = userData;
            userAvatar.map((item,key) => {
                newState.userDetails[key].avatar = item.avatar;
            })
            return newState;
        })
    }
    render(){
        return(
            <div className="list-wrapper">
                <ul className="list">
                    {
                        !this.state.searchedUsers.length && this.state.userDetails ?
                        this.state.userDetails.map(item => (
                            <li key={item.id} onClick={e => {this.selectUserOnClick(item,e)}} id={item.id} className="list-item">
                                <div>
                                    <img src={item.avatar}  className="list-item-image"/>
                                </div>
                                <div className="list-item-content">
                                    <h4>{item.full_name}</h4>
                                    <p>{item.last_name}</p>
                                </div>
                            </li>
                        ))
                        :
                        this.state.searchedUsers.map(item => (
                            <li key={item.id} onClick={e => {this.selectUserOnClick(item,e)}} id={item.id} className="list-item">
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
                <Link to={{
                    pathname:'/selected-users',
                    selectedUsers:{
                        users: this.state.selectedUsers
                    }
                }}>
                    <button className="btn btn-primary mt-4">Select</button>
                </Link>
            </div>
        )
    }
}
export default Main;
