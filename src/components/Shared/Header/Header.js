import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mx-auto bg-warning">
            <Container>
                <Navbar bg="warning" expand="lg" >
                    <Navbar.Brand href="#">Daily Goods</Navbar.Brand>
                    <div style={{ marginLeft: '300px' }}>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/fruits">Fruits</Nav.Link>
                                <Nav.Link href="#action2">Categories</Nav.Link>
                                <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                    <NavDropdown.Item as={Link} to="/fruits">Action</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/fruits">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/fruits">Something else here</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;