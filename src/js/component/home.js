import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export function Home() {
	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>
						<h1>Register</h1>
					</Card.Title>

					<br />

					<div>
						<Form>
							<Form.Label>Type of Account</Form.Label>
							<Form.Control as="select">
								<option>User</option>
								<option>Pet Buddy</option>
							</Form.Control>

							<br />

							<Form.Group controlId="formBasicname">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="name"
									placeholder="Enter name"
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasiclastname">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="lastname"
									placeholder="Enter lastname"
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
								/>
							</Form.Group>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</div>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Have already accont?</small>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img
					variant="center"
					src="https://i.pinimg.com/originals/69/01/49/690149102923eab1898e3ab9eb138d62.jpg"
					thumbnail
				/>
			</Card>
		</CardGroup>
	);
}
