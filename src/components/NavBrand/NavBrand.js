import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavBrand.css'

export const NavBrand = () => {
    return (
    <Navbar.Brand as={Link} to ="/">
    <img className='logoImg' alt="logo de maceta" src="./img/potlogo.png" />
    Vivero Iguazu
    </Navbar.Brand>);}