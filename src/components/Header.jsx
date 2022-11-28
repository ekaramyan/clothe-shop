import React, { Component } from 'react';
import { Container, FormControl, Navbar, Form, Button, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '.././scss/styles.scss';
import logo from './img/logo.svg';

import Male from '../pages/Male';
import Female from '../pages/Female';
import Kids from '../pages/Kids';
import Categories from '../pages/Categories';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect fixed='top' expand='md' bg='light' variant='light' >
                    <Container className='container'>
                        <Navbar.Brand href='/' className="logo">
                            <img src={logo}
                                alt="logo"
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='../pages/Categories'>Все</Nav.Link>
                                <Nav.Link href='../pages/Male'>Мужской</Nav.Link>
                                <Nav.Link href='../pages/Female'>Женский</Nav.Link>
                                <Nav.Link href='../pages/Kids'>Детский</Nav.Link>
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
                    <Routes>
                        <Route exact path='../pages/Categories' component={Categories} />
                        <Route exact path='../pages/Male' component={Male} />
                        <Route exact path='../pages/Female' component={Female} />
                        <Route exact path='../pages/Kids' component={Kids} />
                    </Routes>
                </Router>
            </>
        );
    }
}
