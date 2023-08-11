import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					id: uuidv4(),
					firstName: "Mark",
					lastName: "Otto",
					username: "@mdo",
				},
				{
					id: uuidv4(),
					firstName: "Jacob",
					lastName: "Thornton",
					username: "@fat",
				},
				{
					id: uuidv4(),
					firstName: "Larry",
					lastName: "the Bird",
					username: "@twitter",
				},
				{
					id: uuidv4(),
					firstName: "Larry",
					lastName: "the Bird",
					username: "@twitter",
				},
			],
		};
		this.addUser = this.addUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	addUser = (firstName, lastName, userName) => {
		if ((firstName, lastName, userName)) {
			const users = [...this.state.users];
			users.push({
				id: uuidv4(),
				firstName: firstName,
				lastName: lastName,
				username: userName,
			});
			this.setState({ users });
			toast( ` "${firstName}" kullanıcısi eklendi`)
		} else {
			alert("Please fill all the fields");
		}
	};

	deleteUser=(obj) =>{
		const users = this.state.users.filter((user) => user.id !== obj.id);
		this.setState({ users });
		toast( ` "${obj.firstName}" kullanıcısi silindi`)
	}

	render() {
		return (
			<div>
				<ToastContainer/>
				<Navbar color="light">
					<div className="container">
						<NavbarBrand href="/">reactstrap</NavbarBrand>
					</div>
				</Navbar>
				<UserListComponent users={this.state.users} addUser={this.addUser}
					deleteUser={this.deleteUser} />
			</div>
		);
	}
}
