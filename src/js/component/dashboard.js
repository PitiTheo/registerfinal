import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Card } from "react-bootstrap";

export function Dashboard() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Navbar.Brand href="#home">PetBnB</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#f"></Nav.Link>
						<Nav.Link href="#p"></Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#notificaciones">
							Notificaciones
						</Nav.Link>
						<Nav.Link eventKey={2} href="#cerrarsesion">
							Cerrar Sesion
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<br />

			<h6>Welcome User</h6>

			<br />
			<Card style={{ width: "50rem", margin: "auto" }}>
				<Card.Body>
					<Card.Header>Create profile</Card.Header>

					<br />

					<Card.Text>
						<Form>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Owner" />
							</Form.Group>

							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Buddy" />
							</Form.Group>

							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Apellidos</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
								/>
							</Form.Group>

							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Label>Provincia</Form.Label>
								<Form.Control as="select">
									<option>Alajuela</option>
									<option>Cartago</option>
									<option>San Jose</option>
									<option>Heredia</option>
									<option>Limon</option>
									<option>Guanacaste</option>
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Exact address</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
						</Form>
					</Card.Text>
					<Button variant="primary">Create profile</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
