import "./Contact.css";
import openmail from "../images/open-mail.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contact">
      <div className="myMailImg">
        <img
          src={openmail}
          className="openMail"
          style={{ backgroundColor: "gray" }}
          alt="mailImg"
          width="300"
          height="300"
        />
      </div>

      <article className="writeForm">
        <h1>Contact Us</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Enter your name"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            {/* <Form.Control type="message" placeholder="Message"></Form.Control> */}
            <Form.Control
              as="textarea"
              placeholder="Message"
              rows={3}
            ></Form.Control>
          </Form.Group>
        </Form>
        <Button variant="primary">Send</Button>
      </article>
    </div>
  );
}
export default Contact;
