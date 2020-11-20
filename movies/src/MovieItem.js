import React from "react";
import { Card, Col } from "react-bootstrap";
function MovieItem(props) {
  const { title, overview, popularity, release_date } = props;
  return (
    <>
      <ul>
        <Col>
          <Card className="m-5 p-2" style={{ width: "320px" }}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${props.image}`}
            />
             <Card.Title>{title}</Card.Title>
            <Card.Body>
              <p>overview</p>
              <p>{overview}</p>
              <li>{popularity}</li>
              <li>{release_date}</li>
            </Card.Body>
          </Card>
        </Col>
      </ul>
    </>
  );
}

export default MovieItem;