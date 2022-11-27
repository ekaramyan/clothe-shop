import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__wrapper">
                    <p className="logo">Clothes</p>
                    <div className="header__links">
                        <a href="" className="header__link"></a>
                        <a href="" className="header__link"></a>
                        <a href="" className="header__link"></a>
                    </div>
                </div>
            </header>
        )
    }
}
