import Container from 'react-bootstrap/Container';
import {Nav,Navbar} from 'react-bootstrap';


function NavbarFun() {

    return (
        <>
            <Navbar bg="danger" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">NETFLIX</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favlist">FavList</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}


export default NavbarFun;