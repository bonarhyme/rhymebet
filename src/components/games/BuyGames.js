import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FcInfo } from "react-icons/fc";

import bank1 from "../../images/bank1.jpg";
import bank2 from "../../images/bank2.jpg";
import bank3 from "../../images/bank3.jpg";
import { plans } from "../plans/data";

const BuyGames = () => {
  return (
    <article>
      <Row className="py-5 text-center justify-content-center">
        <Col md={4} className="d-flex justify-content-center mb-2">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img variant="top" src={bank1} />
            <Card.Body>
              <Card.Title>Basic Plan</Card.Title>
              <Card.Text>
                <strong>&#8358;{plans.basic.price}</strong>
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>{plans.basic.odds} Odds Minimum</strong>
              </Card.Text>
              <Card.Text>
                <strong>{plans.basic.duration} Days Duration</strong>
              </Card.Text>
              <LinkContainer to="/subscription/basic">
                <Button variant="primary" className="my-mr-5" block>
                  Access
                </Button>
              </LinkContainer>
              <LinkContainer to="/subscription/info/#basic">
                <Button variant="outline-info">
                  <FcInfo /> Info
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-2">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img variant="top" src={bank2} />
            <Card.Body>
              <Card.Title>Standard Plan</Card.Title>
              <Card.Text>
                <strong>&#8358;{plans.standard.price}</strong>
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>{plans.standard.odds} Odds Minimum</strong>
              </Card.Text>
              <Card.Text>
                <strong>{plans.standard.duration} Days Duration</strong>
              </Card.Text>

              <LinkContainer to="/subscription/standard">
                <Button variant="primary" className="my-mr-5" block>
                  Access
                </Button>
              </LinkContainer>
              <LinkContainer to="/subscription/info/#standard">
                <Button variant="outline-info" block>
                  <FcInfo /> Info
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-2">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img variant="top" src={bank3} />
            <Card.Body>
              <Card.Title>Gold Plan</Card.Title>
              <Card.Text>
                <strong>&#8358;{plans.gold.price}</strong>
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>{plans.gold.odds} Odds Minimum</strong>
              </Card.Text>
              <Card.Text>
                <strong>{plans.gold.duration} Days Duration</strong>
              </Card.Text>

              <LinkContainer to="/subscription/gold">
                <Button variant="primary" className="my-mr-5" block>
                  Access
                </Button>
              </LinkContainer>
              <LinkContainer to="/subscription/info/#gold">
                <Button variant="outline-info" block>
                  <FcInfo /> Info
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default BuyGames;
