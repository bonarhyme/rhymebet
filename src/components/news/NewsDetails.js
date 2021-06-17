import React from "react";
import { Container, Image } from "react-bootstrap";

const data = {
  id: 7,
  title: "Ronaldo just won the balon d'or",

  image:
    "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
  fullstory:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
  date: "8:55 pm, friday 20 sept, 2021",
};

const NewsDetails = ({ match }) => {
  const param = match.params.id;

  return (
    <section className="py-5 news-details">
      <Container className="py-5">
        <Image
          src={data.image}
          width="100%"
          style={{ maxWidth: "500px", float: "left", margin: "0  16px 16px 0" }}
        />

        <h2>{data.title}</h2>
        <small className="blur-text">{data.date}</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          exercitationem ipsam alias officiis in corporis, consequatur esse est
          eos praesentium expedita eius et repudiandae? Repellendus quas porro
          laborum a, pariatur in aspernatur nemo praesentium aliquid. Quos
          consequuntur qui reprehenderit dicta. Dignissimos officia dolorum
          quidem cum dolor earum cumque delectus consectetur dolorem, quam
          incidunt sit beatae recusandae perferendis quaerat perspiciatis sequi
          aliquid facere accusamus iusto quo nobis qui! Delectus dolores dolor
          aspernatur recusandae nostrum incidunt assumenda vel voluptates ipsum.
          Est nostrum assumenda nihil qui unde nisi distinctio labore optio aut
          enim eum minima maxime similique sint dolorem explicabo, atque iusto
          molestias, sit ipsam sed perferendis fugiat accusamus? Pariatur atque,
          perferendis reiciendis rem laboriosam unde nisi recusandae eaque
          tenetur! Suscipit tempore animi quibusdam porro nihil eos omnis modi
          illum in perspiciatis molestias dolorum quia iusto, asperiores nam
          fugit. Rem accusantium eligendi modi ab earum recusandae, fuga odio,
          libero ullam tempora tenetur rerum impedit dignissimos. Quisquam
          impedit ea tempore sequi temporibus earum id sunt nobis deleniti optio
          laudantium exercitationem dolor corporis ex totam asperiores ullam,
          debitis velit ducimus a reprehenderit at eveniet odio vel? Aliquid
          magni, provident nobis quod illum harum sit pariatur alias similique
          veritatis, soluta quo quaerat quibusdam obcaecati eum officia autem
          maxime aliquam impedit quisquam ea veniam eveniet. Excepturi quod
          rerum quidem sunt, vero repudiandae delectus iure inventore
          perspiciatis tempora nobis ad repellat non. Odio, tempora! Cumque ut
          facere deserunt excepturi! Veritatis, minus laudantium totam optio
          ullam dicta tempora impedit! Dolores, sed voluptas incidunt nihil,
          debitis laborum error corporis tempore laboriosam minima nesciunt,
          soluta atque. Dolore maiores, a officiis dolorem neque et asperiores
          officia quibusdam aliquam nobis, nulla delectus doloribus praesentium,
          aut dolor modi mollitia autem laborum omnis rerum sunt repellat
          distinctio ad. Maxime debitis inventore totam repellendus, vel
          provident tempore explicabo voluptatem recusandae saepe consequuntur
          at optio non accusamus nisi ratione, fugit numquam laboriosam, ex
          iste? Nostrum vel pariatur dolores temporibus quam, placeat est
          adipisci ducimus amet? Repellat harum deserunt omnis magnam atque,
          nulla odit libero sunt quo provident accusamus assumenda inventore,
          aperiam nam rem rerum beatae placeat a quisquam nisi recusandae?
          Repellendus soluta illum ullam autem temporibus voluptate.
        </p>
      </Container>
    </section>
  );
};

export default NewsDetails;
