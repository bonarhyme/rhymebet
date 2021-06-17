import React from "react"
import { Table } from "react-bootstrap"
import { FaCheck, FaTimes } from "react-icons/fa"

import { games } from "./games"

const FreeGames = () => {
  return (
    <div className="overflowing-table">
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
              } = game
              return (
                <tr>
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
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default FreeGames
