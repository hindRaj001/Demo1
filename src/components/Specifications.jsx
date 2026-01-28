
import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const Specifications = ({ formData, handleChange }) => {
  return (
    <>

      

      {/* <h6 className="fw-bold mt-4 mb-3">Specifications</h6> */}

      {/* Row 1 */}
      <Row className="mb-3">

       

        <Col md={3}>
          <Form.Label>Fluorescence :</Form.Label>
          <Form.Select
            name="fluorescence"
            value={formData.fluorescence}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>None</option>
            <option>Faint</option>
            <option>Medium</option>
            <option>Strong</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Lab :</Form.Label>
          <Form.Select
            name="lab"
            value={formData.lab}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>GIA</option>
            <option>IGI</option>
            <option>HRD</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Polish :</Form.Label>
          <Form.Select
            name="polish"
            value={formData.polish}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Excellent</option>
            <option>Very Good</option>
            <option>Good</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Symmetry :</Form.Label>
          <Form.Select
            name="symmetry"
            value={formData.symmetry}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Excellent</option>
            <option>Very Good</option>
            <option>Good</option>
          </Form.Select>
        </Col>

      </Row>

      {/* Row 2 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>Certificate No :</Form.Label>
          <Form.Control
            type="text"
            name="certificateNo"
            value={formData.certificateNo}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>H & A :</Form.Label>
          <Form.Select
            name="ha"
            value={formData.ha}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Inscription :</Form.Label>
          <Form.Control
            type="text"
            name="inscription"
            value={formData.inscription}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Table % :</Form.Label>
          <Form.Control
            type="number"
            name="tablePercent"
            value={formData.tablePercent}
            onChange={handleChange}
          />
        </Col>

      </Row>

      {/* Row 3 */}
      <Row className="mb-4">

        <Col md={3}>
          <Form.Label>Crown Angle :</Form.Label>
          <Form.Control
            type="number"
            name="crownAngle"
            value={formData.crownAngle}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Pavilion Angle :</Form.Label>
          <Form.Control
            type="number"
            name="pavilionAngle"
            value={formData.pavilionAngle}
            onChange={handleChange}
          />
        </Col>

      </Row>

    </>
  );
};

export default Specifications;
