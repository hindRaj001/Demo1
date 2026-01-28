
import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const XFields = ({ formData, handleChange }) => {
  return (
    <>

      {/* <h6 className="fw-bold mt-3 mb-3">X Fields</h6> */}

      {/* Row 1 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>X1 :</Form.Label>
          <Form.Control
            type="number"
            name="x1"
            value={formData.x1}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X2 :</Form.Label>
          <Form.Control
            type="number"
            name="x2"
            value={formData.x2}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X3 :</Form.Label>
          <Form.Control
            type="number"
            name="x3"
            value={formData.x3}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X4 :</Form.Label>
          <Form.Control
            type="number"
            name="x4"
            value={formData.x4}
            onChange={handleChange}
          />
        </Col>

      </Row>

      {/* Row 2 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>X5 :</Form.Label>
          <Form.Control
            type="number"
            name="x5"
            value={formData.x5}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X6 :</Form.Label>
          <Form.Control
            type="number"
            name="x6"
            value={formData.x6}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X7 :</Form.Label>
          <Form.Control
            type="number"
            name="x7"
            value={formData.x7}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X8 :</Form.Label>
          <Form.Control
            type="number"
            name="x8"
            value={formData.x8}
            onChange={handleChange}
          />
        </Col>

      </Row>

      {/* Row 3 */}
      <Row className="mb-4 align-items-center">

        <Col md={3}>
          <Form.Label>X9 :</Form.Label>
          <Form.Control
            type="number"
            name="x9"
            value={formData.x9}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>X10 :</Form.Label>
          <Form.Control
            type="number"
            name="x10"
            value={formData.x10}
            onChange={handleChange}
          />
        </Col>

         <Col md={6} className="pt-4">
                  <Form.Check
                    type="checkbox"
                    label="Check Here"
                    name="checkHere"
                    checked={formData.checkHere}
                    className="custom-checkbox2"
                    onChange={(e) =>
                      handleChange({
                        target: {
                          name: "checkHere",
                          value: e.target.checked
                        }
                      })
                    }
                  />
                </Col>

      </Row>

    </>
  );
};

export default XFields;
