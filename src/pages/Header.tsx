import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss'
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const logOutClicked = () => {
        navigate('/login');
    };

    return (
        <Navbar expand="lg" className={styles.mainNavBar}>
            <Container fluid>
                <Navbar.Brand href="#home" className={styles.mainProjectName}>
                    React
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Link</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown" className='text-white'>*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href="#home" className={styles.mainProjectName} onClick={logOutClicked}>
                    Logout
                </Nav.Link>
            </Container>
        </Navbar>
    );
}

export default Header;
