import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../assets/img/logo.png';
import './menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="My-App" className="Logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;