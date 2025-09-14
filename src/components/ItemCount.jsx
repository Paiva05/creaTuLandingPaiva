import { useState } from "react"
import  Button  from "react-bootstrap/Button"

function ItemCount() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSub = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Button variant="secondary" onClick={handleSub}>-</Button>
            <span>{count}</span>
            <Button variant="secondary" onClick={handleAdd}>+</Button>
            <Button variant="primary">Agregar al carrito</Button>
        </div>
    );
}

export default ItemCount;