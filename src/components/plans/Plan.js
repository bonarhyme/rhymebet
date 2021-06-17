import React from "react"
import { Row, Col } from "react-bootstrap"
import { FcInfo } from "react-icons/fc"
import { LinkContainer } from "react-router-bootstrap"

const Plan = ({ amount, description, plan, odds, duration }) => {
  return (
    <section className="blur-background my-5">
      <div class="card-container text-center">
        <h3>&#8358;{amount}</h3>
        <p>Min {odds} odds</p>
        <p>{duration} days duration</p>
        <button>Pay Now</button>
        <LinkContainer
          to={`/subscription/info/#${plan}`}
          className="news-button"
        >
          <button className="button-small button-small">
            <FcInfo /> Info
          </button>
        </LinkContainer>
      </div>
    </section>
  )
}

export default Plan
