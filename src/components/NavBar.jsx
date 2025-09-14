import CartWidget from "./CartWidget";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from "react-router";

function NavBar ({ categories }) {
    return (
      <header style={{ backgroundColor: '#ADD8E6', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Navbar.Brand 
        as={Link}
        to="/"
        style={{ fontSize: '1.7rem', fontWeight: 'bold', color: '#1f2937' }}
        >
          Quimera Shop
        </Navbar.Brand>
  
          <nav>
          <NavDropdown title="Categorías" id="basic-nav-dropdown">
            {categories.map(category => (
              <NavDropdown.Item
              as={NavLink}
              to={`/category/${category}`}
              key={category}
              >
                {category}
                </NavDropdown.Item>
            ))}
            </NavDropdown>
          </nav>
  
          {/* Widget del carrito de compras */}
          <CartWidget />
        </div>
  
      </header>
    );
  };

  export default NavBar;