import classes from "./Upcoming.module.css";
import Header from "../../UI/Header";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "antd";


const Upcoming = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=982ff97aabb3a7d82ef81ceca1af8515&language=en-US&page=1"
      );
      const postData = await response.json();
      console.log(postData.results);
      setData(postData.results);
    };
    fetchPosts();
  }, []);

  const Upc = data.map((date) => {
    return (
        <Card hoverable 
            syle={{ width: 240 }} 
            cover={<img 
                alt="example"
                src={`http://52.33.176.184/tmdbbd/${date.poster_path}`}
              />}
        />
    );
  });

  return (
    <div className={classes.background}>
      <Header />
      <Container>
        <Row>
          <Col>{Upc}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Upcoming;
