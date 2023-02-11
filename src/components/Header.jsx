import React, { Component } from 'react';
import { Container, FormControl, Navbar, Form, Button, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import '.././scss/styles.scss';
import logo from './img/logo.svg';

import Male from '../pages/Male';
import Female from '../pages/Female';
import Kids from '../pages/Kids';
import Categories from '../pages/Categories';


export default class Header extends Component {
    render() {
        return (

            <BrowserRouter>
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
                                <NavLink className='nav-link' to='/'>Все</NavLink>
                                <NavLink className='nav-link' to='/male'>Мужской</NavLink>
                                <NavLink className='nav-link' to='/female'>Женский</NavLink>
                                <NavLink className='nav-link' to='/kids'>Детский</NavLink>
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

                <Routes>


                    <Route path='/male' component={Male} element={<Male/>}/>

                    <Route path='/female' component={Female} element={<Female/>}/>


                    <Route path='/kids' component={Kids} element={<Kids/>}/>

                    <Route exact path='/' component={Categories} element={<Categories/>}/>

                </Routes>
            </BrowserRouter>

        );
    }
}
