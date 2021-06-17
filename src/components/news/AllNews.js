import { Button, Card, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const news = [
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
  {
    id: 5,
    title: "Ronaldo just won the balon d'or",

    image:
      "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
    fullstory:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
    date: "8:55 pm, friday 20 sept, 2021",
  },
  {
    id: 6,
    title: "Ronaldo just won the balon d'or",

    image:
      "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
    fullstory:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
    date: "8:55 pm, friday 20 sept, 2021",
  },
  {
    id: 7,
    title: "Ronaldo just won the balon d'or",

    image:
      "https://th.bing.com/th/id/Rad40bff2fc2334163b05e20bb6e4fb0d?rik=qM5UBCn2fICXRA&riu=http%3a%2f%2fdailypost.ng%2fwp-content%2fuploads%2f2019%2f03%2fCristiano-Ronaldo.jpg&ehk=OtYylJrD2f7Tc8SDUgq81JpNan56el9EfEfyKxhKD6M%3d&risl=&pid=ImgRaw",
    fullstory:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo. sit amet consectetur adipisicing elit. Sint exercitationem recusandae officiis reiciendis architecto repellendus officia. Id distinctio, aut dolores explicabo modi sapiente earum deserunt maiores. Cupiditate, atque! Quisquam, quo.",
    date: "8:55 pm, friday 20 sept, 2021",
  },
]

const AllNews = () => {
  return (
    <main>
      <h1 className="text-center metal-font  large-font-size text-underline large-line-height my-5 py-3">
        All News
      </h1>
      <Container className="all-news-container">
        {news.map((data, index) => {
          const { date, fullstory, id, image, title } = data
          return (
            <article key={id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <small className="blur-text">{date}</small>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{fullstory.slice(0, 60)}....</Card.Text>
                  <LinkContainer to={`/sportsnews/${id}`}>
                    <Button variant="primary">Read More</Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </article>
          )
        })}
      </Container>
    </main>
  )
}

export default AllNews
