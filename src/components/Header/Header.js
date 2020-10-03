import React from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Web Design</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Graphics Design</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Learn Javascript</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Node Js</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        </Nav>
                        <Button variant="outline-success" className="identity">Sign in</Button>    
                        <Button variant="outline-success" className="identity">Register</Button>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div className="header">
                <div className="header-text">
                    <h4>Do you want to improve your career?</h4>
                    <br/>
                    <h2>Choose your course</h2>
                    <br/>
                    <h2>Access 2500+ Online Courses from <br/> 140 Institutions. Start Today!</h2>
                    <br/>
                    <input type="search" className="form-control m-auto" placeholder="search course"/>
                </div>
                {/* <div>
                    <img className="rounded ml-5" src="https://i.ibb.co/kyD39pT/1538758489content-bar-6-background1.jpg" alt=""/>
                </div> */}
            </div>
        </div>
    );
};

export default Header;