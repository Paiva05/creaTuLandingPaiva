import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail ({ Item }) {
  return (
    <Container className="mt-5">
            <Row>
                <Col lg={6} md={6}>
                    <Image src={Item?.thumbnail} fluid />
                </Col>
                <Col lg={6} md={6}>
                    <h2>{Item?.title}</h2>
                    <h3>$ {Item?.price}</h3>
                    <p>{Item?.description}</p>
                    <ItemCount />
                </Col>
            </Row>
        </Container>
  );
}

export default ItemDetail