import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, Footer } from '../components/';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import {
  fetchCategories,
  selectCategories,
} from '../store/categories/categories';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  const categoriesStatus = useSelector((state) => state.categories.status);

  useEffect(() => {
    if (categoriesStatus === 'initial') {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  return (
    <>
      <Menu />
      <Container>
        <Jumbotron>
          <h1 className="sliderPlaceholder">Slider</h1>
        </Jumbotron>

        <div id="categories">
          <h3>Kategoriler</h3>
          <div className="d-flex justify-content-around">
            {categories.map((element) => (
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
