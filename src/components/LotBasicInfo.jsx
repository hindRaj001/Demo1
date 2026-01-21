
import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const LotBasicInfo = ({ formData, handleChange, errors }) => {
  return (
    <Row className="mb-3">

      <Col md={3}>
        <Form.Label>Lot No :</Form.Label>
        <Form.Control
          type="text"
          name="lotNo"
          value={formData.lotNo}
          onChange={handleChange}
          isInvalid={!!errors.lotNo}
        />
        <Form.Control.Feedback type="invalid">
        {errors.lotNo}
        </Form.Control.Feedback>
      </Col>

      <Col md={3}>
        <Form.Label>Group :</Form.Label>
        <Form.Select
          name="group"
          value={formData.group}
          onChange={handleChange}
          isInvalid={!!errors.group}
        >
          <option value="">Select</option>
          <option>CS International</option>
          <option>Local</option>
        </Form.Select>
         <Form.Control.Feedback type="invalid">
        {errors.group}
        </Form.Control.Feedback>
      </Col>

      <Col md={3}>
        <Form.Label>Description :</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Col>

      <Col md={3}>
        <Form.Label>Supplier :</Form.Label>
        <Form.Select
          name="supplier"
          value={formData.supplier}
          onChange={handleChange}
          isInvalid={!!errors.group}
        >
          <option value="">Select</option>
          <option>Supplier A</option>
          <option>Supplier B</option>
        </Form.Select>
         <Form.Control.Feedback type="invalid">
        {errors.supplier}
        </Form.Control.Feedback>
      </Col>

    </Row>
  );
};

export default LotBasicInfo;
