
import { Row, Col, Button, Form } from "react-bootstrap";


const FooterActions = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div style={{
    backgroundColor: "#ffffff",
    padding: "15px 20px",
    borderTop: "1px solid #dee2e6",
    boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
    position: "sticky",
    bottom: 0,
    zIndex: 100
  }}>

      <hr className="mt-4 mb-3" />

      <Row className="align-items-center">

        {/* Left side navigation buttons */}
        <Col md={6}>

          <Button variant="outline-secondary" className="me-2">
             ⏮ First
          </Button>

          <Button variant="outline-secondary" className="me-2">
            ◀ Prev
          </Button>

          <Button variant="outline-secondary" className="me-2">
            Next ▶
          </Button>

          <Button variant="outline-secondary">
            Last ⏭
          </Button>

        </Col>

        {/* Right side checkbox + save */}
        <Col md={6} className="text-end">

          <Form.Check
            inline
            type="checkbox"
            label="Create Multiple Lots"
            name="createMultiple"
            checked={formData.createMultiple}
            onChange={handleChange}
            className="me-3"
          />

          <Button 
            variant="success" 
            className="px-4 fw-bold"
            onClick={handleSubmit}
          >
            💾 Save
          </Button>

        </Col>

      </Row>

    </div>
  );
};

export default FooterActions;
