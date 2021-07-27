import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";

import { getFreeGamesList } from "../../actions/gamesActions";

const FreeGamesList = () => {
  const dispatch = useDispatch();

  const isFree = true;
  const [creator, setCreator] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [games, setGames] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [creatorUser, setCreatorUser] = useState("");

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.gamesFreeListGet
  );

  useEffect(() => {
    dispatch(getFreeGamesList(isFree, creator, pageNumber));
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setGames(serverReply.games);
      setCreatedAt(serverReply.games[0].createdAt);
      setCreatorUser(serverReply.games[0].creator[0].creatorUsername);
    }
  }, [dispatch, success, serverReply]);

  return (
    <section>
      <h2 className="main-header">Free Games List</h2>
      <div className="overflowing-table">
        <h5 className="other-header">
          Created On: {new Date(createdAt).toLocaleString()}
          {"      "}
          <p>
            Created By: <b>{creatorUser}</b>
          </p>
        </h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Country</th>
              <th>League</th>
              <th>Clubs</th>
              <th>Win</th>
              <th>Ov</th>
              <th>GG</th>
              <th>Corner</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {games.length > 0 &&
              games.map((game, index) => {
                return game.games.map((singleGame, index) => {
                  const {
                    country,
                    league,
                    countryFull,
                    corner,
                    gg,
                    leagueFull,
                    matchTime,
                    ov,
                    wasWon,
                    win,
                    clubs,
                    clubsFull,
                  } = singleGame;

                  return (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td title={countryFull}>{country}</td>
                      <td title={leagueFull}>{league}</td>
                      <td title={clubsFull}>{clubs}</td>
                      <td title="Match result">{win}</td>
                      <td title="Number of goals">{ov}</td>
                      <td title="Both teams to score">{gg}</td>
                      <td title="Number of corners">{corner}</td>
                      <td>{matchTime}</td>
                      <td>
                        {wasWon ? (
                          <FaCheck color="green" />
                        ) : (
                          <FaTimes color="red" />
                        )}
                      </td>
                    </tr>
                  );
                });
              })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default FreeGamesList;
