import React from 'react';
import { Menu, Footer } from '../components/';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../store/services/productApi';

const Homepage = () => {
  const { data, error, isLoading } = useGetAllCategoriesQuery();

  return (
    <>
      <Menu />
      <Container>
        <Jumbotron>
          <h1 className="sliderPlaceholder">Slider</h1>
        </Jumbotron>

        <div id="homeCategories">
          <h3>Kategoriler</h3>
          <div className="d-flex justify-content-around">
            {data?.map((element) => (
              <Col xs={3}>
                <Link to={'/categories/' + element.id.toString()}>
                  <Button key={element.id} variant="outline-dark">
                    {element.name}
                  </Button>
                </Link>
              </Col>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
