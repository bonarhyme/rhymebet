import React from "react";
import { Row, Col, Nav, Tab, Container } from "react-bootstrap";

import {
  FaHome,
  FaCoins,
  FaCalendar,
  // FaBox,
  FaReceipt,
} from "react-icons/fa";
import ActiveSub from "./ActiveSub";
import Overview from "./Overview";
import AllSubscriptions from "./AllSubscriptions";

const UserDashboardNav = () => {
  return (
    <Container fluid>
      <Tab.Container id="userDashboardNav" defaultActiveKey="overview">
        <Row>
          <Col xs={12} sm={12} md={12} lg xl={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="overview">
                  <span>
                    <FaHome size={30} />
                  </span>
                  <span className="trim">Overview</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="active-subscription">
                  <span>
                    <FaCalendar size={30} />
                  </span>
                  <span className="trim">
                    Active<i className="hide">_</i>Subscription
                  </span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="subscriptions">
                  <span>
                    <FaReceipt size={30} />
                  </span>
                  <span className="trim">Subscriptions</span>
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="promo">
                  <span>
                    <FaBox size={30} />
                  </span>
                  <span className="trim">Promo</span>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="referrals">
                  <span>
                    <FaCoins size={30} />
                  </span>
                  <span className="trim">Referrals</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={9}
            className="mt-on-small-screen"
          >
            <Tab.Content>
              <Tab.Pane eventKey="overview">
                <Overview />
              </Tab.Pane>
              <Tab.Pane eventKey="active-subscription">
                <ActiveSub />
              </Tab.Pane>
              <Tab.Pane eventKey="subscriptions">
                <AllSubscriptions />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="promo">
                <h2>Promo</h2>
              </Tab.Pane> */}
              <Tab.Pane eventKey="referrals">
                <h2>Referrals</h2>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default UserDashboardNav;
