import React from 'react'
import { Rainbow } from 'react-bootstrap-icons'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Item = ({name, id, species, image}) => {
  return (
    <>
    <Container>
    <div className="d-grid gap-2 justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col>
                <h1>{id}.-{name}</h1>
                <h2>{species}</h2>
                <img src={image}/> 
                </Col>
                           
            </Row>
        <Row className="justify-content-md-center">
            <Col xs lg="3">
              {/* <Link to={`/ram/${id}`}>            */}
                <Button variant="secondary" size="sm">Ver detalle</Button>
              {/* </Link>             */}
            </Col>
        </Row>
        
    </div>
    </Container>    
    </>
    
  )
}

export default Item