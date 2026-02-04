import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const Specifications = ({ formData, handleChange }) => {
  return (
    <>
      {/* Row 1 → 6 Dropdown Fields */}
      <Row className="mb-2">
        
        {/* Fluorescence */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              fluorescence:
            </Form.Label>
            <Form.Select
              name="fluorescence"
              value={formData.fluorescence}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Faint</option>
              <option>Medium</option>
              <option>Strong</option>
            </Form.Select>
          </div>
        </Col>

        {/* Lab */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Lab:
            </Form.Label>
            <Form.Select
              name="lab"
              value={formData.lab}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>GIA</option>
              <option>IGI</option>
              <option>HRD</option>
            </Form.Select>
          </div>
        </Col>

        {/* Polish */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Polish:
            </Form.Label>
            <Form.Select
              name="polish"
              value={formData.polish}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        {/* Symmetry */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Symmetry:
            </Form.Label>
            <Form.Select
              name="symmetry"
              value={formData.symmetry}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        {/* Comment */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Comment:
            </Form.Label>
            <Form.Select
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Minor</option>
              <option>Major</option>
            </Form.Select>
          </div>
        </Col>

        {/* Table Inclusion */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Tbl Inc:
            </Form.Label>
            <Form.Select
              name="tableInclusion"
              value={formData.tableInclusion}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Heavy</option>
            </Form.Select>
          </div>
        </Col>

      </Row>

      {/* Row 2 → 6 Dropdown Fields */}
      <Row className="mb-2">

        {/* Luster */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Luster:
            </Form.Label>
            <Form.Select
              name="luster"
              value={formData.luster}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        {/* Country of Origin */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Origin:
            </Form.Label>
            <Form.Select
              name="countryOrigin"
              value={formData.countryOrigin}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>India</option>
              <option>USA</option>
              <option>Dubai</option>
              <option>Other</option>
            </Form.Select>
          </div>
        </Col>

        {/* Shade */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Shade:
            </Form.Label>
            <Form.Select
              name="shade"
              value={formData.shade}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Light</option>
              <option>Medium</option>
              <option>Dark</option>
            </Form.Select>
          </div>
        </Col>

        {/* Black Inclusion */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Blk Inc:
            </Form.Label>
            <Form.Select
              name="blackInclusion"
              value={formData.blackInclusion}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Few</option>
              <option>Medium</option>
              <option>Heavy</option>
            </Form.Select>
          </div>
        </Col>

        {/* Open Inclusion */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Open Inc:
            </Form.Label>
            <Form.Select
              name="openInclusion"
              value={formData.openInclusion}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Select>
          </div>
        </Col>

        {/* Lab2 */}
        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Lab2:
            </Form.Label>
            <Form.Select
              name="lab2"
              value={formData.lab2}
              onChange={handleChange}
              size="sm"
            >
              <option value="">Select</option>
              <option>GIA</option>
              <option>IGI</option>
              <option>HRD</option>
              <option>None</option>
            </Form.Select>
          </div>
        </Col>

      </Row>

      {/* Row 3 → 2 Number Inputs */}
      <Row className="mb-2">

        {/* Lab2 No */}
        <Col md={3}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Lab2 No:
            </Form.Label>
            <Form.Control
              type="number"
              name="lab2No"
              value={formData.lab2No}
              onChange={handleChange}
               style={{ width: "90px" }}
            />
          </div>
        </Col>

        {/* Lab2 CtsWt */}
        <Col md={3}>
          <div className="d-flex align-items-center">
            <Form.Label className="me-2 mb-0 text-nowrap">
              Lab2 Wt:
            </Form.Label>
            <Form.Control
              type="number"
              name="lab2CtsWt"
              value={formData.lab2CtsWt}
              onChange={handleChange}
               style={{ width: "90px" }}
            />
          </div>
        </Col>

      </Row>
    </>
  );
};

export default Specifications;
