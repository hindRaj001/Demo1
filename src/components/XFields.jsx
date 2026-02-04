import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const XFields = ({ formData, handleChange }) => {
  return (
    <>
      {/* Row 1 → X1 to X5 */}
      <Row className="mb-2">
        
        <Col md={2}>
          <div className="d-flex align-items-center ">
            <Form.Label className="me-2 mb-0 text-nowrap">X1 (Inward):</Form.Label>
            <Form.Control
              type="number"
              name="x1"
              value={formData.x1}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X2 (Rap$):</Form.Label>
            <Form.Control
              type="number"
              name="x2"
              value={formData.x2}
              onChange={handleChange}
               style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X3 ($):</Form.Label>
            <Form.Control
              type="number"
              name="x3"
              value={formData.x3}
              onChange={handleChange}
               style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X4 (US$):</Form.Label>
            <Form.Control
              type="number"
              name="x4"
              value={formData.x4}
              onChange={handleChange}
               style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X5 (Quality Code):</Form.Label>
            <Form.Control
              type="number"
              name="x5"
              value={formData.x5}
              onChange={handleChange}
               style={{ width: "90px" }}
            />
          </div>
        </Col>

      </Row>

      {/* Row 2 → X6 to X10 */}
      <Row className="mb-2">

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X6 (Sacho Rate):</Form.Label>
            <Form.Control
              type="number"
              name="x6"
              value={formData.x6}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

         <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X6 (Sacho Code):</Form.Label>
            <Form.Control
              type="number"
              name="x6"
              value={formData.x6}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X7 (Quality Rate):</Form.Label>
            <Form.Control
              type="number"
              name="x7"
              value={formData.x7}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X8:</Form.Label>
            <Form.Control
              type="number"
              name="x8"
              value={formData.x8}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X9:</Form.Label>
            <Form.Control
              type="number"
              name="x9"
              value={formData.x9}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">X10:</Form.Label>
            <Form.Control
              type="number"
              name="x10"
              value={formData.x10}
              onChange={handleChange}
              style={{ width: "90px" }}
            />
          </div>
        </Col>

      </Row>

     
    </>
  );
};

export default XFields;
