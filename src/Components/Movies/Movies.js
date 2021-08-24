import classes from "./Movies.module.css";
import Header from "../../UI/Header";
import {Container, Row, Col} from "react-bootstrap";

const Movies = () => {
  return <div className={classes.background}>
      <Header/>
      <Container>
          <Row>
              <Col>Hey</Col>
          </Row>

      </Container>
  </div>;
};

export default Movies;
