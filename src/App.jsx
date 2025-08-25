import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'  

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      <NavBar />
      <ItemListContainer welcome="¡Bienvenido a nuestra tienda online!" />
    </div>
  );
}
export default App
