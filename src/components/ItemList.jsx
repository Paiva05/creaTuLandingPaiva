import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import Item from "./Item.jsx"

function itemList({ items }) {
  return (
    <Container className="mt-5">
        <Row>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </Row>
    </Container>
  )
}

export default itemList;