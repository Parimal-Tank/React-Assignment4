import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Card, CardText, CardTitle, Col, Row } from "reactstrap";
import { AddCart, actFetchProductsRequest } from "../redux/actions/index";

const Products = (props) => {
  const { products } = props.products;

  useEffect(() => {
    props.actFetchProductsRequest();
  }, []);

  return (
    <div className="m-5">
      <div className="text-center my-5">
        <h2>BY YOUR FAVORITE PRODUCTS</h2>
      </div>
      <Row className="justify-content-center">
        {products.map((result, index) => {
          return (
            <Col sm="6" lg="3">
              <Card key={index} body>
                <div className="d-flex justify-content-between">
                  <CardTitle tag="h5">{result.title}</CardTitle>
                  <CardText tag={"h2"}>${result.price}</CardText>
                </div>

                <CardText className="text-start">{result.description}</CardText>
                <div className="d-flex justify-content-end">
                  <Button
                    outline
                    color="warning"
                    onClick={() => props.AddCart(result)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.Product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
