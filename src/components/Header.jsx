import React, { Component } from 'react';
import { Container, FormControl, Navbar, Form, Button, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import '.././scss/styles.scss';
import logo from './img/logo.svg';

import Category from '../pages/Category';
import Female from '../pages/Female';
import Kids from '../pages/Kids';
import Categories from '../pages/Categories';
import axios from 'axios';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/category')
            .then(res => {
                this.setState({ categories: res.data.data })
            })
    }

    // const fetchCatgeries = axios.get()

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
                                {
                                    this.state.categories.map((category, id) =>
                                        <NavLink className='nav-link' to={'/category/' + category.id}
                                            key={id}
                                        >
                                            {category.title}
                                        </NavLink>
                                    )
                                }

                                {/* <NavLink className='nav-link' to='/male'>Мужской</NavLink>
                                <NavLink className='nav-link' to='/female'>Женский</NavLink>
                                <NavLink className='nav-link' to='/kids'>Детский</NavLink> */}
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

                    <Route path='/category/:id' element={<Category />} />

                    <Route exact path='/' element={<Categories />} />

                </Routes>
            </BrowserRouter>

        );
    }
}
