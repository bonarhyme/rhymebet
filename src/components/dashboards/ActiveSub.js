import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const ActiveSub = () => {
  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState(null);
  const [currency, setCurrency] = useState("");
  const [duration, setDuration] = useState(null);
  const [subDate, setSubDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const { loading, profile, success } = useSelector(
    (state) => state.userProfile
  );

  useEffect(() => {
    if (success) {
      const { activeSub } = profile;
      const {
        plan,
        amount,
        currency,
        duration,
        expiryDateLiteral,
        createdDate,
      } = activeSub;

      setPlan(plan);
      setAmount(amount);
      setCurrency(currency);
      setDuration(duration);
      setSubDate(createdDate);
      setExpiryDate(expiryDateLiteral);
    }
  }, [success, profile]);

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Duration</th>
              <th>Sub_Date</th>
              <th>Expiry_Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {plan ? (
                  plan
                ) : (
                  <Link to="/subscriptions" className="remove">
                    Buy Premium Game
                  </Link>
                )}
              </td>
              <td>
                {amount ? (
                  amount
                ) : (
                  <Link to="/subscriptions" className="remove">
                    Buy Premium Game
                  </Link>
                )}
              </td>
              <td>
                {currency ? (
                  currency
                ) : (
                  <Link to="/subscriptions" className="remove">
                    Buy Premium Game
                  </Link>
                )}
              </td>
              <td>
                {duration ? (
                  duration
                ) : (
                  <Link to="/subscriptions" className="remove">
                    Buy Premium Game
                  </Link>
                )}
              </td>
              <td>
                {subDate ? (
                  new Date(Number(subDate)).toString().slice(0, 25)
                ) : (
                  <Link to="/subscriptions" className="remove">
                    Buy Premium Game
                  </Link>
                )}
              </td>
              <td>
                {expiryDate ? (
                  expiryDate.slice(0, 25)
                ) : (
                  <Link to="/subscriptions" className="remove">
                    Buy Premium Game
                  </Link>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default ActiveSub;
