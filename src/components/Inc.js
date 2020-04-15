import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../assets/Inc.css';

export function Header() {
    return (
        <header>
            Header
        </header>
    );
}

export function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    );
}

export function NavBar() {
    return (
        <nav>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src={logo} style={{ width: 50 }} />
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/'>
                            <a class="nav-item nav-link">home</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </nav>
    );
}