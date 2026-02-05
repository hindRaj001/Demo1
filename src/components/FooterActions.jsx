
import { Row, Col, Button, Form } from "react-bootstrap";


const FooterActions = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div style={{
    backgroundColor: "#ffffff",
    padding: "15px 20px",
    borderTop: "1px solid black",
    // borderLeft: "1px solid black",
    // borderRight: "1px solid black",
    boxShadow: "0 -2px 6px rgba(0,0,0,0.05)",
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

        

        
        

      </Row>

    </div>
  );
};

export default FooterActions;
