import React, { useState, useEffect } from 'react';
import { Menu, Footer, Price } from '../components';
import { useParams, Link } from 'react-router-dom';
import { selectCategoryById } from '../store/categories/categories';
import {
  setCategoryId,
  fetchProducts,
  selectProducts,
} from '../store/products/products';
import { useSelector, useDispatch } from 'react-redux';
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import { CATALOG_API } from '../constants';

const Category = () => {
  let params = useParams();

  let id = parseInt(params.category);
  id = isNaN(id) ? -1 : id;

  const [cid, setCid] = useState(id);

  const selectedCategory = useSelector((state) =>
    selectCategoryById(state, id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoryId(id));
  }, [cid, dispatch]);

  const productsStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productsStatus === 'initial') {
      dispatch(fetchProducts(cid));
    }
  }, [productsStatus, dispatch]);

  let products = useSelector(selectProducts);

  return (
    <>
      <Menu />
      <Container>
        <h2>{selectedCategory.name}</h2>
        <span>{selectedCategory.description}</span>
        <hr />
        <CardGroup>
          {products.map((element) => (
            <Card style={{ width: '18rem' }}>
              <Link to={'/product/' + element.id.toString()}>
                <Card.Img
                  variant="top"
                  src={CATALOG_API + element.productImage}
                />
              </Link>
              <Card.Body>
                <Link to={'/product/' + element.id.toString()}>
                  <Card.Title>{element.name}</Card.Title>
                </Link>
                <Card.Text>{element.description}</Card.Text>
                <Row>
                  <Col>
                    <Price value={element.price} />
                  </Col>
                  <Col className="ms-auto">
                    {element.isFavorite ? '🖤' : '🤍'}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Container>
      <Footer />
    </>
  );
};

export default Category;
