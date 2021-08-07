import React, { useState } from "react";

import { Button, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Notice from "../subscriptions/Notice";

const News = () => {
  // eslint-disable-next-line
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Ronaldo just won the balon d'or",

      image:
        "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
      fullstory:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
      date: "8:55 pm, friday 20 sept, 2021",
    },
    {
      id: 2,
      title: "Ronaldo just won the balon d'or",

      image:
        "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
      fullstory:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
      date: "8:55 pm, friday 20 sept, 2021",
    },
    {
      id: 3,
      title: "Ronaldo just won the balon d'or",

      image:
        "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
      fullstory:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
      date: "8:55 pm, friday 20 sept, 2021",
    },
    {
      id: 4,
      title: "Ronaldo just won the balon d'or",

      image:
        "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
      fullstory:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
      date: "8:55 pm, friday 20 sept, 2021",
    },
  ]);
  return (
    <section>
      <h2 className="main-header">Sports News</h2>
      <Container>
        <Notice />
      </Container>
      <Container className="news-container">
        {news.map((story, index) => {
          const { title, image, fullstory, date, id } = story;
          return (
            <div className="py-3" key={index + 1}>
              <h4>{title}</h4>
              <small>{date}</small>
              <Image src={image} alt={title} fluid />
              <p>{fullstory.slice(0, 170)}</p>
              <LinkContainer to={`/sportsnews/${id}`}>
                <Button>Read more</Button>
              </LinkContainer>
            </div>
          );
        })}
      </Container>
      <LinkContainer to="/sportsnews" className="news-button">
        <button className="button-block wide-block d-block mx-auto bg-green color-white my-4 mx-3">
          View All Sports News
        </button>
      </LinkContainer>
    </section>
  );
};

export default News;
