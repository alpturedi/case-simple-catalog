import React from 'react';
import { Menu, Footer, Price } from '../components';
import { useParams, Link } from 'react-router-dom';
import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import { CATALOG_API } from '../constants';
import {
  useGetCategoryByIdQuery,
  useGetProductsOfCategoryQuery,
  useGetAllCategoriesQuery,
} from '../store/services/productApi';

const Category = () => {
  let params = useParams();

  let id = parseInt(params.category);
  id = isNaN(id) ? -1 : id;

  const {
    data: category,
    errorAtGettingCategory,
    isLoadingOnGettingCategory,
  } = useGetCategoryByIdQuery(id);

  const {
    data: categories,
    errorAtGettingCategories,
    isLoadingOnGettingCategories,
  } = useGetAllCategoriesQuery();

  const {
    data: products,
    error: errorAtGettingProducts,
    isLoading: isLoadingOnGettingProducts,
  } = useGetProductsOfCategoryQuery(id);

  let error = errorAtGettingCategory || errorAtGettingProducts;

  console.log('CSTS', categories);

  return (
    <>
      <Menu />
      <Container>
        <h2>{id === -1 ? 'Favorites' : category?.name}</h2>
        <span>{id === -1 ? '' : category?.description}</span>
        <hr />
        <CardGroup id="productList">
          {products?.map((element) => (
            <Col xs={3}>
              <Card>
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
                  {/* <Card.Text>{element.description}</Card.Text> */}
                  <Card.Text>
                    {categories.find((e) => e.id === element.category).name}
                  </Card.Text>
                  <Card.Text></Card.Text>
                  <Row>
                    <Col>
                      <Price value={element.price} />
                    </Col>
                    <Col className="ms-auto fav">
                      {element.isFavorite ? '🖤' : '🤍'}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </Container>
      <Footer />
    </>
  );
};

export default Category;
