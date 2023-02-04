import "./Main.css";
import mona from "../images/mona.jpeg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Main() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} lg={6}>
          <h3 className="codevtme">codewithmounika</h3>
          <h2>I'm a UI</h2>
          Developer
          <p>
            Hello People!! I'm <strong>Mounika</strong> and I'm a self taught UI
            Developer from California. Designing a web page is so interesting
            and at the same time it's frustrating. But nothing in this world
            doesn't come with little Hardwork. Here is my Portfolio website.
            Have a look at it and Enjoy🙂
          </p>
          <Button variant="warning">Download CV</Button>
        </Col>
        <Col xs={12} md={4} lg={6}>
          <img src={mona} alt="monaimage" height="300" />
        </Col>
      </Row>
    </Container>
    // <div className="main">
    //   <article className="intro">
    //     <h3 className="codevtme">codewithmounika</h3>
    //     <h2>I'm a UI</h2>
    //     Developer
    //     <p>
    //       Hello People!! I'm <strong>Mounika</strong> and I'm a self taught UI
    //       Developer from California. Designing a web page is so interesting and
    //       at the same time it's frustrating. But nothing in this world doesn't
    //       come with little Hardwork. Here is my Portfolio website. Have a look
    //       at it and Enjoy🙂
    //     </p>
    //     <Button variant="warning">Download CV</Button>
    //   </article>

    //   <aside className="mona-image">
    //     <img src={mona} alt="monaimage" height="300" />
    //   </aside>
    // </div>
  );
}
export default Main;
