import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../component/UserListComponent";

export default class HomePage extends Component {

	constructor (props){
		super(props);
		this.state={
			users:[
				{
					id:1,
					firstName:"Mark",
					lastName:"Otto",
					username:"@mdo"
				},
				{
					id:2,
					firstName:"Jacob",
					lastName:"Thornton",
					username:"@fat"
				},
				{
					id:3,
					firstName:"Larry",
					lastName:"the Bird",
					username:"@twitter"
				},
				{
					id:4,
					firstName:"Larry",
					lastName:"the Bird",
					username:"@twitter"
				}
			]
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
				<UserListComponent users={this.state.users}/>
			</div>
		);
	}
}
