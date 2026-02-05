import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const Specifications = ({ formData, handleChange }) => {

  // ✅ Fixed label width for alignment
  const labelStyle = {
    width: "95px",          // all labels same width
    whiteSpace: "normal",   // wrap long labels
    fontSize: "13px",
  };

  // ✅ Fixed field width
  const fieldStyle = {
    width: "120px",
  };

  return (
    <>

      

      {/* Row 1 → 6 Dropdown Fields */}
      <Row className="mb-1 g-3">

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Fluorescence:
            </Form.Label>
            <Form.Select
              name="fluorescence"
              value={formData.fluorescence}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Faint</option>
              <option>Medium</option>
              <option>Strong</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Lab:
            </Form.Label>
            <Form.Select
              name="lab"
              value={formData.lab}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>GIA</option>
              <option>IGI</option>
              <option>HRD</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Polish:
            </Form.Label>
            <Form.Select
              name="polish"
              value={formData.polish}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Symmetry:
            </Form.Label>
            <Form.Select
              name="symmetry"
              value={formData.symmetry}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Comment:
            </Form.Label>
            <Form.Select
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Minor</option>
              <option>Major</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Table Inc:
            </Form.Label>
            <Form.Select
              name="tableInclusion"
              value={formData.tableInclusion}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
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
      <Row className="mb-1 g-3">

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Luster:
            </Form.Label>
            <Form.Select
              name="luster"
              value={formData.luster}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Origin:
            </Form.Label>
            <Form.Select
              name="countryOrigin"
              value={formData.countryOrigin}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>India</option>
              <option>USA</option>
              <option>Dubai</option>
              <option>Other</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Shade:
            </Form.Label>
            <Form.Select
              name="shade"
              value={formData.shade}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Light</option>
              <option>Medium</option>
              <option>Dark</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Black Inc:
            </Form.Label>
            <Form.Select
              name="blackInclusion"
              value={formData.blackInclusion}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Few</option>
              <option>Medium</option>
              <option>Heavy</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Open Inc:
            </Form.Label>
            <Form.Select
              name="openInclusion"
              value={formData.openInclusion}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
            >
              <option value="">Select</option>
              <option>None</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={2}>
          <div className="d-flex align-items-center">
            <Form.Label style={labelStyle} className="mb-0">
              Lab2:
            </Form.Label>
            <Form.Select
              name="lab2"
              value={formData.lab2}
              onChange={handleChange}
              size="sm"
              style={fieldStyle}
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

     {/* Row 3 → Inputs aligned exactly under Row1/Row2 */}
<Row className="mb-1">

  {/* Lab2 No → Column 1 */}
  <Col md={2}>
    <div className="d-flex align-items-center">
      <Form.Label style={labelStyle} className="me-2 mb-0 text-nowrap">
        Lab2 No:
      </Form.Label>

      <Form.Control
        type="number"
        name="lab2No"
        value={formData.lab2No}
        onChange={handleChange}
        size="sm"
        style={fieldStyle}
      />
    </div>
  </Col>

  {/* Lab2 Weight → Column 2 */}
  <Col md={2}>
    <div className="d-flex align-items-center">
      <Form.Label style={labelStyle} className="me-2 mb-0 text-nowrap">
        Lab2 Wt:
      </Form.Label>

      <Form.Control
        type="number"
        name="lab2CtsWt"
        value={formData.lab2CtsWt}
        onChange={handleChange}
        size="sm"
        style={fieldStyle}
      />
    </div>
  </Col>

</Row>

    </>
  );
};

export default Specifications;
