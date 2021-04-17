import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export function Home() {
	return (
		<CardGroup>
			<Card>
				<Card.Body>
					<Card.Title>Register</Card.Title>

					<br />

					<div>
						<Form>
							<Form.Label>Account's type</Form.Label>
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
					variant="top"
					src="https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/04/02/5fa523c44bc98.jpeg"
					fluid
				/>
			</Card>
		</CardGroup>
	);
}
