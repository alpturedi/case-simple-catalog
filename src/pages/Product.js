import React from 'react';
import { Menu, Footer, Price } from '../components/';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { CATALOG_API } from '../constants';
import {
  useGetProductByIdQuery,
  useGetAllCategoriesQuery,
} from '../store/services/productApi';

const Product = () => {
  let params = useParams();
  let id = parseInt(params.id);
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const {
    data: categories,
    errorAtGettingCategories,
    isLoadingOnGettingCategories,
  } = useGetAllCategoriesQuery();

  return (
    <>
      <Menu />
      <Container>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : product ? (
          <Card className="productDesc">
            <Row>
              <Col className="productCol">
                <Card.Img
                  hvariant="top"
                  src={CATALOG_API + product.productImage}
                />
              </Col>
              <Col className="productCol">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="categoryName">
                    {categories?.find((e) => e.id === product.category)?.name}
                  </Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                  <Row>
                    <Col>
                      <Price value={product.price} />
                    </Col>
                    <Col className="ms-auto fav">
                      {product.isFavorite ? '🖤' : '🤍'}
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ) : null}
      </Container>
      <Footer />
    </>
  );
};

export default Product;
