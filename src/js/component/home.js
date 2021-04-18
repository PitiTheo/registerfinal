import React from "react";
import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export function Home() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = event => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>
						<h1>Register</h1>
					</Card.Title>

					<br />

					<div>
						<Form
							noValidate
							validated={validated}
							onSubmit={handleSubmit}>
							<Form.Label>Type of Account</Form.Label>
							<Form.Control as="select">
								<option>User</option>
								<option>Pet Buddy</option>
							</Form.Control>

							<br />

							<Form.Group controlId="validationCustom01">
								<Form.Label>Name</Form.Label>
								<Form.Control
									required
									type="name"
									placeholder="Enter name"
								/>
							</Form.Group>

							<br />

							<Form.Group controlId="formBasiclastname">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									required
									type="lastname"
									placeholder="Enter lastname"
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<br />

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									required
									type="email"
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<br />

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Password"
								/>
							</Form.Group>

							<br />

							<Form.Group controlId="formBasicconfirmpassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									required
									type="confirmpassword"
									placeholder="Confirm Password"
								/>
							</Form.Group>

							<br />

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>

						<br />

						<small className="text-muted">
							Have already accont?
						</small>
					</div>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img
					variant="center"
					src="https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Transparent-OrangeWhiteCat-764x1024.png"
					thumbnail
				/>
			</Card>
		</CardGroup>
	);
}
