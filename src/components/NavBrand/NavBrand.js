import Navbar from 'react-bootstrap/Navbar';
import './NavBrand.css'

export const NavBrand = () => {
    return (
    <Navbar.Brand href="#home">
    <img className='logoImg' alt="logo de maceta" src="./img/potlogo.png" />
    Vivero Iguazu
    </Navbar.Brand>);}