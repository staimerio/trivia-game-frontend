import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container fluid style={{ backgroundColor: "#e00002" }}>
      <Navbar expand="lg" className="justify-content-center py-3 row">
        <Link to="/" style={{ color: "#fff" }}>Question Game Coding Challenge</Link>
      </Navbar>
    </Container>
  );
}
export default Header;
