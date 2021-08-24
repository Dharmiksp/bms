import classes from "./Home.module.css";
import { Row, Container, Col } from "react-bootstrap";
import Logo from "../../Images/logo.png";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  return (
    <div className={classes.card}>
      <Container fluid>
        <Row>
          <Col lg={1} xs={2} sm={2} className={classes.marginright}>
            <img src={Logo} className={classes.image} alt="Logo" />
          </Col>
          <Col lg={1} xs={2} sm={2}>
            <div className={classes.testing}>
              <a className={classes.movies} href="/movies">
                MOVIES
              </a>
            </div>
          </Col>
          <Col lg={1} xs={2} sm={2}>
            <div className={classes.testing}>
              <a className={classes.upcoming} href="/upcoming">
                UPCOMING
              </a>
            </div>
          </Col>
          <Col lg={1} xs={2} sm={2}>
            <div className={classes.testing}>
              <a className={classes.events} href="/">
                EVENTS
              </a>
            </div>
          </Col>
          <Col lg={1} xs={2} sm={2}>
            <div className={classes.testing}>
              <a className={classes.contact} href="/">
                CONTACT
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={1} xs={0} sm={0} />
          <Col lg={3} xs={10} sm={10}>
            <div className={classes.title}>MOVIES CLUB</div>
            <div className={classes.details}>
              QMovies is an online database of information related to films,
              television programs, home videos, video games, and streaming
              content online, including cast, production crew, personal
              biographies, plot summaries, trivia, ratings, and fan critical
              reviews.
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={3} xs={12} sm={12}>
            <Container>
              <Row className={classes.hand}>
                <Col lg={2} xs={2} sm={2}>
                  <div className={classes.social}>
                    <SocialIcon
                      fgColor="white"
                      bgColor="transparent"
                      network="facebook"
                    />
                  </div>
                </Col>
                <Col lg={2} xs={2} sm={2}>
                  <div className={classes.social}>
                    <SocialIcon
                      fgColor="white"
                      bgColor="transparent"
                      network="instagram"
                    />
                  </div>
                </Col>
                <Col lg={2} xs={2} sm={2}>
                  <div className={classes.social}>
                    <SocialIcon
                      fgColor="white"
                      bgColor="transparent"
                      network="twitter"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
