import React from "react"
import { Table } from "react-bootstrap"
import { games } from "./games"
import { FaCheck, FaTimes } from "react-icons/fa"

const PremuimGames = () => {
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
                leagueFull,
                matchTime,
                wasWon,
                clubs,
                clubsFull,
              } = game
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td title={countryFull}>{country}</td>
                  <td title={leagueFull}>{league}</td>
                  <td title={clubsFull}>{clubs}</td>
                  <td title="Match result">-</td>
                  <td title="Number of goals">-</td>
                  <td title="Both teams to score">-</td>
                  <td title="Number of corners">-</td>
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

export default PremuimGames
