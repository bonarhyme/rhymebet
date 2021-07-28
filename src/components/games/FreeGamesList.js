import React, { useEffect, useState } from "react";
import { Table, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";

import { getFreeGamesList } from "../../actions/gamesActions";
import Message from "../Message";
import Loader from "../Loader";

const FreeGamesList = () => {
  const dispatch = useDispatch();

  const isFree = true;
  const [creator, setCreator] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [games, setGames] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [creatorUser, setCreatorUser] = useState("");
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  // const [last, setLast] = useState(false);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.gamesFreeListGet
  );

  useEffect(() => {
    dispatch(getFreeGamesList(isFree, creator, pageNumber));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setPage(serverReply.page);
      setPages(9);
      setGames(serverReply.games);
      setCreatedAt(serverReply.games[0].createdAt);
      setCreatorUser(serverReply.games[0].creator[0].creatorUsername);
    }
  }, [dispatch, success, serverReply]);

  const handlePagination = (e) => {
    dispatch(getFreeGamesList(isFree, creator, e.target.innerText));
    // setLast(e.target.innerText === (pages - (pages - 1)));
  };

  return (
    <section className="px-3">
      <h2 className="main-header">Free Games List</h2>
      {error && <Message variant="danger">{error}</Message>}
      <div>
        <h5 className="other-header">
          Created On: {new Date(createdAt).toLocaleString()}
          {"      "}
          <p>
            Created By: <b>{creatorUser}</b>
          </p>
        </h5>
        {loading ? (
          <Loader />
        ) : (
          <Table striped bordered hover responsive>
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
                        <td>{new Date(matchTime).toLocaleString()}</td>
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
        )}
      </div>
      <div
        style={{
          width: "270px",
          overflowX: pages <= 8 ? "hidden" : "scroll",
        }}
        className="mx-auto my-4"
      >
        <div style={{ display: "inline-flex", height: "40px" }}>
          {pages > 1 && (
            <Pagination>
              {[...Array(pages).keys()].map((x) => {
                return (
                  <Pagination.Item
                    key={x + 1}
                    active={x + 1 === page}
                    onClick={(e) => handlePagination(e)}
                  >
                    {x + 1}
                  </Pagination.Item>
                );
              })}
            </Pagination>
          )}
        </div>
      </div>
    </section>
  );
};

export default FreeGamesList;
