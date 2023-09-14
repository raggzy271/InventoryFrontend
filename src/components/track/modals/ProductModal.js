import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export function AddProductModal({ show, onHide, onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddClick = () => {
    // Validate input
    if (!name || !price) {
      alert('Please enter both name and price.');
      return;
    }

    // Create a new product object
    const newProduct = {
      name,
      price: parseFloat(price),
    };

    // Call the onAdd function with the new product
    onAdd(newProduct);

    // Clear input fields
    setName('');
    setPrice('');

    // Hide the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={handleAddClick}>
          Add Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
