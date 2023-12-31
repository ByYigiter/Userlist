import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import UserListComponent from "../component/UserListComponent";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					id: uuidv4(),
					firstName: "Mark",
					lastName: "Otto",
					userName: "@mdo",
				},
				{
					id: uuidv4(),
					firstName: "Jacob",
					lastName: "Thornton",
					userName: "@fat",
				},
				{
					id: uuidv4(),
					firstName: "Larry",
					lastName: "the Bird",
					userName: "@twitter",
				},
				{
					id: uuidv4(),
					firstName: "Larry",
					lastName: "the Bird",
					userName: "@twitter",
				},
			],
		};
		this.addUser = this.addUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.editUser = this.editUser.bind(this);
	}

	addUser = (firstName, lastName, userName) => {
		if ((firstName, lastName, userName)) {
			const users = [...this.state.users];
			users.push({
				id: uuidv4(),
				firstName: firstName,
				lastName: lastName,
				userName: userName,
			});
			this.setState({ users });
			toast(` "${firstName}" kullanıcısi eklendi`);
		} else {
			alert("Please fill all the fields");
		}
	};

	deleteUser = (obj) => {
		const users = this.state.users.filter((user) => user.id !== obj.id);
		this.setState({ users });
		toast(` "${obj.firstName}" kullanıcısi silindi`);
	};

	editUser = (id, firstName, lastName, userName) => {
		if ((id, firstName, lastName, userName)) {
			const users = this.state.users.map((user) => {
				if (user.id === id) {
					user.firstName = firstName;
					user.lastName = lastName;
					user.userName = userName;
				}
				return user;
			});
			this.setState({ users });
		}
	};

	render() {
		return (
			<div>
				<ToastContainer />
				<Navbar color="light">
					<div className="container">
						<NavbarBrand href="/">User List</NavbarBrand>
					</div>
				</Navbar>
				<UserListComponent
					users={this.state.users}
					addUser={this.addUser}
					deleteUser={this.deleteUser}
					editUser={this.editUser}
				/>
			</div>
		);
	}
}
