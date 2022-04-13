import {Navbar,Nav,Container} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header()
{
    return(
        <div>
            <Navbar className="color-nav" bg="dark" variant="dark">
                    <Navbar.Brand href="/">betterdinner</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        <Link to="/add" >Add Product</Link>
                        <Link to="/update" >Update Product</Link>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" >register</Link>

                    </Nav>

            </Navbar>

        </div>
    )
}
export default Header