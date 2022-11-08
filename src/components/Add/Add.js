import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Add = ({ addNewMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [imgsrc, setImgsrc] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    if (!title || !description || !rating || !imgsrc) {
      alert("fields required");
      return;
    }
    addNewMovie({ title, description, rating, posterUrl: imgsrc });
    handleClose();
    setTitle("");
    setDescription("");
    setRating(0);
    setImgsrc("");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            placeholder="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Control
            placeholder="rating"
            type="number"
            onChange={(e) => setRating(e.target.value)}
          />
          <Form.Control
            placeholder="imagesrc"
            type="url"
            onChange={(e) => setImgsrc(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
