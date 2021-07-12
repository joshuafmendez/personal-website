import { projects } from "../data";
import { Card, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Apps I've built</h1>
      <div>
        <Container className="d-flex flex-wrap">
          {projects.map((project, i) => {

            // image needs to be placed back into project
            const { title, link, subtitle, description } = project;
            return (
              <Card
                key={i}
                style={{ width: "30rem" }}
                className="bg-dark text-white"
              >
                <Card.Img
                  style={{ height: "270px" }}
                  src="holder.js/100px270"
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{subtitle}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>{link}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            );
          })}
        </Container>
      </div>
    </section>
  );
};

export default Projects;
