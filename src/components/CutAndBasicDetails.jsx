import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const CutAndBasicDetails = ({ formData, handleChange, errors }) => {
  return (
    <>
      {/* Row 2 */}
      <Row className="align-items-center mb-1">
        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Size:</Form.Label>
            <Form.Select name="size" value={formData.size} onChange={handleChange}>
              <option value="">Select</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Shape:</Form.Label>
            <Form.Select name="shape" value={formData.shape} onChange={handleChange}>
              <option value="">Select</option>
              <option>Round</option>
              <option>Oval</option>
              <option>Princess</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Cut:</Form.Label>
            <Form.Select name="cut" value={formData.cut} onChange={handleChange}>
              <option value="">Select</option>
              <option>Excellent</option>
              <option>Very Good</option>
              <option>Good</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Color:</Form.Label>
            <Form.Select name="color" value={formData.color} onChange={handleChange}>
              <option value="">Select</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
            </Form.Select>
          </div>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row className="align-items-center mb-1">
        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Purity:</Form.Label>
            <Form.Select
              name="purity"
              value={formData.purity}
              onChange={handleChange}
              isInvalid={!!errors.purity}
            >
              <option value="">Select</option>
              <option>IF</option>
              <option>VVS1</option>
              <option>VVS2</option>
              <option>VS1</option>
            </Form.Select>
          </div>

          <Form.Control.Feedback type="invalid" className="d-block">
            {errors.purity}
          </Form.Control.Feedback>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Unit:</Form.Label>
            <Form.Select name="unit" value={formData.unit} onChange={handleChange}>
              <option>Carats</option>
              <option>Grams</option>
            </Form.Select>
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Cut HS:</Form.Label>
            <Form.Control
              type="text"
              name="cutHS"
              value={formData.cutHS}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Origin:</Form.Label>
            <Form.Select
              name="colorOrigin"
              value={formData.colorOrigin}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Natural</option>
              <option>Treated</option>
            </Form.Select>
          </div>
        </Col>
      </Row>

      {/* Row 4 */}
      <Row className="align-items-center mb-1">
        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Min Girdle:</Form.Label>
            <Form.Control
              type="number"
              name="minGirdle"
              value={formData.minGirdle}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Max Girdle:</Form.Label>
            <Form.Control
              type="number"
              name="maxGirdle"
              value={formData.maxGirdle}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Ref No:</Form.Label>
            <Form.Control
              type="text"
              name="refNo"
              value={formData.refNo}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Weight:</Form.Label>
            <Form.Control
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>

      {/* Row 5 */}
      <Row className="align-items-center mb-1">
        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Remarks:</Form.Label>
            <Form.Control
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Depth:</Form.Label>
            <Form.Control
              type="number"
              name="depth"
              value={formData.depth}
              onChange={handleChange}
              isInvalid={!!errors.depth}
            />
          </div>

          <Form.Control.Feedback type="invalid" className="d-block">
            {errors.depth}
          </Form.Control.Feedback>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Cut EX:</Form.Label>
            <Form.Control
              type="text"
              name="cutEX"
              value={formData.cutEX}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-2">
            <Form.Label className="mb-0 w-50">Show Sr:</Form.Label>
            <Form.Control
              type="text"
              name="showSrNo"
              value={formData.showSrNo}
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CutAndBasicDetails;
