import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const LotBasicInfo = ({ formData, handleChange, errors }) => {
  return (
    <Row className="align-items-center mb-2">

      {/* ✅ Lot No */}
      <Col md={3}>
        <div className="d-flex align-items-center gap-2">
          <Form.Label className="mb-0 w-50">Lot No:</Form.Label>

          <Form.Control
            type="text"
            name="lotNo"
            value={formData.lotNo}
            onChange={handleChange}
            isInvalid={!!errors.lotNo}
          />
        </div>

        <Form.Control.Feedback type="invalid" className="d-block">
          {errors.lotNo}
        </Form.Control.Feedback>
      </Col>

      {/* ✅ Group */}
      <Col md={3}>
        <div className="d-flex align-items-center gap-2">
          <Form.Label className="mb-0 w-50">Group:</Form.Label>

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
        </div>

        <Form.Control.Feedback type="invalid" className="d-block">
          {errors.group}
        </Form.Control.Feedback>
      </Col>

      {/* ✅ Description */}
      <Col md={3}>
        <div className="d-flex align-items-center gap-2">
          <Form.Label className="mb-0 w-50">Desc:</Form.Label>

          <Form.Control
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </Col>

      {/* ✅ Supplier */}
      <Col md={3}>
        <div className="d-flex align-items-center gap-2">
          <Form.Label className="mb-0 w-50">Supplier:</Form.Label>

          <Form.Select
            name="supplier"
            value={formData.supplier}
            onChange={handleChange}
            isInvalid={!!errors.supplier}
          >
            <option value="">Select</option>
            <option>Supplier A</option>
            <option>Supplier B</option>
          </Form.Select>
        </div>

        <Form.Control.Feedback type="invalid" className="d-block">
          {errors.supplier}
        </Form.Control.Feedback>
      </Col>

    </Row>
  );
};

export default LotBasicInfo;
