import React from "react";
import { Helmet } from "react-helmet";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Terms = () => {
  return (
    <main className="terms">
      <Helmet>
        <title>Terms and Conditions - Rhymebet</title>
        <meta name="description" content=" Rhymebet Terms and conditions" />
      </Helmet>
      <h1 className="main-header">Terms and Conditions</h1>
      <p className="discover-paragraph">
        <b>
          <FaInfoCircle color="#3498db" /> Please read the terms and conditins
          carefully and stop the usage of the website if you do not agree to
          them.
        </b>
      </p>
      <p class="discover-paragraph">
        <b>Note:</b> By using the premium or free predictions on{" "}
        <strong>rhymebet.com</strong> you agree to be bound by and to comply
        with:
        <ol>
          <li>Our Terms and Conditions</li>
          <li>
            Our <Link to="/discover/disclaimer">Disclaimer</Link>
          </li>
        </ol>
      </p>
      <article>
        <p className="discover-paragraph">
          <HashLink to="/#premium">Premium</HashLink> and{" "}
          <HashLink to="/#free">Free</HashLink> predictions (games) provided on{" "}
          <strong>rhymebet.com</strong> are our own opinions. They are not
          definite nor do they guarantee a sure win. It is worthy to note that
          users of <strong>rhymebet.com</strong> are at their own risk.
          Nevertheless, it doesn't mean that we are careless or nonchallant
          about our predictions.
        </p>
        <p className="discover-paragraph">
          We at <strong>rhymebet.com</strong> advice and encourage our users to
          bet responsibly (sensibly) and never to bet more than they can afford
          to loose. Hence, <strong>rhymebet.com</strong> would not be held
          responsible for any profit or losses incurred by the user whilst using
          our predictions.
        </p>
        <p className="discover-paragraph">
          <b>Note:</b> Any profit and loses incurred through gambling is the
          sole responsibility of the user and so, we do not grant refunds for
          payments made to us.
        </p>
        <p className="discover-paragraph">
          Moreover, betting is illegal in some countries, or areas of countries,
          thus, we at <strong>rhymebet.com</strong> encourage all users of our
          site to comply with the governing regulations in their province. It is
          the responsibility of users to act in accordance with their local
          laws.
        </p>
        <p className="discover-paragraph">
          Reproduction and lifting of materials such as predictions on{" "}
          <strong>rhymebet.com</strong> is prohibited. Thence, to reproduce any
          original material on <strong>rhymebet.com</strong> please contact us.
        </p>
      </article>

      <article>
        <h3 className="other-header mt-5">Premium Games</h3>
        <p className="discover-paragraph">
          <dl>
            <li>
              Premium games on <strong>rhymebet.com</strong> are provided to
              users that made payments to us.
            </li>
            <li>
              It is also provided to users who are on promo for having 10
              unsettled referrals (which refers to the referrals that haven't
              been marked as paid by us.)
            </li>
            <li>
              We provide the highest level of risk reduction in our premium
              games to ensure maximum returns for our users.
            </li>
            <li>
              We are however, not responsible for failing outcomes of all
              predictions including premium or free ones.
            </li>
            <li>
              Premium games on the site should not be relied upon absolutely
              when placing bets and making picks. Bets are ultimately made at
              users own risk and discretion.
            </li>
          </dl>
        </p>
      </article>
      <article>
        <h3 className="other-header">Our Liability</h3>
        <p className="discover-paragraph">
          <strong>rhymebet.com</strong> does not accept any liability for any
          damages, liabilities or losses which are deemed or alleged to have
          arisen out of or in connection with services, picks and predictions on
          the Website or its affiliates While <strong>rhymebet.com</strong>{" "}
          endeavors to ensure that the information on the Website is correct,{" "}
          <strong>rhymebet.com</strong> does not warrant the accuracy or
          completeness of the information and material on the Website. The
          Website may contain typographical errors or other inaccuracies, or
          information that is out of date. <strong>rhymebet.com</strong> is
          under no obligation to update such material.
        </p>
        <p className="discover-paragraph">
          The information, news and material on the Website is provided “as is”,
          without any conditions, warranties or other terms of any kind.
          Accordingly, to the maximum extent permitted by law,{" "}
          <strong>rhymebet.com</strong>
          provides you with the Website on the basis that{" "}
          <strong>rhymebet.com</strong>
          excludes all representations, express or implied warranties,
          conditions and other terms which but for these terms and conditions
          might have effect in relation to the Website.
        </p>
        <p className="discover-paragraph">
          <strong>rhymebet.com</strong> ensures that all information presented
          on its site is accurate and up to date. <strong>rhymebet.com</strong>{" "}
          would not be held responsible for user's individual discretional
          calculations. By viewing or using Predictions and Betting tips on{" "}
          <strong>rhymebet.com</strong> website or any of our affiliate sites,
          pages, accounts and/or signing up on the website, you agree to be
          bound by and to comply with our terms and conditions. By creating and
          profile signing up to use the <strong>rhymebet.com</strong> you hereby
          agree to abide by the terms and conditions summarized therein. Also by
          signing up, you have entrusted us with your emails and subscription
          details, we are therefore obligated to protect the information of our
          users.
        </p>
      </article>
    </main>
  );
};

export default Terms;
