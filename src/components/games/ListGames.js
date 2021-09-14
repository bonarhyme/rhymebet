import React from "react";
import { Table, Container } from "react-bootstrap";

import {
  FaTrashAlt,
  // FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  removeGameFromCart,
  clearGamesFromCart,
  // editGameInCart,
} from "../../actions/gamesActions";
import PostGames from "./PostGames";
import Loader from "../Loader";

const ListGames = () => {
  const dispatch = useDispatch();

  const { cartGames } = useSelector((state) => state.cart);

  const deleteGame = (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      dispatch(removeGameFromCart(id));
    }
  };

  // const editGame = (id) => {
  //   if (window.confirm("Are you sure you want to edit this game?")) {
  //     dispatch(editGameInCart(id));
  //   }
  // };

  const clearAllGames = () => {
    if (window.confirm("Are you sure you want to clear all games?")) {
      dispatch(clearGamesFromCart());
    }
  };

  const { loading } = useSelector((state) => state.postedGame);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <Container fluid>
          <div className="overflowing-table">
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
                  {/* <th>Edit</th> */}
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartGames ? (
                  cartGames.map((game, index) => {
                    const {
                      id,
                      country,
                      league,
                      countryFull,
                      corner,
                      gg,
                      leagueFull,
                      matchTime,
                      ov,
                      win,
                      clubs,
                      clubsFull,
                    } = game;
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td title={countryFull}>{country}</td>
                        <td title={leagueFull}>{league}</td>
                        <td title={clubsFull}>{clubs}</td>
                        <td title="Match result">{win}</td>
                        <td title="Number of goals">{ov}</td>
                        <td title="Both teams to score">{gg}</td>
                        <td title="Number of corners">{corner}</td>
                        <td>{new Date(matchTime).toString()}</td>
                        {/* <td title="Edit Game" onClick={(e) => editGame(id)}>
                      <FaEdit size={30} color="#3498db" />
                    </td> */}
                        <td title="Delete Game" onClick={() => deleteGame(id)}>
                          <FaTrashAlt size={30} color="#f02c2c" />
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                )}
              </tbody>
            </Table>
            <button
              className="mx-auto my-3 button-block wide-block bg-red color-white"
              onClick={clearAllGames}
            >
              <FaTrash /> {"  "}
              CLEAR ALL GAMES
            </button>
          </div>

          <PostGames />
        </Container>
      )}
    </section>
  );
};

export default ListGames;
