import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
	const loggedUser = false;
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand className="fw-bold fs-2 text-warning">
							Shopper
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<LinkContainer to="/cart">
								<Nav.Link>
									<FaShoppingCart /> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/sign-in">
								<Nav.Link>
									<FaUser /> Sign In
								</Nav.Link>
							</LinkContainer>

							{loggedUser && (
								<NavDropdown title="User" id="basic-nav-dropdown">
									<LinkContainer to="/profile">
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>

									<NavDropdown.Divider />

									<LinkContainer to="/products-cart">
										<NavDropdown.Item>Products</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
