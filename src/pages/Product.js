import React, { useEffect } from 'react';
import { Menu, Footer, Price } from '../components/';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { CATALOG_API } from '../constants';
import {
  selectProductById,
  fetchProduct,
  selectProduct,
} from '../store/products/products';
import { useSelector, useDispatch } from 'react-redux';

const Product = () => {
  let params = useParams();

  let id = parseInt(params.id);

  let product = useSelector((state) => selectProductById(state, id));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!product) {
      dispatch(fetchProduct(id));
    }
  }, [id, dispatch]);

  product = useSelector(selectProduct);

  return (
    <>
      <Menu />
      <Container>
        {product && (
          <Card>
            <Row>
              <Col>
                <Card.Img
                  hvariant="top"
                  src={CATALOG_API + product.productImage}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>

                  <Card.Text>{product.description}</Card.Text>
                  <Row>
                    <Col>
                      <Price value={product.price} />
                    </Col>
                    <Col className="ms-auto">
                      {product.isFavorite ? '🖤' : '🤍'}
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Product;
