import React, { Component } from 'react'
import { Container, FormControl, Navbar, Form, Button, Nav } from 'react-bootstrap'
import logo from './logo.svg'

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand='md' bg='light' variant='light'>
                <Container>
                    <Navbar.Brand href='/' className="logo">
                        <img src="logo.svg"
                            alt="logo"
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/male'>Мужской</Nav.Link>
                            <Nav.Link href='/female'>Женский</Nav.Link>
                            <Nav.Link href='/kids'>Детский</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='mr-sm-2'
                            />
                            <Button variant='outline-info'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
