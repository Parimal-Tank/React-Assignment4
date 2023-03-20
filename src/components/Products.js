import React from "react";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import product from "../product.json";

const Products = () => {
  return (
    <div className="m-5">
    <div className="text-center my-5">
            <h2>BY YOUR FAVORITE PRODUCTS</h2>
    </div>
      <Row className="justify-content-center">
        {product.map((result) => {
          return (
            <Col sm="6" lg="3">
              <Card body>
                <div className="d-flex justify-content-between">
                  <CardTitle tag="h5">{result.title}</CardTitle>
                  <CardText tag={"h2"}>${result.price}</CardText>
                </div>

                <CardText className='text-start'>{result.description}</CardText>
                <div className="d-flex justify-content-end">
                  <Button outline color="warning">Add To Cart</Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
