import { Container, ListGroup } from "react-bootstrap";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <Container style={{ marginTop: "50px" }}>
        <ListGroup>
          {skills.map((skill, i) => {
            return (
              <ListGroup.Item variant="secondary" key={i}>
                <i className="far fa-check-square"></i> {skill}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    </section>
  );
};

export default Skills;
