import { Col, Row } from "react-bootstrap"
import { Item } from "../data/item"
import { StoreItem } from "../components/StoreItems"

export function Store (){
    return( 
    <>
    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} classname ="g-3">
        {Item.map(item => (
            <Col key={item.id}>
                <StoreItem item={item}/>
            </Col>
        ))}
    </Row>
    </>
    )
}