import NavBarContainer from './components/NavBarContainer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx' 
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router' 

function App() {
  return (
    <BrowserRouter>
    <NavBarContainer />   
    <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/category/:category/item/:id' element={<ItemDetailContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
