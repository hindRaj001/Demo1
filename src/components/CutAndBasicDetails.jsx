
import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const CutAndBasicDetails = ({ formData, handleChange, errors }) => {
  return (
    <>

      {/* Row 2 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>Size :</Form.Label>
          <Form.Select name="size" value={formData.size} onChange={handleChange}>
            <option value="">Select</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Shape :</Form.Label>
          <Form.Select name="shape" value={formData.shape} onChange={handleChange}>
            <option value="">Select</option>
            <option>Round</option>
            <option>Oval</option>
            <option>Princess</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Cut :</Form.Label>
          <Form.Select name="cut" value={formData.cut} onChange={handleChange}>
            <option value="">Select</option>
            <option>Excellent</option>
            <option>Very Good</option>
            <option>Good</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Color :</Form.Label>
          <Form.Select name="color" value={formData.color} onChange={handleChange}>
            <option value="">Select</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
          </Form.Select>
        </Col>

      </Row>

      {/* Row 3 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>Purity :</Form.Label>
          <Form.Select name="purity" value={formData.purity} onChange={handleChange} isInvalid={!!errors.purity}>
            <option value="">Select</option>
            <option>IF</option>
            <option>VVS1</option>
            <option>VVS2</option>
            <option>VS1</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
                  {errors.purity}
         </Form.Control.Feedback>
        </Col>

        <Col md={3}>
          <Form.Label>Unit :</Form.Label>
          <Form.Select name="unit" value={formData.unit} onChange={handleChange}>
            <option>Carats</option>
            <option>Grams</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Label>Cut HS :</Form.Label>
          <Form.Control
            type="text"
            name="cutHS"
            value={formData.cutHS}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Color of Origin :</Form.Label>
          <Form.Select
            name="colorOrigin"
            value={formData.colorOrigin}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option>Natural</option>
            <option>Treated</option>
          </Form.Select>
        </Col>

      </Row>

      {/* Row 4 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>Min Girdle :</Form.Label>
          <Form.Control
            type="number"
            name="minGirdle"
            value={formData.minGirdle}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Max Girdle :</Form.Label>
          <Form.Control
            type="number"
            name="maxGirdle"
            value={formData.maxGirdle}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Ref No :</Form.Label>
          <Form.Control
            type="text"
            name="refNo"
            value={formData.refNo}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Weight :</Form.Label>
          <Form.Control
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </Col>

      </Row>

      {/* Row 5 */}
      <Row className="mb-3">

        <Col md={3}>
          <Form.Label>Other Remarks :</Form.Label>
          <Form.Control
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Depth :</Form.Label>
          <Form.Control
            type="number"
            name="depth"
            value={formData.depth}
            onChange={handleChange}
            isInvalid={!!errors.depth}
          />
          <Form.Control.Feedback type="invalid">
                  {errors.depth}
         </Form.Control.Feedback>
        </Col>

        <Col md={3}>
          <Form.Label>Cut EX :</Form.Label>
          <Form.Control
            type="text"
            name="cutEX"
            value={formData.cutEX}
            onChange={handleChange}
          />
        </Col>

        <Col md={3}>
          <Form.Label>Show Wise Sr No :</Form.Label>
          <Form.Control
            type="text"
            name="showSrNo"
            value={formData.showSrNo}
            onChange={handleChange}
          />
        </Col>

      </Row>

    </>
  );
};

export default CutAndBasicDetails;
