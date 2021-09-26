import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import { bank1, bank2, bank3, bank4, bank5 } from "../../data/variables";

import { plans } from "../plans/data";

import Notice from "../subscriptions/Notice";
import ActiveNotice from "../subscriptions/ActiveNotice";

const BuyGames = () => {
  return (
    <article>
      <h2 className="main-header">Subscriptions</h2>
      <Container>
        <Notice subScreen />
        <ActiveNotice />
      </Container>

      <Row className="py-5 text-center justify-content-center">
        <Col md={4} className="d-flex justify-content-center mb-2 mt-3">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img
              variant="top"
              src={bank5}
              className="mb-3"
              height={300}
              width={300}
              loading="lazy"
              alt="testie-plan"
            />
            <Card.Body>
              <Card.Title className="big-font bold">Testie Plan</Card.Title>
              <Card.Text>
                <strong className="big-font bold">
                  &#8358;{plans.testie.price}
                </strong>
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>
                  Access To Premium Games For {plans.testie.duration} Day
                </strong>
              </Card.Text>
              <LinkContainer to="/subscription/testie">
                <button className="big-button bg-blue color-white">
                  Access
                </button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-2  mt-3">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img
              variant="top"
              src={bank4}
              height={300}
              width={300}
              loading="lazy"
              alt="noob-plan"
            />
            <Card.Body>
              <Card.Title className="big-font bold">Noob Plan</Card.Title>
              <Card.Text>
                <strong className="big-font bold">
                  &#8358;{plans.noob.price}
                </strong>
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>
                  Access To Premium Games For {plans.noob.duration} Days
                </strong>
              </Card.Text>
              <LinkContainer to="/subscription/noob">
                <button className="big-button bg-blue color-white">
                  Access
                </button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-2  mt-3">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img
              variant="top"
              src={bank3}
              height={300}
              width={300}
              loading="lazy"
              alt="basic-plan"
            />
            <Card.Body>
              <Card.Title className="big-font bold">Basic Plan</Card.Title>
              <Card.Text>
                <strong className="big-font bold">
                  &#8358;{plans.basic.price}
                </strong>
              </Card.Text>
              <hr />
              <Card.Text>
                <strong>
                  Access To Premium Games For {plans.basic.duration} Days
                </strong>
              </Card.Text>
              <LinkContainer to="/subscription/basic">
                <button className="big-button bg-blue color-white">
                  Access
                </button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-2  mt-3">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img
              variant="top"
              src={bank2}
              height={300}
              width={300}
              loading="lazy"
              alt="standard-plan"
            />
            <Card.Body>
              <Card.Title className="big-font bold">Standard Plan</Card.Title>
              <Card.Text>
                <strong className="big-font bold">
                  &#8358;{plans.standard.price}
                </strong>
              </Card.Text>
              <hr />

              <Card.Text>
                <strong>
                  Access To Premium Games For Five {plans.standard.duration}{" "}
                  Days
                </strong>
              </Card.Text>

              <LinkContainer to="/subscription/standard">
                <button className="big-button bg-blue color-white">
                  Access
                </button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center mb-2  mt-3">
          <Card style={{ width: "18rem" }} border="primary">
            <Card.Img
              variant="top"
              src={bank1}
              height={300}
              width={300}
              loading="lazy"
              alt="gold-plan"
            />
            <Card.Body>
              <Card.Title className="big-font bold">Gold Plan</Card.Title>
              <Card.Text>
                <strong className="big-font bold">
                  &#8358;{plans.gold.price}
                </strong>
              </Card.Text>
              <hr />

              <Card.Text>
                <strong>
                  Access To Premium Games For {plans.gold.duration} Days
                </strong>
              </Card.Text>

              <LinkContainer to="/subscription/gold">
                <button className="big-button bg-blue color-white">
                  Access
                </button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </article>
  );
};

export default BuyGames;
