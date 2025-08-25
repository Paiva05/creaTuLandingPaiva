import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <header style={{ backgroundColor: '#ADD8E6', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ fontSize: '1.7rem', fontWeight: 'bold', color: '#1f2937', textDecoration: 'none' }}>
            QuimeraShop
          </a>
  
          <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                <li style={{ marginRight: '1.5rem' }}>
                  <a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.2rem', fontWeight: '500' }}>
                    Celulares
                  </a>
                </li>
                <li style={{ marginRight: '1.5rem' }}>
                  <a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.2rem',fontWeight: '500' }}>
                    Laptops
                  </a>
                </li>
                <li style={{ marginRight: '1.5rem' }}>
                  <a href="#" style={{ color: '#4b5563', textDecoration: 'none', fontSize: '1.2rem',fontWeight: '500' }}>
                    Accesorios
                  </a>
                </li>
              
            </ul>
          </nav>
  
          {/* Widget del carrito de compras */}
          <CartWidget />
        </div>
  
      </header>
    );
  };

  export default NavBar;