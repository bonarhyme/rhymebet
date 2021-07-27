import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import MyButton from "../components/buttons/MyButton";
import { gameVariables } from "../data/variables";

import { addGameToCart } from "../actions/gamesActions";
import Message from "../components/Message";
import ListGames from "../components/games/ListGames";

const CreateGame = () => {
  const dispatch = useDispatch();
  const id = Date.now().toString();

  const [league, setLeague] = useState("");
  const [leagueFull, setLeagueFull] = useState("");
  const [country, setCountry] = useState("");
  const [countryFull, setCountryFull] = useState("");
  const [clubs, setClubs] = useState("");
  const [clubsFull, setClubsFull] = useState("");
  const [win, setWin] = useState("");
  const [ov, setOv] = useState("");
  const [gg, setGg] = useState("");
  const [corner, setCorner] = useState("");
  const [matchTime, setMatchTime] = useState(null);
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [doubleGameError, setDoubleGameError] = useState(false);

  const handleFullLeague = (e) => {
    setLeagueFull(
      gameVariables.league
        .filter((x) => {
          const game = x.short === e.target.value;
          return game;
        })
        .map((y) => y.long)
        .toString()
    );
  };
  const handleCountry = (e) => {
    setCountry(
      gameVariables.league
        .filter((x) => {
          const game = x.short === e.target.value;
          return game;
        })
        .map((y) => y.country)
        .toString()
    );
  };
  const handleCountryFull = (e) => {
    setCountryFull(
      gameVariables.league
        .filter((x) => {
          const game = x.short === e.target.value;
          return game;
        })
        .map((y) => y.countryFull)
        .toString()
    );
  };

  const handleTeams = () => {
    const awayTeamShort = gameVariables.clubs
      .filter((x) => {
        const game = x.long === awayTeam;
        return game;
      })
      .map((y) => y.short)
      .toString();

    const homeTeamShort = gameVariables.clubs
      .filter((x) => {
        const game = x.long === homeTeam;
        return game;
      })
      .map((y) => y.short)
      .toString();

    setClubs(`${homeTeamShort} - ${awayTeamShort}`);
    setClubsFull(`${homeTeam} - ${awayTeam}`);
  };

  const addGameToCartHandler = (e) => {
    e.preventDefault();
    if (homeTeam === awayTeam) {
      setDoubleGameError(true);
    } else {
      setDoubleGameError(false);
      dispatch(
        addGameToCart(
          id,
          league,
          leagueFull,
          country,
          countryFull,
          clubs,
          clubsFull,
          win,
          ov,
          gg,
          corner,
          matchTime
        )
      );
    }
  };

  return (
    <section className="form-container ">
      <Row className="justify-content-center register mb-5 ">
        <Col className="py-5 my-5 register-container box-shadow-white " md={6}>
          <h2 className="main-header">Create Games</h2>
          <Form onSubmit={addGameToCartHandler} className="my-5 center-form ">
            <Form.Group controlId="league">
              <Form.Control
                as="select"
                defaultValue="Select League"
                onChange={(e) => {
                  setLeague(e.target.value);
                  handleFullLeague(e);
                  handleCountry(e);
                  handleCountryFull(e);
                }}
                required
              >
                <option value="">Choose a league</option>
                {gameVariables.league.map((x, i) => (
                  <option value={x.short} key={i} title={x.long}>
                    {x.short}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {doubleGameError && (
              <Message variant="danger">
                Home Team and Away Team cannot be the same
              </Message>
            )}
            <Form.Group controlId="Home-Team">
              <Form.Control
                as="select"
                defaultValue="Select Club"
                onChange={(e) => {
                  setHomeTeam(e.target.value);
                  setDoubleGameError(false);
                }}
                required
              >
                <option value="">Choose Home Team</option>
                {gameVariables.clubs.map((x, i) => (
                  <option
                    value={x.long}
                    key={i}
                    title={`${x.long} -- Country: ${x.country}`}
                  >
                    {x.long} - {x.country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Away-Team">
              <Form.Control
                as="select"
                defaultValue="Select Club"
                onChange={(e) => {
                  setAwayTeam(e.target.value);
                  setDoubleGameError(false);
                }}
                required
              >
                <option value="">Choose Away Team</option>
                {gameVariables.clubs.map((x, i) => (
                  <option
                    value={x.long}
                    key={i}
                    title={`${x.long} -- Country: ${x.country}`}
                  >
                    {x.long} - {x.country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Match-result">
              <Form.Control
                as="select"
                defaultValue="Select Win"
                onChange={(e) => {
                  setWin(e.target.value);
                  handleTeams();
                }}
                required
              >
                <option value="">Choose Match Result</option>
                {gameVariables.win.map((x, i) => (
                  <option value={x.short} key={i} title={x.long}>
                    {x.long} - {x.short}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Goals-number">
              <Form.Control
                as="select"
                defaultValue="Select Number of Goals"
                onChange={(e) => {
                  setOv(e.target.value);
                }}
                required
              >
                <option value="">Choose Number Of Goals</option>
                {gameVariables.ov.map((x, i) => (
                  <option value={x.short} key={i} title={x.long}>
                    {x.long}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Both-Team-To-Score">
              <Form.Control
                as="select"
                defaultValue="Select Both Team To Score"
                onChange={(e) => {
                  setGg(e.target.value);
                }}
                required
              >
                <option value="">Choose Both Team To Score</option>
                {gameVariables.gg.map((x, i) => (
                  <option value={x.short} key={i} title={x.long}>
                    {x.short}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="Corner">
              <Form.Control
                as="select"
                defaultValue="Select Corner Result"
                onChange={(e) => {
                  setCorner(e.target.value);
                }}
                required
              >
                <option value="">Choose Corner Score</option>
                {gameVariables.corner.map((x, i) => (
                  <option value={x.short} key={i} title={x.long}>
                    {x.long}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group
              controlId="Match-Time"
              onChange={(e) => setMatchTime(e.target.value)}
              required
            >
              <Form.Control
                type="datetime-local"
                placeholder="Choose Match Time"
              />
            </Form.Group>

            <MyButton text="Add Game" />
          </Form>
        </Col>
      </Row>
      <ListGames />
    </section>
  );
};

export default CreateGame;
