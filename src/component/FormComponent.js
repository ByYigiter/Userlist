import React, { Component } from "react";
import {
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "reactstrap";

export default class FormComponent extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			userName: "",
		};
	}

	onSubmit() {
		this.props.addUser(
			this.state.firstName,
			this.state.lastName,
			this.state.userName
		);
		this.props.hide();
	}

	onUpdate(){
		this.props.editUser(
			this.props.user.id,
			this.state.firstName,
			this.state.lastName,
			this.state.userName
		);
		this.props.hide();
	}

	componentDidMount(){
		this.setState({
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			userName: this.props.user.userName,
		})
	}

	render() {
		return (
			<div>
				<Modal fade={false} isOpen={this.props.visible}>
					<ModalHeader>Modal title</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="firstName">FirstName</Label>
								<Input
								value={this.state.firstName}
									onChange={(e) => this.setState({ firstName: e.target.value })}
									id="firstName"
									name="firstName"
									placeholder="First Name"
									type="text"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="lastName">Last Name</Label>
								<Input
									value={this.state.lastName}
									onChange={(e) => this.setState({ lastName: e.target.value })}
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									type="text"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="uname">User Name</Label>
								<Input
									value={this.state.userName}
									onChange={(e) => this.setState({ userName: e.target.value })}
									id="uname"
									name="userName"
									placeholder="User Name"
									type="text"
								/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						{this.props.user.id ? <button className="btn btn-success" onClick={() => this.onUpdate()}>Update</button>:
												<button className="btn btn-success" onClick={() => this.onSubmit()}>
												Submit
											</button>}
						<button
							className="btn btn-success"
							onClick={() => this.props.hide()}
						>
							{" "}
							Cancel
						</button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
