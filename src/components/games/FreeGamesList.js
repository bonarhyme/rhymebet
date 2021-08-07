import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import {
  getFreeGamesList,
  updateGamesWasWon,
  deleteGame,
} from "../../actions/gamesActions";
import Message from "../Message";
import Loader from "../Loader";
import Paginate from "../Pagination";
import Notice from "../subscriptions/Notice";

const FreeGamesList = () => {
  const dispatch = useDispatch();

  const isFree = true;
  // eslint-disable-next-line
  const [creator, setCreator] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [games, setGames] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [creatorUser, setCreatorUser] = useState("");
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);

  // const [last, setLast] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, success, serverReply, error } = useSelector(
    (state) => state.gamesFreeListGet
  );

  const {
    success: wasWonSuccess,
    // eslint-disable-next-line
    serverReply: wasWonServerReply,
    error: wasWonError,
  } = useSelector((state) => state.gamesWasWonUpdate);

  const {
    success: deleteSuccess,
    // eslint-disable-next-line
    serverReply: deleteServerReply,
    error: deleteError,
  } = useSelector((state) => state.gameDelete);

  useEffect(() => {
    dispatch(getFreeGamesList(isFree, creator, pageNumber));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (success) {
      setPage(serverReply.page);
      setPages(serverReply.pages);
      setGames(serverReply.games);
      setCreatedAt(serverReply.games[0].createdAt);
      setCreatorUser(serverReply.games[0].creator[0].creatorUsername);
      setPageNumber(serverReply.page);
    }
  }, [dispatch, success, serverReply]);

  const handleWasWon = (id, status) => {
    dispatch(updateGamesWasWon(id, status));
  };

  useEffect(() => {
    if (wasWonSuccess || deleteSuccess) {
      dispatch(getFreeGamesList(isFree, creator, pageNumber));
    }
    // eslint-disable-next-line
  }, [wasWonSuccess, deleteSuccess]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      dispatch(deleteGame(id));
    }
  };

  return (
    <section className="px-3">
      <h2 className="main-header">Free Games</h2>
      <Notice />
      {error && <Message variant="danger">{error}</Message>}
      <div>
        {userInfo && userInfo.isAdmin && (
          <h5 className="other-header">
            Created On: {new Date(createdAt).toLocaleString()}
            {"      "}
            <p>
              Created By: <b>{creatorUser}</b>
            </p>
          </h5>
        )}

        {loading ? (
          <Loader />
        ) : (
          <>
            {wasWonError && <Message children={wasWonError} variant="danger" />}
            {deleteError && <Message children={deleteError} variant="danger" />}
            {pageNumber === 1 && <h3>Lastest Games</h3>}
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
                  {userInfo && userInfo.isAdmin && <th>Mark</th>}
                  {userInfo && userInfo.isAdmin && <th></th>}
                </tr>
              </thead>
              <tbody>
                {games.map((game, index) => {
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
                      _id,
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
                          {wasWon === null ? (
                            "Not Specified"
                          ) : wasWon === true ? (
                            <FaCheck color="green" />
                          ) : (
                            <FaTimes color="red" />
                          )}
                        </td>
                        {userInfo && userInfo.isAdmin && (
                          <td>
                            {" "}
                            <Button
                              variant="info"
                              onClick={() => handleWasWon(_id, "won")}
                              type="button"
                              disabled={wasWon === true}
                            >
                              Mark As Won
                            </Button>
                            {"  "}
                            <Button
                              variant="warning"
                              onClick={() => handleWasWon(_id, "failed")}
                              type="button"
                              disabled={wasWon === false}
                            >
                              Mark As Failed
                            </Button>
                          </td>
                        )}
                        {userInfo && userInfo.isAdmin && (
                          <td>
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(_id)}
                              type="button"
                            >
                              Delete
                            </Button>
                          </td>
                        )}
                      </tr>
                    );
                  });
                })}
              </tbody>
            </Table>
          </>
        )}
      </div>
      <Paginate creator={creator} isFree={isFree} page={page} pages={pages} />
    </section>
  );
};

export default FreeGamesList;
