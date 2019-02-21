import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


function renderApp () {
    ReactDOM.render(
        <Header />,
         document.getElementById('root')
    );
}

let logoText = 'Logo Placeholder'

const handleNavLinkClick = (event) => {
    event.preventDefault()

    const content = event.target.innerHTML

    logoText = content
    renderApp()
}

const Logo = () => {
    return (
        <div>
            <h1>{logoText}</h1>
        </div>
    )
}

const Navigation = () => {
    return (
        <nav className="site-nav">
            <ul>
                <li><a href="/" onClick={handleNavLinkClick}>Home</a></li>
                <li><a href="/contact" onClick={handleNavLinkClick}>Contact us</a></li>
                <li><a href="/about" onClick={handleNavLinkClick}>About</a></li>
            </ul>
        </nav>
    )
}

const Header = () => {
    return(
        <header>
            <Logo />
            <Navigation />
        </header>
    )
}

renderApp()