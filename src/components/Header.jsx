import React, { Component } from 'react'
import { Container, FormControl, Navbar, Form, Button, Nav } from 'react-bootstrap'
import '.././scss/styles.scss'
import logo from './img/logo.svg'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect fixed='top' expand='md' bg='light' variant='light' >
                    <Container className='container'>
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
                            <Form className='d-flex'>
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

                <Router>
                    <Switch>
                        <Route exact path='/male' component={Male} />
                        <Route exact path='/female' component={Female} />
                        <Route exact path='/kids' component={Kids} />

                    </Switch>
                </Router>
            </>
        )
    }
}
