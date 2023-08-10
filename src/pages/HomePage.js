import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from 'uuid';
export default class HomePage extends Component {

	constructor (props){
		super(props);
		this.state={
			users:[
				{
					id:uuidv4(),
					firstName:"Mark",
					lastName:"Otto",
					username:"@mdo"
				},
				{
					id:uuidv4(),
					firstName:"Jacob",
					lastName:"Thornton",
					username:"@fat"
				},
				{
					id:uuidv4(),
					firstName:"Larry",
					lastName:"the Bird",
					username:"@twitter"
				},
				{
					id:uuidv4(),
					firstName:"Larry",
					lastName:"the Bird",
					username:"@twitter"
				}
			]
		};
		this.addUser=this.addUser.bind(this);
	}

	addUser =(firstName,lastName,userName)=>{
		if((firstName,lastName,userName)){
			const users =[...this.state.users];
			users.push({
				id:uuidv4(),
				firstName:firstName,
				lastName:lastName,
				username:userName	
			});
			this.setState({users})
		}
		else{
			alert("Please fill all the fields");
		}
	}


	render() {
		return (
			<div>
				<Navbar color="light">
					<div className="container">
						<NavbarBrand href="/">reactstrap</NavbarBrand>
					</div>
				</Navbar>
				<UserListComponent users={this.state.users} addUser={this.addUser}/>
			</div>
		);
	}
}
