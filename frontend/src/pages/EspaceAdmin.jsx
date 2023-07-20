import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import AuthFunctionContext from "../contexts/AuthFunctionContext";

function EspaceAdmin() {
  const { userToken } = useContext(AuthFunctionContext);

  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [failSubmit, setFailSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/sites`,
          {
            title,
            url,
            description,
            image,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setFailSubmit(false);
          } else {
            console.info(response);
          }
        })
        .catch((error) => {
          console.error(error.message);
          setFailSubmit(true);
        });
    }

    setValidated(true);
  };

  return (
    userToken && (
      <>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Titre du site</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Le site de la mort qui tue"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Ce champ est obligatoire.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Url du site</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="www.exemple.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Ce champ est obligatoire.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Description du site</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="C'est un site trop bien"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Ce champ est obligatoire.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Image url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Les informations fournis sont correctes?"
              feedback="Tu dois cocher la case."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        {failSubmit && (
          <div>
            <button
              className="bg-fail-auth-modal"
              type="button"
              onClick={() => setFailSubmit(false)}
              label="close fail submission modal"
            />
            <div className="fail-auth-modal">
              <button
                className="exit-modal-fail-button"
                type="button"
                onClick={() => setFailSubmit(false)}
              >
                <i className="fi fi-rr-cross-small" />
              </button>
              <p>La soumission du formulaire a échoué.</p>
              <p>Veuillez réessayer.</p>
            </div>
          </div>
        )}
      </>
    )
  );
}

export default EspaceAdmin;
